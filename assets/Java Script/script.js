const startButton = document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement =document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){

startButton.classList.add('hide')
shuffledQuestions=questions.sort(()=> Math.random() - .5)
currentQuestionIndex=0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion(){
    resetSate()
showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button= document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
        }

        function resetSate() {
            clearStatusClass(document.body)
            nextButton.classList.add('hide')
            while (answerButtonsElement.firstChild) {
                answerButtonsElement.removeChild
                (answerButtonsElement.firstChild)
            }
        }
    
function selectAnswer(e){
    const selectedButton= e.target
    const correct = selectedButton.dataset.correct
    setSatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setSatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1 ){
        nextButton.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}
  


function setSatusClass(element , correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    }else {
        element.classList.add('wrong')
    }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
    




const questions = [
    {
        question: 'Who won the 2018 World Cup?',
        answers: [
            {text:'France' ,correct:true},
            { text:'Croatia',correct:false}
        ]
    },
{
    question: 'who won the last Ballon Dor ? ',
    answers: [
    {text:'Messi' ,correct:true},
    { text:'Lewandoski',correct:false}
]
},
{
    question: 'What team does CR7 play for ?',
    answers: [
    {text:'Manchester United' ,correct:true},
    { text:'Juventus',correct:false}
]
},
{
    question: 'Where does Mbappe play  ?',
    answers: [
    {text:'PSG' ,correct:true},
    { text:'Real Madrid',correct:false}
]
},
{
    question: 'who isthe current coach at Real Madrid ?',
    answers: [
    {text:'Ancelloti' ,correct:true},
    { text:'Zidane',correct:false}
]
}]
