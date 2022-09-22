const $nav = document.querySelector(".main")
let topOfNav
setTimeout(() => {
    topOfNav = $nav.offsetTop
}, 150)

function recalculateOffsetTop() {
    window.scrollTo(0, 0)
    topOfNav = $nav.offsetTop
    return topOfNav
}

function fixNav () {
    if(this.scrollY >= topOfNav) {
        // document.body.style.paddingTop = `${$nav.offsetHeight}px`
        $nav.classList.add("fixed-nav")
        
    } else {
        // document.body.style.paddingTop = 0
        $nav.classList.remove("fixed-nav")
    }
}   

window.addEventListener("scroll", fixNav)
window.addEventListener("resize", recalculateOffsetTop)


