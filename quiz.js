const data = [
    {
      id: 1,
      question: "Cand spuneti petrol va ganditi la:",
      answers: [
        { answer: "O imagine de un anumit fel, de exemplu, o masina, o statie de benzina?", isVisual: true },
        { answer: "Un sunet, de exemplu, sunetul petrolului curgand in cisterna?", isAudio: true },
        { answer: "O atingere, de exemplu, senzatia in momentul in care tineti in mana furtunul de benzina? ", isKinestezic: true },
        { answer: "Un miros, de exemplu, mirosul petrolului", isSmell: true },
        { answer: "Un gust, de exemplu gustul de petrol (presupunand ca il cunoasteti)", isTaste: true },        
      ],
    },
    {
      id: 2,
      question: "Cand spuneti cel mai bun prieten al dvs va ganditi la:",
      answers: [
        { answer: "Un sunet, de exemplu, sunetul vocii lui?", isAudio: true },
        { answer: "O emotie, de exemplu, sentimentul fata de el? ", isKinestezic: true },
        { answer: "Un miros, de exemplu, mirosul parfumului acestuia? ", isSmell: true },
        { answer: "Un gust, de exemplu, gustul unei mese luate impreuna? ", isTaste: true },
        { answer: "O imagine, de exemplu, felul cum arata sau un loc in care ati fost impreuna?", isVisual: true },
      ],
    },
    {
        id: 3,
        question: "Felul in care v-ar placea cel mai mult sa va petreceti timpul:",
        answers: [
          { answer: "Sunetele asociate cu acest tip de activitate, de exemplu, sunetul vocilor oamenilor sau sunetul mediului inconjurator?", isAudio: true },
          { answer: "Un gust, de exemplu, gustul mancarii favorite?  ", isTaste: true },
          { answer: "Un miros, de exemplu, mirosul din mediul inconjurator? ", isSmell: true },
          { answer: "O atingere sau o emotie, de exemplu, cum va simtiti cand va ganditi sa va petreceti timpul in acest fel, senzatia pe care o aveti? ", isKinestezic : true },
          { answer: "O imagine, de exemplu, unde ati vrea sa fiti sau cel cu care ati vrea sa fiti? ", isVisual: true },
        ],
      },
      {
        id: 4,
        question: "Cand va ganditi la ce ati facut ieri:",
        answers: [
          { answer: "Un gust de anumit fel, de exemplu, a ceea ce ati mancat?", isTaste: true },
          { answer: "O imagine, de exemplu, a locului unde va aflati?", isVisual: true },
          { answer: "Un sunet, de exemplu, al unei conversatii?", isAudio: true },
          { answer: "O atingere, o senzatie sau o emotie? ", isKinestezic : true },
          { answer: "Un miros, de exemplu, al mediului in care ati fost? ", isSmell: true },
        ],
      },
      {
        id: 5,
        question: "Cand va ganditi la un moment in timp care nu v-a placut prea mult:",
        answers: [
          { answer: "Un miros, de exemplu, a ceva dezagreabil? ", isSmell: true },
          { answer: "Un sunet, de exemplu, ceea ce ati auzit sau ceea ce v-ati spus dvs. insiva? ", isAudio: true },
          { answer: "Un gust, de exemplu, al unei mancaruri rele? ", isTaste: true },
          { answer: "O imagine?  ", isVisual : true },
          { answer: "O emotie sau cum v-ati simtit in acel moment?  ", isKinestezic: true },
        ],
      },
      {
        id: 6,
        question: "Cand va ganditi la restaurantul preferat:",
        answers: [
          { answer: "Un miros, de exemplu, mirosul care vine de la bucatarie?", isSmell: true },
          { answer: "Ce auziti, de exemplu, conversatie, muzica?", isAudio: true },
          { answer: "Un gust, de exemplu, al mancarii?", isTaste: true },
          { answer: "Ce ati vazut, de exemplu, oamenii cu care erati, ce era imprejur?", isVisual : true },
          { answer: "O atingere sau o emotie, de exemplu, felul in care v-ati simtit acolo?", isKinestezic: true },
        ],
      },
      {
        id: 7,
        question: "Cand va ganditi la copilarie:",
        answers: [
          { answer: "O imagine?", isVisual: true },
          { answer: "Sunete sau voci?", isAudio: true },
          { answer: "O atingere sau o emotie?", isKinestezic: true },
          { answer: "Un miros, o aroma, un parfum?", isSmell: true },
          { answer: "Un gust?", isTaste: true },        
        ],
      },
      {
        id: 8,
        question: "Cand va ganditi la munca dvs:",
        answers: [
          { answer: "Un gust?", isTaste: true },
          { answer: "O imagine, de exemplu, imaginea dvs facand ceva?", isVisual: true },
          { answer: "Un sunet, de exemplu, al unor echipamente de lucru sau al unor voci?", isAudio: true },
          { answer: "O atingere sau o emotie, de exemplu, textura a ceea ce atingeti sau sentimentul dvs. legat de slujba?", isKinestezic : true },
          { answer: "Un miros, de exemplu, cel dimprejur? ", isSmell: true },
        ],
      },
      {
        id: 9,
        question: "Cand va ganditi unde ati putea fi maine prima oara aveti:",
        answers: [
          { answer: "Un gust?", isTaste: true },
          { answer: "O imagine?", isVisual: true },
          { answer: "Un sunet?", isAudio: true },
          { answer: "O atingere sau o emotie?", isKinestezic : true },
          { answer: "Un miros sau o aroma? ", isSmell: true },
        ],
      },
      {
        id: 10,
        question: "Cand ceva ce vi se pare dificil va ganditi la:",
        answers: [
          { answer: "O imagine sau un cadru?", isVisual: true },
          { answer: "Un sunet sau o conversatie?", isAudio: true },
          { answer: "O emotie combinata sau o atingere?  ", isKinestezic: true },
          { answer: "Un miros?", isSmell: true },
          { answer: "Un gust?", isTaste: true },        
        ],
      },
      {
        id: 11,
        question: "Cand aveti o rasplata va ganditi la:",
        answers: [
          { answer:"O emotie, de exemplu,  sentimentul de satisfactie, sau o atingere, cum ar fi senzatia fizica atunci cand faceti sport?", isKinestezic: true},
          { answer: "Un gust?", isTaste: true },
          { answer: "Un miros?", isSmell: true },
          { answer:"Un sunet, de exemplu,  ceea ce va spuneti dvs insiva sau sunetul vocilor din jurul dvs. ?", isAudio: true },
          { answer: "O imagine, de exemplu, despre cum se infatiseaza rasplata?", isVisual: true },
        ],
      },
      {
        id: 12,
        question: "Cand va ganditi la ceva amuzant:",
        answers: [
          { answer: "O imagine, de exemplu, ceva sau cineva pe care-l vedeti? ", isVisual: true },
          { answer: "Un sunet, de exemplu,  ceea ce spune  cineva sau ceva ce auziti?", isAudio: true },
          { answer: "O emotie, de exemplu, senzatia de amuzament, sau o senzatie de atingere fizica?", isKinestezic: true },
          { answer: "Un miros?", isSmell: true },
          { answer: "Un gust?", isTaste: true },        
        ],
      },
      {
        id:13,
        question: "Cand va ganditi la un scop pentru viitor?:",
        answers: [
          { answer: "Ceea ce vedeti?", isVisual: true },
          { answer: "Ceea ce auziti?", isAudio: true },
          { answer: "Ceea ce simtiti?", isKinestezic: true },
          { answer: "Ceea ce mirositi?", isSmell: true },
          { answer: "Ceea ce gustati?", isTaste: true },        
        ],
      },
      {
        id: 14,
        question: "Cand va ganditi la asteptarile dvs pentru urmatoarele zile, prima oara aveti:",
        answers: [
          { answer: "Un gust?", isTaste: true },
          { answer: "Imaginea a ceea ce vedeti intamplandu-se?", isVisual: true },
          { answer: "Ceea ce va spuneti?", isAudio: true },
          { answer: "Emotiile care insotesc asteptarile?", isKinestezic : true },
          { answer: "Un miros sau o aroma? ", isSmell: true },
        ],
      },
      {
        id: 15,
        question: "Cand va ganditi la ceea ce faceti in acest moment:",
        answers: [
          { answer: "Mirositi ceva?", isSmell: true },
          { answer: "Auziti ceva?", isAudio: true },
          { answer: "Gustati ceva?", isTaste: true },
          { answer: "Vedeti ceva?", isVisual : true },
          { answer: "Simtiti ceva?", isKinestezic: true },
        ],
      },
  ];

  const quizScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
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
  let visualAnswer = false;
  let audioAnswer = false;
  let kinestezicAnswer = false;
  let smellAnswer = false;
  let tasteAnswer = false;
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
    visualAnswer = false;
   audioAnswer = false;
   kinestezicAnswer =false;
   smellAnswer = false;
   tasteAnswer = false ;
   total = 0;
  selectedAnswer;
  showQuestion(qIndex);
  };

  play.addEventListener("click", () => {
    resultScreen.style.display = "none"
    quizScreen.style.display = "block"
    playAgain()
  })

  const showResult = () => {
    
       
    resultScreen.style.display = "block"
    quizScreen.style.display = "none"
    resultScreen.querySelector(".visual").textContent = `Visual answers: ${visualCount}`
    resultScreen.querySelector(".audio").textContent = `Audio answers: ${audioCount}`
    resultScreen.querySelector(".kinestezic").textContent = `Kinestezic answers: ${kinestezicCount}`
    resultScreen.querySelector(".smell").textContent = `Smell answers: ${smellCount}`
    resultScreen.querySelector(".taste").textContent = `Taste answers: ${tasteCount}`
  

}

  const showQuestion = (qNumber) => {
    
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.id} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  if(qNumber > data.length--) showResult();
  selectAnswer();
  submitAnswer();
  };

  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    
      submit.addEventListener ("click", () => {
        if (selectedAnswer!==null) {
          selectedAnswer.isVisual === true ? visualCount++ : wrongCount++ 
          selectedAnswer.isAudio=== true ? audioCount++ : wrongCount++ 
          selectedAnswer.isKinestezic=== true ? kinestezicCount++ : wrongCount++ 
          selectedAnswer.isTaste=== true ? tasteCount++ : wrongCount++ 
          selectedAnswer.isSmell=== true ? smellCount++ : wrongCount++
        qIndex++;
        showQuestion(qIndex);
      }
                      
    else if(selectedAnswer===null) alert ("Selecteaza un raspuns");
      });
    
  
    }
  
  showQuestion(qIndex);
 
  