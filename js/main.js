(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
      });
      if (!wasOpen) item.classList.add("open");
    });
  });

  var supportForm = document.getElementById("support-form");
  if (supportForm) {
    supportForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var toast = document.getElementById("form-toast");
      supportForm.reset();
      if (toast) {
        toast.classList.add("show");
        setTimeout(function () {
          toast.classList.remove("show");
        }, 3200);
      }
    });
  }
})();
