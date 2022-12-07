const quizScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

const showQuestion = (qId) => {
  if (qId === data.length) return showResult();
  question.textContent = data[qId].question;
  answersContainer.innerHTML = data[qId].options
      .map(
          (item, index) => {
            return `
            <div class="answer">
                <input type="radio" id=${index} name="answer" value=${item.answerType} />
                <label for="1">${item.answer}</label>
            </div>
            `
          })
      .join("");

  answersContainer.querySelectorAll("input").forEach((answer) => {
    answer.addEventListener("click",  (e) => {
      localStorage.setItem('currentAnswerAndQuestion', JSON.stringify({currentAnswer: e.currentTarget.value, currentQuestion: qId}))
    });
  });

  submit.addEventListener ("click", (e) => {
    updateLocalStorageData(
        getLocalStorageCurrentQuestion()?.currentAnswer,
        getLocalStorageCurrentQuestion()?.currentQuestion
    )
    showQuestion(qId + 1)
  }, {once: true});

}

const showResult = () => {
  resultScreen.style.display = "block";
  quizScreen.style.display = "none";
  resultScreen.querySelector(".visual").textContent = `Visual Answers: ${getLocalStorageData('visual')}`;
  resultScreen.querySelector(".audio").textContent = `Audio Answers: ${getLocalStorageData('audio')}`;
  resultScreen.querySelector(".kinestezic").textContent = `Kinestezic Answers: ${getLocalStorageData('kinestezic')}`;
  resultScreen.querySelector(".smell").textContent = `Smell Answers: ${getLocalStorageData('smell')}`;
  resultScreen.querySelector(".taste").textContent = `Taste Answers: ${getLocalStorageData('taste')}`;

  play.addEventListener("click", () => {
  resultScreen.style.display = "none"
  quizScreen.style.display = "block"
  setDefaultLocalStorageData()
  showQuestion(0);
});
};

window.onload = function() {
  setDefaultLocalStorageData()
  showQuestion(0)
};
