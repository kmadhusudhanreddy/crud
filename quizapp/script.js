const questions = [
    {
        question : "which is largest animal in the world" ,
        answers: [
            { text:"Shark" , correct : false },
            { text:"Blue Whale" , correct : true },
            { text:"Elephant" , correct : false },
            { text:"Girafee" , correct : false },
        ]
    },
    {
        question : "which is smallest continent in the world?" ,
        answers: [
            { text:"Asia" , correct : false },
            { text:"Australia" , correct : true },
            { text:"Arctic" , correct : false },
            { text:"Africa" , correct : false },
        ]
    },

    {
        question : "which is smallest country in the world?" ,
        answers: [
            { text:"Vatican City" , correct : true },
            { text:"Bhutan" , correct : false },
            { text:"Nepal" , correct : false },
            { text:"India" , correct : false },
        ]
    },


    {
        question : "which is largest desert in the world?" ,
        answers: [
            { text:"Kalahari" , correct : false },
            { text:"Gobi" , correct : false },
            { text:"Sahara" , correct : false },
            { text:"Antartica" , correct : true },
        ]
    },
    
];


const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")


let currentQuestionIndex = 0;
let score = 0 ;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question ;

    currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button") ;
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct ;
            }
            button.addEventListener("click" , selectAnswer);
    });
}

function resetState(){
       nextBtn.style.display = "none";
       while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
       }
}


function selectAnswer(e){
        const selectedBtn = e.target ;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add('correct');
            }
            button.disabled = true ;
        })
        nextBtn.style.display = "block" ;
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}` ;
    nextBtn.innerHTML = "play Again" ;
    nextBtn.style.display = "block";
}


function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
        showQuestion();
     }
     else{
        showScore();
     }
}

nextBtn.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();