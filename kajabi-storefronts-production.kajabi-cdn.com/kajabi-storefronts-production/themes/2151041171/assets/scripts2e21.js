(function () {
  "use strict";

  function closeAllDropdowns(root) {
    var scope = root || document;
    var openDropdowns = scope.querySelectorAll(".dropdown.dropdown--open");
    for (var i = 0; i < openDropdowns.length; i += 1) {
      openDropdowns[i].classList.remove("dropdown--open");
    }
  }

  function setupDropdowns() {
    document.addEventListener("click", function (event) {
      var trigger = event.target.closest(".dropdown__trigger");
      if (!trigger) {
        closeAllDropdowns(document);
        return;
      }

      var dropdown = trigger.closest(".dropdown");
      if (!dropdown || !dropdown.querySelector(".dropdown__menu")) {
        return;
      }

      event.preventDefault();
      var isOpen = dropdown.classList.contains("dropdown--open");
      closeAllDropdowns(document);
      if (!isOpen) {
        dropdown.classList.add("dropdown--open");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAllDropdowns(document);
      }
    });
  }

  function copyDesktopLinksToMobile(header) {
    var desktop = header.querySelector(".header__content--desktop");
    var mobile = header.querySelector(".header__content--mobile");
    if (!desktop || !mobile) {
      return;
    }

    var hasMenu = mobile.querySelector(".link-list, .dropdown, .user");
    if (hasMenu) {
      return;
    }

    var clone = desktop.cloneNode(true);
    var hamburgerInClone = clone.querySelector(".hamburger");
    if (hamburgerInClone && hamburgerInClone.parentNode) {
      hamburgerInClone.parentNode.removeChild(hamburgerInClone);
    }

    clone.classList.remove("header__content--desktop");
    clone.classList.add("header__content--mobile");
    mobile.innerHTML = clone.innerHTML;
  }

  function setupHeaderMenu(header) {
    var hamburger = header.querySelector(".hamburger");
    var mobile = header.querySelector(".header__content--mobile");
    if (!hamburger || !mobile) {
      return;
    }

    copyDesktopLinksToMobile(header);

    function closeMenu() {
      hamburger.classList.remove("hamburger--opened");
      mobile.style.display = "none";
      closeAllDropdowns(mobile);
    }

    function openMenu() {
      hamburger.classList.add("hamburger--opened");
      mobile.style.display = "block";
    }

    hamburger.addEventListener("click", function () {
      if (hamburger.classList.contains("hamburger--opened")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (!header.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });
  }

  function init() {
    setupDropdowns();

    var headers = document.querySelectorAll(".header");
    for (var i = 0; i < headers.length; i += 1) {
      setupHeaderMenu(headers[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
