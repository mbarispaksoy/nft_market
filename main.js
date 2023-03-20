function degistir(id, payload) {
    document.getElementById(id).innerHTML = payload;
  }

function setImageText(idx){
        document.getElementById("resim").src = DATA[idx]["resim"];
        console.log("bide burda deneyek")
}
var index = 0;
window.addEventListener(
    "scroll", (event) => {
        index = (index+1)%DATA.length; 
        setImageText(index);
        console.log("yarraq")
    });
setImageText(0);

// let lastKnownScrollPosition = 0;
// let ticking = false;
// let scrolledDown = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
// }

// document.addEventListener("scroll", (event) => {
//     scrolledDown = window.scrollY - lastKnownScrollPosition >= 0 ;
//     lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//         console.log("hello");
//         const forOrBack = scrolledDown ? -1 : 1 ;
//         index = (index + forOrBack) % DATA.length; setImageText(index);
//       ticking = false;

//     });

//     ticking = true;
//   }
// });