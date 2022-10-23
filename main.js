const $startNow_Button = document.querySelector(".start-now_button")

$startNow_Button.onclick = function () {
    location.href = "form.html"
}


const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

function changeFrase() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;
        });
}

changeFrase()

setInterval (function () {
    changeFrase()
}, 60000)



