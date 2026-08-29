document.addEventListener("DOMContentLoaded", function () {

    // MENU MOBILE
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }


    // LIGHTBOX GALERI
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;

        });

    });


    if (closeBtn) {

        closeBtn.addEventListener("click", function () {

            lightbox.style.display = "none";

        });

    }


    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }

        });

    }


    // PESAN KETIKA TOMBOL JELAJAHI DITEKAN
    const exploreButton = document.querySelector(".hero .btn");

    if (exploreButton) {

        exploreButton.addEventListener("click", function () {

            console.log("Selamat datang di Desa Maktangguk!");

        });

    }

});