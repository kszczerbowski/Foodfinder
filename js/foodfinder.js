const meals = [
    "kulki ryżowe z serem i szynką w sosie beszamelowym",
    "zapiekany brokuł",
    "ryż z curry i kurczakiem",
    "ryz a'la delicate",
    "spaghetti napoli",
    "kurczak pieczony udka",
    "spaghetti carbonara",
    "ragu",
    "sos serowy",
    "sos śmietanowo - pieczarkowy",
    "danie Pameli",
    "makaron z cukinią",
    "dziwne danie z ryżem, batatem i ciecierzycą",
    "kotlety z serem i pieczarkami",
    "schabowe",
    "mielone",
    "karkówka",
    "pierś pieczona",
    "rybsko",
    "paluszki rybne",
    "rosół / pomidorowa",
    "lasagne",
    "kalafior",
    "sos borowikowy",
    "łódeczki z serem i pieczarkami",
    "pulpety",
    "sos kurkowy",
    "krem z groszku",
    "chicken butter",
    "quiche szpinakowy albo jakiś inny wytrawny",
    "curry warzywne https://www.jadlonomia.com/przepisy/kokosowy-dal-z-czerwonej-soczewicy/?fbclid=IwAR2UW_9ly23vqDuYpjTw8BHR3yurZnhXcZXSIPmctd1tTq8teAqFTg-Hrsg",
    "curry z ciecierzycą https://www.kwestiasmaku.com/przepis/curry-z-ciecierzyca-batatami-i-szpinakiem",
    "burgerki"
]
const twoDaysMeals = ["spaghetti carbonara", "sos serowy", "kotlety z serem i pieczarkami"]
const randomizingBtn = document.querySelector('button');
const weekdaysHeadings = document.querySelectorAll('.hidden');
const weekdays = document.querySelectorAll('.meal');
randomizingBtn.addEventListener('click', () => {
    weekdaysHeadings.forEach(value => {
        value.classList.remove('hidden');
    })
    const randomMeals = [];
    for (let i = 0; i < 7; i ++) {
        // make two days meals appear twice
        if (twoDaysMeals.includes(randomMeals[i-1])) {
            weekdays[i].textContent = weekdays[i-1].textContent;
            continue;
        }
        // end
        let randomNumber = Math.round(Math.random() * (meals.length-1));
        while (randomMeals.includes(meals[randomNumber]) || meals[randomNumber] === "rybsko") {
            randomNumber = Math.round(Math.random() * meals.length)
        }
        // 50% szans na rybę w niedzielę
        if (i===6) {
            if (Math.random() > 0.5) {
                weekdays[i].textContent = "rybsko";
                break;
            }
        }
        // end
        // if two days meal is picked for Sunday, make it also appear for Wednesday
        if (i===6 && twoDaysMeals.includes(meals[randomNumber])) {
            weekdays[i-1].textContent = meals[randomNumber];
        }
        // end
        randomMeals.push(meals[randomNumber]);
        weekdays[i].textContent = meals[randomNumber];
      }
})


// const counts = {};
// const sampleArray = ['a', 'a', 'a', 'a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts.a)