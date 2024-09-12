const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    },
    {
        question: "who is the first Prime Minister of Indeia",
        ans1text: "Mahatma Gandhi",
        ans2text: "Subhash Chandra Bose",
        ans3text: "Jawahar Lal Nehru",
        ans4text: "Moti Lal Nehru",
        answer: "Jawahar Lal Nehru"
    }
]

const question = document.querySelector('.quiz-question')
const questionA = document.querySelector('.text_option_a')
const questionB = document.querySelector('.text_option_b')
const questionC = document.querySelector('.text_option_c')
const questionD = document.querySelector('.text_option_d')
const answerElement = document.querySelectorAll('.answer')
const Submit = document.querySelector('#submit')

let currentQuestion = 0;
let score = 0 ;

question.textContent = quiz[currentQuestion].question,
questionA.textContent = quiz[currentQuestion].ans1text,
questionB.textContent = quiz[currentQuestion].ans2text,
questionC.textContent = quiz[currentQuestion].ans3text,
questionD.textContent = quiz[currentQuestion].ans4text

Submit.addEventListener("click" , () =>{
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    if(checkedAns === null){
        alert('please select an option')
    }else{
        if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question,
            questionA.textContent = quiz[currentQuestion].ans1text,
            questionB.textContent = quiz[currentQuestion].ans2text,
            questionC.textContent = quiz[currentQuestion].ans3text,
            questionD.textContent = quiz[currentQuestion].ans4text,
        checkedAns.checked = false;
        } else {
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }
    }
})