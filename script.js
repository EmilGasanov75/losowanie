let btn = document.querySelector("button")
let ucznie = ["Kuba Borowski", "Olga Bralska", "Olga Kubień", "Julia Winnicka", "Julia Zalewska", "Anton Leszczyński", "Emil Hasanov", "Gabrysia Zawistowska", "Kacper Kamieniecki", "Kinga Głowacka", "Magdalena Zych", "Mariia Lymarenko", "Mikołaj Wójcik", "Olek Kabulski", "Oskar Kostrzewa", "Yehor Stetskow", "Tosia Czerniak", "Alicja Wójtowicz", "Abdull Mamazhanow", "Oskar Rostek", "Oskar Magdziarz", "Kuba Kucharski"]
btn.addEventListener("click", function (e) {
    e.preventDefault()
        document.querySelector("p").textContent = "3..."
    setTimeout(() => {
        document.querySelector("p").textContent = "2..."
    }, 1000);
    setTimeout(() => {
        document.querySelector("p").textContent = "1..."
    }, 2000);
    setTimeout(() => {
        document.querySelector("p").textContent = ucznie[Math.floor(Math.random() * ucznie.length)] + "! 🎉"
    }, 3000);
})