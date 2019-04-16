(function() {
  // --------------------------------------------------------------------------
  // ------------------ Check Page - Apply Line Class -------------------------
  // --------------------------------------------------------------------------

  const menuButton = document.querySelector(".menu-toggle");
  const menuList = document.querySelectorAll(".menu > .menu-item");
  const lineOne = document.querySelector(".line-one");
  const lineTwo = document.querySelector(".line-two");
  const lineThree = document.querySelector(".line-three");
  

  const navUnderlinePos = function() {
    const pageIsHome = document
      .querySelector("body")
      .classList.contains("home");

    // Check Page for Home, Portals, Portraits
    if (
      pageIsHome ||
      window.location.href.indexOf("portals") > -1 ||
      window.location.href.indexOf("portraits") > -1
    ) {
      // Add styles
      
      lineTwo.style.display = "none";
      lineOne.style.opacity = "1";

      window.addEventListener('scroll', function(){
        // Check Y scroll Pos
      if (window.scrollY >= 50){
        // When scrolling down add class
        lineOne.classList.add('move-one');
      } else {
        // If Scroll Y is above 50 remove class
        lineOne.classList.remove("move-one");
      }
      })
      
    }

    // Check Page is Info Page
    if (window.location.href.indexOf("info") > -1) {
      
      // Add styles for info link
      lineOne.style.display = 'none';
      lineTwo.style.opacity = "1";

      window.addEventListener('scroll', function(){
        // Check Scroll Y Pos
      if (window.scrollY >= 50){
        // When scrolling down add class
        lineTwo.classList.add("move-two");
      } else {
        // If Scroll Y is above 50 remove class
        lineTwo.classList.remove("move-two");
      }
      })
      
    }
  };

  const menuAnimator = function() {
    if (window.scrollY >= 50) {
      // Animate the Main Menu out of view
      menuList.forEach(el => el.classList.add("hide-menu"));
      // Animate the first line
      // lineOne.removeAttribute("style");
      // Animate the second line
      lineThree.classList.add("line-three-animate");

      menuButton.classList.add("button-animate");
    } else {
      // Animate the Main Menu into view
      menuList.forEach(el => el.classList.remove("hide-menu"));
      // Animate the first line
      // lineOne.style.transform = "translateX(-230px)";
      // Animate the second line
      lineThree.classList.remove("line-three-animate");
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
    
    setTimeout(() => {
      mobileCover.classList.toggle("open");
    }, 300);

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
        el.classList.remove("active-open");
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

  // --------------------------------------------------------------------------
  // ---------------------- Page Transitions ----------------------------------
  // --------------------------------------------------------------------------

  const preLoader = function() {
    const preLoader = document.querySelector(".pre-loader");

    setTimeout(() => {
      preLoader.classList.remove("pre-load-hide");
      setTimeout(() => {
        preLoader.classList.add("disabled");
      }, 1000);
    }, 1500);
  };

  // Add Pre Loader if link has been clicked

  const navElements = document.querySelector("#menu-item-94");
  const subNavElems = document.querySelectorAll(".sub-menu > .menu-item");
  const navTitle = document.querySelector(".site-title a");

  const links = [navElements, ...subNavElems, navTitle];

  console.log(navElements);
  
  const toggleLoader = function() {
    if (document.querySelector(".pre-loader").classList.contains("disabled")) {
      document.querySelector(".pre-loader").classList.remove("disabled");
      setTimeout(() => {
        document.querySelector(".pre-loader").classList.add("pre-load-hide");
      }, 300);
    }
  };


  const hideContent = function() {
    const siteContent = document.querySelector('.site-content');
    siteContent.classList.add('hide');
  };

  const showContent = function() {
    const siteContent = document.querySelector(".site-content");
    siteContent.classList.remove("hide");
  };

  links.forEach(link => link.addEventListener("click", toggleLoader));

  // Functions
  navUnderlinePos();
  imageRandom();
  preLoader();


  // Events
  window.addEventListener("scroll", menuAnimator);
  menuButton.addEventListener("click", displayDesktopMenu);
  mobileButton.addEventListener("click", mobileMenuAnimator);
  document.querySelector('.menu-item-has-children').addEventListener('mouseover', hideContent);
  document.querySelector('.menu-item-has-children').addEventListener('mouseout', showContent);
})();
