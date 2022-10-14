const $navbar = document.querySelector("nav")
const $footer = document.querySelector("footer")

$navbar.innerHTML = `<div class="nav-logo"></div>
<div class="bar-container">
    <div class="bar-item"><a href="index.html">Inicio</a></div>
    <div class="bar-item"><a href="#">Nosotros</a></div>
    <div class="bar-item" id="courses">Cursos
        <div class="dropdown">
            <a href="cursos.html">Adultos</a>
            <a href="cursos.html">Adolescentes</a>
            <a href="cursos.html">Niños</a>
            <a href="cursos.html">Examenes</a>
        </div>
    </div>
    <div class="bar-item"><a href="form.html">Contacto</a></div>
</div>`

$footer.innerHTML = ` <p>Copyright 2022 by. All rights reserved</p>
<div class="site-map">
    <a href="index.html">Inicio</a>
    <a href="">Nosotros</a>
    <a href="cursos.html">Cursos</a>
    <a href="form.html">Contacto</a>
</div>`
