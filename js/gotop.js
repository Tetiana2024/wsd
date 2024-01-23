const goTopBtn = document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function goTop() {
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0)
 }
}