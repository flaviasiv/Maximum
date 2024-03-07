//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}
// scroll navbar
// const navbar = document.getElementById("homenav");

// let lastScrollTop = 0;
// addEventListener("scroll", () => {
//     // Current scroll position
//     const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;

//     // check scroll direction
//     const distance = scrollTop - lastScrollTop;
//     const currentTop = parseInt(
//         getComputedStyle(navbar).top.split("px")
//     );

//     // Clamp value between -80 and 0
//     let amount = Math.max(
//         Math.min(
//             currentTop +
//                 (distance < 0
//                     ? Math.abs(distance) // scrolling up
//                     : -Math.abs(distance)// scrolling down
//                     ) * 40, // (1)
//             0
//         ),
//         -80
//     );

//     console.log(amount, currentTop, Math.abs(distance));
//     navbar.style.top = `${amount}px`;
//     lastScrollTop = scrollTop;
// });

// scroll behavior
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//cards flip ao clicar

// var cards = document.querySelectorAll('.card');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

// //pop-up form
// let popup = document.getElementById("popup");

// function openPopup(){
//   popup.classList.add("open-popup");
// }
// function closePopup(){
//   popup.classList.remove("open-popup");
// }
