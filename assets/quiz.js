let start   = document.getElementById("start");
let begin   = document.getElementById("begin");
let contain = document.getElementById("container");
let qText   = document.getElementById("qText");
let option  = document.getElementById("options");
let op1     = document.getElementById("op1");
let op2     = document.getElementById("op2");
let op3     = document.getElementById("op3");
let op4     = document.getElementById("op4");
let next    = document.getElementById("next");
let scoreNum   = document.getElementById("score");
 
 
let app = {
    questions: [
                {
                  q:      "Q1: Book is to Reading as Fork is to:",
                  choices: ["A: Eating","B: Drawing","C: Playing","D: Drinking"],
                  answer:  1
                },
                {
                  q:      "Q2: 'CSS' refers to?",
                  choices: ["A: Javascript","B: HyperText Markup Language","C: Cascading Style Sheets","D: Node.js"],
                  answer:  3
                },
                {
                  q:      "Q3: what is the color of watermelon",
                  choices: ["A: Red","B: Green","C: Yellow","D: Black"],
                  answer:  2
                },
                {
                  q:      "Q1: Book is to Reading as Fork is to:",
                  choices: ["A: Eating","B: Drawing","C: Playing","D: Drinking"],
                  answer:  1
                },
                {
                  q:      "Q2: 'CSS' refers to?",
                  choices: ["A: Javascript","B: HyperText Markup Language","C: Cascading Style Sheets","D: Node.js"],
                  answer:  3
                },
                {
                  q:      "Q3: what is the color of watermelon",
                  choices: ["A: Red","B: Green","C: Yellow","D: Black"],
                  answer:  2
                }
               ],

    index:     0 ,

    score:     0,

    load:      function() {
                  contain.classList.remove("d-none");
                  start.classList.add("d-none");
                  qText.textContent =   app.questions[app.index].q;
                  op1.textContent   = ` ${app.questions[app.index].choices[0]}`; 
                  op2.textContent   = ` ${app.questions[app.index].choices[1]}`;
                  op3.textContent   = ` ${app.questions[app.index].choices[2]}`;
                  op4.textContent   = ` ${app.questions[app.index].choices[3]}`;
               },

    check:     function() {
                if(parseInt(this.id[this.id.length-1]) === app.questions[app.index].answer) {
                     scoreNum.textContent  = parseInt(scoreNum.textContent) + 1;
                     this.classList.add("correct");
                     app.score++;
                    app.done();
                     console.log(app.score)
                } else {
                    this.classList.add("wrong");
                    app.done();
                }
               }  ,
              
    done:      function() {
                  for(el of event.target.parentElement.children) {
                  el.style.pointerEvents = "none";
                }
               },
    
    next:      function() {
                   if(app.index === app.questions.length-1) {return;};
                   app.index++;
                   app.load();
                   for(el of option.children) {
                    el.style.pointerEvents = "stroke";
                    el.classList.remove("correct");
                    el.classList.remove("wrong")
                   };
               }         
}

begin.addEventListener("click", app.load);
next.addEventListener("click", app.next);

op1.addEventListener("click", app.check);
op2.addEventListener("click", app.check);
op3.addEventListener("click", app.check);
op4.addEventListener("click", app.check);






