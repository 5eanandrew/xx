/**
 * Window Management System
 * Handles window operations, taskbar, and z-index management
 */

class WindowManager {
    constructor() {
        this.windows = new Map();
        this.currentZIndex = 100; // Starting z-index for windows
    }

    register(windowId, element) {
        this.windows.set(windowId, {
            element,
            originalState: null,
            isMaximized: false
        });
    }

    open(windowId) {
        const window = this.windows.get(windowId);
        if (!window) return;

        window.element.classList.add('active');
        this.bringToFront(window.element);
        this.removeFromTaskbar(windowId);
    }

    close(windowId) {
        const window = this.windows.get(windowId);
        if (!window) return;

        window.element.classList.remove('active');
        this.removeFromTaskbar(windowId);
    }

    minimize(windowId) {
        const window = this.windows.get(windowId);
        if (!window) return;

        window.element.classList.remove('active');
        this.addToTaskbar(windowId);
    }

    maximize(windowId) {
        const window = this.windows.get(windowId);
        if (!window) return;

        const element = window.element;
        
        if (window.isMaximized) {
            // Restore
            if (window.originalState) {
                Object.assign(element.style, window.originalState);
                window.isMaximized = false;
                window.originalState = null;
            }
        } else {
            // Store original state
            window.originalState = {
                width: element.style.width,
                height: element.style.height,
                top: element.style.top,
                left: element.style.left,
                transform: element.style.transform
            };
            
            // Maximize
            element.style.width = '100vw';
            element.style.height = 'calc(100vh - 40px)';
            element.style.top = '40px';
            element.style.left = '0';
            element.style.transform = 'none';
            window.isMaximized = true;
        }
    }

    bringToFront(element) {
        element.style.zIndex = ++this.currentZIndex;
    }

    addToTaskbar(windowId) {
        this.removeFromTaskbar(windowId);
        
        const window = this.windows.get(windowId);
        if (!window) return;

        const title = window.element.querySelector('.window-title').textContent;
        const icon = this.getWindowIcon(windowId);
        
        const taskbarItem = document.createElement('div');
        taskbarItem.className = 'taskbar-item';
        taskbarItem.dataset.windowId = windowId;
        taskbarItem.onclick = () => this.restore(windowId);
        taskbarItem.innerHTML = `${icon} ${title}`;
        
        document.getElementById('taskbarLeft').appendChild(taskbarItem);
    }

    removeFromTaskbar(windowId) {
        const item = document.querySelector(`[data-window-id="${windowId}"]`);
        if (item) item.remove();
    }

    restore(windowId) {
        const window = this.windows.get(windowId);
        if (!window) return;

        window.element.classList.add('active');
        this.bringToFront(window.element);
        this.removeFromTaskbar(windowId);
    }

    getWindowIcon(windowId) {
        const icons = {
            'portfolioWindow': '📁',
            'resumeWindow': '📄',
            'aboutWindow': '📝'
        };
        return icons[windowId] || '📄';
    }
}

// Export for use in main.js
const windowManager = new WindowManager();