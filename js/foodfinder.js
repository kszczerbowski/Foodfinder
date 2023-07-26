const meals = [
  "kulki ryżowe z serem i szynką w sosie beszamelowym",
  "wrapy",
  "zapiekany brokuł",
  "ryż z curry i kurczakiem",
  "ryż a'la delicate",
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
  "zupa tajska",
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
  "burgerki",
  "kurczak w sosie z brokułami"
]
const twoDaysMeals = ["spaghetti carbonara", "sos serowy", "kotlety z serem i pieczarkami"]
const randomizingBtn = document.querySelector('button');
const weekdaysHeadings = document.querySelectorAll('.hidden');
const weekdays = document.querySelectorAll('.meal');
function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}
randomizingBtn.addEventListener('click', () => {
  if (!weekdaysHeadings[0].classList.contains('hidden')) {
      weekdaysHeadings.forEach(value => {
          value.classList.add('hidden');
      })
      weekdaysHeadings.forEach(value => {
          value.classList.remove('hidden');
      })
  }
  if (weekdaysHeadings[0].classList.contains('hidden')) {
      weekdaysHeadings.forEach(value => {
          value.classList.remove('hidden');
      })
  }
  
  const randomMeals = [];
  for (let i = 0; i < 7; i ++) {
      // make two days meals appear twice
      if (twoDaysMeals.includes(randomMeals[i-1])) {
          weekdays[i].textContent = weekdays[i-1].textContent;
          continue;
      }
      // end
      let randomNumber = Math.floor(Math.random() * (meals.length));
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
      // if two days meal is picked for Sunday, make it also appear for Saturday
      if (i===6 && twoDaysMeals.includes(meals[randomNumber])) {
          weekdays[i-1].textContent = meals[randomNumber];
      }
      // end
      randomMeals.push(meals[randomNumber]);
      weekdays[i].textContent = meals[randomNumber];
    }
})

