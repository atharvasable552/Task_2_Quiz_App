const quizData=[
    {
        question:"Q.1. HTML stands for?",
        a:"Higher Text Modelling Language",
        b:"Huge Text Modelling Library",
        c:"Hyper Text Modelling Library",
        d:"Hyper Text Markup Language",
        correct:"d",
    },
    {
        question:"Q.2. CSS stands for?",
        a:"Central Style Sheets",
        b:"Cascading Style sheets",
        c:"Cascading Simple Sheets",
        d:"None of these",
        correct:"b",
    },
    {
        question:"Q.3. HTML is a subset of?",
        a:"HTTP",
        b:"SGML",
        c:"XML",
        d:"None of these",
        correct:"b",
    },
    {
        question:"Q.4. Javascript is which language?",
        a:"programming",
        b:"application",
        c:"scripting",
        d:"none of the above",
        correct:"c",
    },
    {
        question:"Q.5. The nodes in HTML are?",
        a:"Subclass nodes",
        b:"HTML nodes",
        c:"Window nodes",
        d:"Element nodes",
        correct:"d",
    }
];
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')
let currentQuiz=0
let score=0
loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})