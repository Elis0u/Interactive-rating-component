const card = document.querySelector(".card");
const cardThanks = document.querySelector(".card-thanks");
const submit = document.querySelector(".btn-submit");
let btn = document.querySelectorAll(".btn");
let noteUser = document.querySelector(".noteUser");

submit.addEventListener("click", () => {
    card.classList.add("hidden");
    cardThanks.classList.remove("hidden");
});

btn.forEach((note) => {
    note.addEventListener("click", () => {
        console.log(note.innerHTML);
        noteUser.innerHTML = note.innerHTML;
        note.style.backgroundColor = "hsl(25, 97%, 53%)";
    })
})