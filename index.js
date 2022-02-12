// results: Array(1)
// 0: Object
// category: "Entertainment: Film"
// type: "boolean"
// difficulty: "easy"
// question: "In the original script of &quot;The Matrix&quot;, the machines used humans as additional computing power instead of batteries."
// correct_answer: "True"
// incorrect_answers: Array(1)
// 0: "False"const game = document.getElementById("game");

const scoreDisplay = document.getElementById("score");

const genres = [
  {
    name: "Film",
    id: 11
  }
];

const levels = ["easy", "medium", "hard"];

function addGenre(genre) {
  const column = document.createElement("div");

  column.classList.add("genre-column");
  column.innerHTML = genre.name;
  game.appendChild(column);

  levels.forEach((level) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.appendChild(card);
    console.log("working");

    if (level === "easy") {
      card.innerHTML = 100;
    }
    if (level === "medium") {
      card.innerHTML = 200;
    } else if (level === "hard") {
      card.innerHTML = 300;
    }

    fetch(
      `https://opentdb.com/api.php?amount=1&category=${genre.id}&difficulty=${level}&type=boolean`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        card.setAttribute("data-question", data.results[0].question);
        //everything here is an object based on OOP
        card.setAttribute("data-anwser", data.results[0].correct_answer);

        card.setAttribute("data-value", card.getInnerHTML());
        // this will allow us to see the data value from the inside of the div itself and utilize its information in aplication programming interface response in JSOn format
      });
    card.addEventListener("click", flipCard);

    function flipCard() {
      console.log("clicked");
    }
    //space auto save restyle broken
  });
}

addGenre(genres[0]);
