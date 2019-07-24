var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");
var options = [
    "Mój wywiad donosi: NIE",
    "Wygląda dobrze",   
    "Kto wie?",
    "Zapomnij o tym",
    "Tak - w swoim czasie",
    "Prawie jak tak",
    "Nie teraz - zapytaj później",
    "YES, YES, YES",
    "To musi poczekać",
    "Mam pewne wątpliwości",
    "Możesz na to liczyć",
    "Zbyt wcześnie aby powiedzieć",
    "Daj spokój...",
    "Absolutnie",
    "Chyba żartujesz?",
    "Na pewno nie",
    "Będzie jak mówisz",
    "Prawdopodobnie",
    "Dla mnie rewelacja",
    "Na pewno tak",
    "Weź...",
    "Weź nie pytaj...",
    "A zęby umyte?",
    "Najpierw posprzątaj pokój...",
];

button.addEventListener("click", function() {
    if (input.value.length < 1) {
        alert("Oj Ziuta: musisz zadać pytanie!")
    } else {
        eight.innerText = "";
        var num = input.value.length % options.length;
        answer.innerText = options[num];
    }
});