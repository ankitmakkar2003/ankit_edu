/* eslint-disable no-var, prefer-arrow-callback, object-shorthand, prefer-template */

(function (global) {
  var PDS_TOAST_CONTAINER_ID = 'pds-toast-global-container';
  var activeToasts = {}; // Keep track of active toasts by their unique ID

  function getOrCreateToastContainer() {
    var container = document.getElementById(PDS_TOAST_CONTAINER_ID);
    if (!container) {
      container = document.createElement('div');
      container.id = PDS_TOAST_CONTAINER_ID;
      container.style.display = 'flex';
      container.style.position = 'fixed';
      container.style.insetInlineEnd = '0'; // RTL-friendly positioning from right edge
      container.style.insetBlockEnd = '0'; // Position at bottom of viewport
      container.style.flexDirection = 'column';
      container.style.alignItems = 'flex-end';
      container.style.zIndex = '9999';
      container.style.width = 'auto';

      // Add responsive padding based on screen size
      var mdMinWidth = 768; // Medium breakpoint for desktop/tablet
      if (window.innerWidth >= mdMinWidth) {
        container.style.paddingBottom = 'calc(16px - 4px)'; // 12px spacing accounting for toast margins
        container.style.paddingLeft = '16px';
        container.style.paddingRight = '16px';
        // Constrain container width to ensure toasts don't exceed 350px
        container.style.maxWidth = 'min(382px, 90vw)'; // 350px toast + 32px horizontal padding
      } else {
        container.style.paddingBottom = 'calc(8px - 8px)'; // No bottom padding on mobile
        container.style.paddingLeft = '8px';
        container.style.paddingRight = '8px';
        // Mobile width constraint with reduced padding
        container.style.maxWidth = 'min(366px, 90vw)'; // 350px toast + 16px horizontal padding
      }

      document.body.appendChild(container);
    }
    return container;
  }

  function generateUniqueId() {
    return 'pds-toast-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
  }

  function removeToastElement(toastId) {
    var toastElement = activeToasts[toastId];
    if (toastElement && toastElement.parentNode) {
      toastElement.parentNode.removeChild(toastElement);
      delete activeToasts[toastId];
    }
  }

  function show(options) {
    var container = getOrCreateToastContainer();
    var toastInstanceId = generateUniqueId();

    var toastElement = document.createElement('pds-toast');
    toastElement.type = options.type || 'default';
    toastElement.duration = options.duration ?? 4500;
    toastElement.dismissible = options.dismissible !== false;
    toastElement.componentId = toastInstanceId;

    if (options.icon) {
      toastElement.icon = options.icon;
    }

    if (options.message) {
      toastElement.innerHTML = options.message;
    }

    activeToasts[toastInstanceId] = toastElement;

    toastElement.addEventListener('pdsToastDismissed', function handleDismiss(event) {
      if (event.detail && event.detail.componentId && activeToasts[event.detail.componentId]) {
        removeToastElement(event.detail.componentId);
      }
    });

    if (container.firstChild) {
      container.insertBefore(toastElement, container.firstChild);
    } else {
      container.appendChild(toastElement);
    }

    return toastInstanceId;
  }

  function hide(toastId) {
    removeToastElement(toastId);
  }

  function hideAll() {
    var toastIds = Object.keys(activeToasts);
    toastIds.forEach(function(id) {
      removeToastElement(id);
    });
  }

  global.PinePds = global.PinePds || {};
  global.PinePds.ToastController = {
    show: show,
    hide: hide,
    hideAll: hideAll,
  };
})(window);
