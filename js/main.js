(function() {
  const menuButton = document.querySelector(".menu-toggle");
  const menuList = document.querySelectorAll(".menu > .menu-item");
  const lineOne = document.querySelector(".line-one");
  const lineTwo = document.querySelector(".line-two");


  const menuAnimator = function() {
    if (window.scrollY >= 50) {
      // Animate the Main Menu out of view
      menuList.forEach(el => el.classList.add("hide-menu"));
      // Animate the first line
      lineOne.classList.add("line-one-animate");
      // Animate the second line
      lineTwo.classList.add("line-two-animate");
      //A11Y
      menuButton.classList.add("button-animate");
    } else {
      // Animate the Main Menu into view
      menuList.forEach(el => el.classList.remove("hide-menu"));
      // Animate the first line
      lineOne.classList.remove("line-one-animate");
      // Animate the second line
      lineTwo.classList.remove("line-two-animate");
      //A11Y
      menuButton.classList.remove("button-animate");
    }
  };

  const displayDesktopMenu = function() {
    menuList.forEach(el => {
      el.classList.remove("hide-menu");
    });
  };

  // --------------------------------------------------------------------------
  // ---------------------- MOBILE BUTTON & MENU ------------------------------
  // --------------------------------------------------------------------------

  const mobileButton = document.querySelector(".round-btn");
  const mobileCover = document.querySelector(".mobile-cover");
  const menuContainer = document.querySelector(".menu-mobile-container");
  const mobileMenuItems = document.querySelectorAll(".menu > .menu-item");

  const mobileMenuAnimator = function() {
    mobileCover.classList.toggle("active");
    if (mobileCover.classList.contains("active")) {
      menuContainer.classList.add("active-fade");
      mobileMenuItems.forEach(el => {
        el.classList.add("active-open");
        setTimeout(() => {
          el.classList.add("active-fade");
        }, 300);
      });
    } else {
      mobileMenuItems.forEach(el => {
        el.classList.remove("active-fade");
        el.classList.add("active-open");
      });

      menuContainer.classList.remove("active-fade");
    }
  };

  // --------------------------------------------------------------------------
  // ---------------------- PROJECT GALLERY PAGES -----------------------------
  // --------------------------------------------------------------------------

  const imageRandom = function() {
    const listItems = document.querySelectorAll(".items");
    const transformClasses = [
      "img-center",
      "img-bottom-left",
      "img-top-right",
      "img-bottom-right"
    ];

    listItems.forEach(item => {
      item.classList.add(
        transformClasses[parseInt(Math.random() * 1000, 10) % 4]
      );
    });
  };

  const preLoader = function() {
    const preLoader = document.querySelector(".pre-loader");

    setTimeout(() => {
      preLoader.classList.remove("pre-load-hide");
      setTimeout(() => {
        preLoader.classList.add("disabled");
      }, 1000);
    }, 2000);
  };

  imageRandom();
  preLoader();
  window.addEventListener("scroll", menuAnimator);
  menuButton.addEventListener("click", displayDesktopMenu);
  mobileButton.addEventListener("click", mobileMenuAnimator);
})();
