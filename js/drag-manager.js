/**
 * Drag Management System
 * Handles window dragging functionality
 */

class DragManager {
    constructor() {
        this.isDragging = false;
        this.currentWindow = null;
        this.offsetX = 0;
        this.offsetY = 0;
        
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    initWindow(windowElement) {
        const header = windowElement.querySelector('.window-header');
        if (!header) return;

        header.addEventListener('mousedown', (e) => this.handleMouseDown(e, windowElement));
    }

    handleMouseDown(e, windowElement) {
        // Don't drag if clicking control buttons or on mobile
        if (e.target.classList.contains('control-btn') || window.innerWidth <= 768) {
            return;
        }
        
        const rect = windowElement.getBoundingClientRect();
        this.offsetX = e.clientX - rect.left;
        this.offsetY = e.clientY - rect.top;
        
        this.isDragging = true;
        this.currentWindow = windowElement;
        
        windowManager.bringToFront(windowElement);
        windowElement.style.cursor = 'grabbing';
        
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging || !this.currentWindow) return;
        
        e.preventDefault();
        
        const newX = e.clientX - this.offsetX;
        const newY = Math.max(40, e.clientY - this.offsetY); // Keep below taskbar
        
        this.currentWindow.style.left = newX + 'px';
        this.currentWindow.style.top = newY + 'px';
        this.currentWindow.style.transform = 'none';
    }

    handleMouseUp() {
        if (this.currentWindow) {
            this.currentWindow.style.cursor = 'default';
        }
        
        this.isDragging = false;
        this.currentWindow = null;
    }
}

// Export for use in main.js
const dragManager = new DragManager();