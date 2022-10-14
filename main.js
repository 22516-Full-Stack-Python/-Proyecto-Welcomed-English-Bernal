const $nav = document.querySelector(".main")
const $dropdown = document.querySelector(".dropdown")
const $courses = document.querySelector("#courses")
let topOfNav = $nav.offsetTop


function recalculateOffsetTop() {
    window.scrollTo(0,0)
    topOfNav = $nav.offsetTop
    return topOfNav
}

function fixNav() {
    if (this.scrollY >= topOfNav) {
        $nav.classList.add("fixed-nav")

    } else {
        $nav.classList.remove("fixed-nav")
    }
}

function showDropdownMenu(e) {
    $dropdown.classList.add("hovered")
}

function hideDropdownMenu() {
    $dropdown.classList.remove("hovered")
}

$courses.addEventListener("mouseenter", showDropdownMenu)
$courses.addEventListener("mouseleave", hideDropdownMenu)
window.addEventListener("scroll", fixNav)
window.addEventListener("resize", recalculateOffsetTop)


