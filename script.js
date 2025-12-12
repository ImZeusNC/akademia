

function activarMenu() {
    let menu = document.getElementById("menu-desplegable")
    menu.classList.toggle("menu-activo")
}

    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2000,
      },
    });