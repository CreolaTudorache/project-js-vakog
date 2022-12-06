const data = [
    {
      id: 1,
      question: "Cand spuneti petrol va ganditi la:",
      options:[ 
        { answer: "O imagine de un anumit fel, de exemplu, o masina, o statie de benzina?"},
        { answer: "Un sunet, de exemplu, sunetul petrolului curgand in cisterna?"},
        { answer: "O atingere, de exemplu, senzatia in momentul in care tineti in mana furtunul de benzina? "},
        { answer: "Un miros, de exemplu, mirosul petrolului"},
        { answer: "Un gust, de exemplu gustul de petrol (presupunand ca il cunoasteti)" },        
      ],
    },
    {
      id: 2,
      question: "Cand spuneti cel mai bun prieten al dvs va ganditi la:",
      options: [
        { answer: "O imagine, de exemplu, felul cum arata sau un loc in care ati fost impreuna?" },
        { answer: "Un sunet, de exemplu, sunetul vocii lui?"},
        { answer: "O emotie, de exemplu, sentimentul fata de el? " },
        { answer: "Un miros, de exemplu, mirosul parfumului acestuia? "},
        { answer: "Un gust, de exemplu, gustul unei mese luate impreuna? " },
        
      ],
    },
    {
        id: 3,
        question: "Felul in care v-ar placea cel mai mult sa va petreceti timpul:",
        options: [
          { answer: "O imagine, de exemplu, unde ati vrea sa fiti sau cel cu care ati vrea sa fiti? " },
          { answer: "Sunetele asociate cu acest tip de activitate, de exemplu, sunetul vocilor oamenilor sau sunetul mediului inconjurator?"},
          { answer: "O atingere sau o emotie, de exemplu, cum va simtiti cand va ganditi sa va petreceti timpul in acest fel, senzatia pe care o aveti? "  },
          { answer: "Un gust, de exemplu, gustul mancarii favorite?  "},
          { answer: "Un miros, de exemplu, mirosul din mediul inconjurator? "},
                   
        ],
      },
      {
        id: 4,
        question: "Cand va ganditi la ce ati facut ieri:",
        options: [
          { answer: "O imagine, de exemplu, a locului unde va aflati?"},
          { answer: "Un sunet, de exemplu, al unei conversatii?"},
          { answer: "O atingere, o senzatie sau o emotie? "},
          { answer: "Un miros, de exemplu, al mediului in care ati fost? "},
          { answer: "Un gust de anumit fel, de exemplu, a ceea ce ati mancat?" },
        ],
      },
      {
        id: 5,
        question: "Cand va ganditi la un moment in timp care nu v-a placut prea mult:",
        options: [
          { answer: "O imagine?  "},
          { answer: "Un sunet, de exemplu, ceea ce ati auzit sau ceea ce v-ati spus dvs. insiva? " },
          { answer: "O emotie sau cum v-ati simtit in acel moment?  "},
          { answer: "Un miros, de exemplu, a ceva dezagreabil? "},
          { answer: "Un gust, de exemplu, al unei mancaruri rele? " },
        
        ],
      },
      {
        id: 6,
        question: "Cand va ganditi la restaurantul preferat:",
        options: [
          { answer: "Ce ati vazut, de exemplu, oamenii cu care erati, ce era imprejur?"},
          { answer: "Ce auziti, de exemplu, conversatie, muzica?"},
          { answer: "O atingere sau o emotie, de exemplu, felul in care v-ati simtit acolo?"},
          { answer: "Un miros, de exemplu, mirosul care vine de la bucatarie?"},
          { answer: "Un gust, de exemplu, al mancarii?"}
         
        ],
      },
      {
        id: 7,
        question: "Cand va ganditi la copilarie:",
        options: [
          { answer: "O imagine?"},
          { answer: "Sunete sau voci?" },
          { answer: "O atingere sau o emotie?"},
          { answer: "Un miros, o aroma, un parfum?"},
          { answer: "Un gust?"}        
        ],
      },
      {
        id: 8,
        question: "Cand va ganditi la munca dvs:",
        options: [
          { answer: "O imagine, de exemplu, imaginea dvs facand ceva?"},
            
          { answer: "Un sunet, de exemplu, al unor echipamente de lucru sau al unor voci?" },
          { answer: "O atingere sau o emotie, de exemplu, textura a ceea ce atingeti sau sentimentul dvs. legat de slujba?"},
          { answer: "Un miros, de exemplu, cel dimprejur? "},
          { answer: "Un gust?"}
        ],
      },
      {
        id: 9,
        question: "Cand va ganditi unde ati putea fi maine prima oara aveti:",
        options: [
        
          { answer: "O imagine?"},
          { answer: "Un sunet?" },
          { answer: "O atingere sau o emotie?"},
          { answer: "Un miros sau o aroma? "},
          { answer: "Un gust?"}
        ],
      },
      {
        id: 10,
        question: "Cand ceva ce vi se pare dificil va ganditi la:",
        options: [
          { answer: "O imagine sau un cadru?"},
          { answer: "Un sunet sau o conversatie?"},
          { answer: "O emotie combinata sau o atingere?"},
          { answer: "Un miros?"},
          { answer: "Un gust?"}        
        ],
      },
      {
        id: 11,
        question: "Cand aveti o rasplata va ganditi la:",
        options: [
          { answer: "O imagine, de exemplu, despre cum se infatiseaza rasplata?"},
          { answer:"Un sunet, de exemplu,  ceea ce va spuneti dvs insiva sau sunetul vocilor din jurul dvs. ?"},
          { answer:"O emotie, de exemplu,  sentimentul de satisfactie, sau o atingere, cum ar fi senzatia fizica atunci cand faceti sport?"},
          { answer: "Un miros?"},
          { answer: "Un gust?"}   
        ],
      },
      {
        id: 12,
        question: "Cand va ganditi la ceva amuzant:",
        options: [
          { answer: "O imagine, de exemplu, ceva sau cineva pe care-l vedeti? "},
          { answer: "Un sunet, de exemplu,  ceea ce spune  cineva sau ceva ce auziti?"},
          { answer: "O emotie, de exemplu, senzatia de amuzament, sau o senzatie de atingere fizica?"},
          { answer: "Un miros?"},
          { answer: "Un gust?"}        
        ],
      },
      {
        id:13,
        question: "Cand va ganditi la un scop pentru viitor?:",
        options: [
          { answer: "Ceea ce vedeti?"},
          { answer: "Ceea ce auziti?"},
          { answer: "Ceea ce simtiti?"},
          { answer: "Ceea ce mirositi?"},
          { answer: "Ceea ce gustati?"}        
        ],
      },
      {
        id: 14,
        question: "Cand va ganditi la asteptarile dvs pentru urmatoarele zile, prima oara aveti:",
        options: [          
          { answer: "Imaginea a ceea ce vedeti intamplandu-se?"},
          { answer: "Ceea ce va spuneti?"},
          { answer: "Emotiile care insotesc asteptarile?"},
          { answer: "Un miros sau o aroma? " },
          { answer: "Un gust?"}
        ],
      },
      {
        id: 15,
        question: "Cand va ganditi la ceea ce faceti in acest moment:",
        options: [          
          { answer: "Vedeti ceva?"},
          { answer: "Auziti ceva?"},
          { answer: "Simtiti ceva?"},
          { answer: "Mirositi ceva?"},
          { answer: "Gustati ceva?"}
        ],
      },
  ];

const quizScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const input = document.getElementsByTagName("input")
// const value = document.querySelector ("#value");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let visualCount = 0;
let audioCount = 0;
let kinestezicCount = 0;
let smellCount = 0;
let tasteCount = 0;
let wrongCount = 0;

// const userAnswer () =>  {
//   for (i=0; i<data.length; i++) {
//      data.options[i]
//   }
// }
const visualAnswer = 
  data.map((item)=> item.options[0]);
const audioAnswer = 
  data.map((item)=> item.options[1]);
const  kinestezicAnswer = 
  data.map((item)=> item.options[2])
const smellAnswer= 
  data.map(item => item.options[3])
const tasteAnswer = 
  data.map (item => item.options[4])
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
visualCount = 0;
audioCount = 0;
kinestezicCount = 0;
smellCount = 0;
tasteCount = 0;
wrongCount = 0;
// visualAnswer = 0;
// audioAnswer = 0;
// kinestezicAnswer = 0;
// smellAnswer = 0;
// tasteAnswer = 0;
total = 0;
selectedAnswer;
showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none"
  quizScreen.style.display = "block"
  playAgain()
});
const showResult = () => {
  resultScreen.style.display = "block";
  quizScreen.style.display = "none";

  resultScreen.querySelector(
    ".visual"
  ).textContent = `Visual Answers: ${visualCount}`;

  resultScreen.querySelector(
    ".audio"
  ).textContent = `Audio Answers: ${audioCount}`;

  resultScreen.querySelector(
    ".kinestezic"
  ).textContent = `Kinestezic Answers: ${kinestezicCount}`;

  resultScreen.querySelector(
    ".smell"
  ).textContent = `Smell Answers: ${smellCount}`;

  resultScreen.querySelector(
    ".taste"
  ).textContent = `Taste Answers: ${tasteCount}`;

  // resultScreen.querySelector(".score").textContent = `Score: ${
  //   visualCount ++;
  //   audioCount ++; 
  //   kinestezicCount ++;
  //   smellCount ++;
  //   tasteCount ++;
  // }`;
};

const showQuestion = (qNumb) => {
  if (qIndex === data.length) return showResult();
  // selectedAnswer === null;
  question.textContent = data[qNumb].question;
  answersContainer.innerHTML = data[qNumb].options
      .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.options} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");
    selectAnswer ()
};


const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((answer) => {
    answer.addEventListener("click", (e) => {
      selectedAnswer = e.currentTarget;
   });
 });
}
// const userAnswer = () => {
//   const allAnswer = data.map((item) => item.options)
//   console.log(allAnswer)
//   const visualAnswer = allAnswer.filter ((item,index) => {return allAnswer.indexOf(item)===index})
  
//   console.log(visualAnswer)
// }
// userAnswer(data)

// const selectAnswer = () => {
//   answersContainer.querySelectorAll("input").forEach((el) => {
//     el.addEventListener("click", (e) => {
//       selectedAnswer = e.target.value;
//     });
  //   const showVisual = () => {
  //       let userAnswer = '';
  //       let visualAnswer = 0;
  //       for(var i=0; i<data.length; i++ ) {
  //         userAnswer = (answersContainer[i].submit || {}).value;
  //         if (userAnswer===options[i].isVisual) {
  //           visualCount++
  //         }
  //        else {
  //         showQuestion(qIndex)
  //        }
  //       }
  // };

// });
// }
// console.log (showVisual)
// userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
// const visualAnswer = data.reduce (function(v1,aIndex) {
//   if (v1.isVisual === true){
//     return data.options[aIndex]
//   }
//   else {
//     return v1.isVisual === false
//   }
// })

// console.log (visualAnswer)

// const submitVisual = () => {
//   submit.addEventListener ("click", (e) => {
//     visualAnswer = e.target.value;
//     if (visualAnswer === "true") {
//       console.log("click")
//       visualCount++
//     }
//   })
// }

const submitAnswer =(selectedAnswer) => {
    submit.addEventListener ("click", () => {
 
      if (selectedAnswer!==null) { 
             qIndex++;
             showQuestion(qIndex);
           }
        else alert ("Selecteaza un raspuns");
    });
  }
 

submitAnswer ()
selectAnswer()
showQuestion(qIndex)