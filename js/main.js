/**
 * Main Application Entry Point
 * Coordinates all components and handles initialization
 */

// Configuration
const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024
};

// DOM Cache
const DOM = {
    portfolioWindow: null,
    contactModal: null,
    contactForm: null,
    
    init() {
        this.portfolioWindow = document.getElementById('portfolioWindow');
        this.contactModal = document.getElementById('contactModal');
        this.contactForm = document.getElementById('contactForm');
    }
};

// Public API functions for HTML onclick handlers
function openWindow(type) {
    windowManager.open(type + 'Window');
}

function closeWindow(windowId) {
    windowManager.close(windowId);
}

function minimizeWindow(windowId) {
    windowManager.minimize(windowId);
}

function maximizeWindow(windowId) {
    windowManager.maximize(windowId);
}

// Contact Modal Management
function openContactModal() {
    DOM.contactModal.classList.add('active');
}

function closeContactModal() {
    DOM.contactModal.classList.remove('active');
    DOM.contactForm.reset();
}

function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    closeContactModal();
}

// Keyboard Support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (DOM.contactModal.classList.contains('active')) {
            closeContactModal();
        }
        if (document.getElementById('caseStudyModal').classList.contains('active')) {
            closeCaseStudy();
        }
    }
});

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM cache
    DOM.init();
    
    // Register windows with window manager
    windowManager.register('portfolioWindow', DOM.portfolioWindow);
    windowManager.register('resumeWindow', document.getElementById('resumeWindow'));
    windowManager.register('aboutWindow', document.getElementById('aboutWindow'));
    
    // Initialize dragging for all windows
    document.querySelectorAll('.window').forEach(windowEl => {
        dragManager.initWindow(windowEl);
        
        // Bring window to front on click
        windowEl.addEventListener('mousedown', () => {
            if (windowEl.classList.contains('active')) {
                windowManager.bringToFront(windowEl);
            }
        });
    });
    
    console.log('Portfolio initialized successfully');
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        if (e.target.id === 'contactModal') {
            DOM.contactForm.reset();
        }
    }
});

// Export global functions for HTML onclick handlers
window.openWindow = openWindow;
window.closeWindow = closeWindow;
window.minimizeWindow = minimizeWindow;
window.maximizeWindow = maximizeWindow;
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;
window.handleContactForm = handleContactForm;
window.openCaseStudy = openCaseStudy;
window.closeCaseStudy = closeCaseStudy;