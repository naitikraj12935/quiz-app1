// Define the quiz questions and answers
const questions = [
    {
      que: "capital of india:",
      opt1: "delhi",
      opt2: "mumbai",
      opt3: "gujrat",
      opt4: "bihar",
      ans: "1"
    },
    {
      que: "capital of bihar:",
      opt1: "patna",
      opt2: "motihari",
      opt3: "gaya",
      opt4: "ghandinagar",
      ans: "1"
    },
    {
      que: "capital of madhyapardesh:",
      opt1: "indore",
      opt2: "bhopal",
      opt3: "kolkata",
      opt4: "mumbai",
      ans: "2"
    },
    {
      que: "capital of mahrashtra:",
      opt1: "chenni",
      opt2: "lucknow",
      opt3: "ahmdabad",
      opt4: "mumbai",
      ans: "4"
    },
    {
      que: "capital of up:",
      opt1: "gorakhpur",
      opt2: "varanashi",
      opt3: "lucknow",
      opt4: "surat",
      ans:"3" 
    },
      {
        que: "capital of gujrat:",
        opt1: "keral",
        opt2: "varanashi",
        opt3: "gandhinagar",
        opt4: "surat",
        ans: "3"
      },
      {
        que: "capital of nagaland:",
        opt1: "kohima",
        opt2: "varanashi",
        opt3: "guawati",
        opt4: "simla",
        ans: "1"
      },
      {
        que: "capital of assam:",
        opt1: "bangaluru",
        opt2: "kolkata",
        opt3: "guawati",
        opt4: "surat",
        ans: "3"
      },
      {
        que: "capital of srinagar:",
        opt1: "kashmir",
        opt2: "varanashi",
        opt3: "hydrabad",
        opt4: "maghalay",
        ans: "1"
      },
      {
        que: "chandigarh is a capital of :",
        opt1: "punjab",
        opt2: "jharkhand",
        opt3: "keral",
        opt4: "surat",
        ans: "1"
      }
    
  ];
  
  let current = 0;
  let score = 0;
  
  const problem = document.querySelector(".question");
  const ans1 = document.querySelector(".option1 label");
  const ans2 = document.querySelector(".option2 label");
  const ans3 = document.querySelector(".option3 label");
  const ans4 = document.querySelector(".option4 label");
 
  const scoreContainer = document.querySelector(".score");
  const answer=document.querySelectorAll(".answer")
  let sol=document.querySelector(".output")
  
  function render() {
    problem.textContent = questions[current].que;
    ans1.textContent = questions[current].opt1;
    ans2.textContent = questions[current].opt2;
    ans3.textContent = questions[current].opt3;
    ans4.textContent = questions[current].opt4;
  }
  let k=0;
 let answercheck = ()=>{
    let find;
    answer.forEach((just)=>{
         if(just.checked)
         {
            k++;
            find=just.id;
         }
    });

     return find;
 }
  
 let x=0;
  
  document.querySelector(".next").addEventListener("click", function() {
  if(x<questions.length)
  {
    let result=answercheck()
    if(result===questions[current].ans)
    {
     score++;
     console.log(score);
    }
    if (x == questions.length - 2) {
        document.querySelector(".next").style.display = "none";
      }
      
    x++;
  }
  if(x===questions.length-1)
  {
    document.querySelector("#sub").style.display="block";
  }
    
    if (current < questions.length - 1) {
   
      current++;
      render();
    }
  
  });
  
  // document.querySelector(".previous").addEventListener("click", function() {
    
   
  //   if (current > 0) {
       
  //     current--;
  //     render();
  //   }
  //   // if(x>0)
  //   // {
        
  //   //     if(k>0)
  //   //     {
  //   //     score--;
  //   //     }
  //   //     x--;
  //   // }
  // });
  document.querySelector('button[type="submit"]').addEventListener('click',function(){
    if(x===questions.length-1)
    {
    let result=answercheck()
    if(result===questions[current].ans)
    {
      
     score++;
     console.log(score);
    }
}
 if(x===questions.length-1)
 {
 sol.style.display="block";
 document.querySelector(".quizcontainer").style.display="none";
 }
 if(score>=questions.length-1)
 {
 document.querySelector(".source").src="https://tse1.mm.bing.net/th?id=OIP.MQr__RPZBkoBNVLmipI72QHaFD&pid=Api&rs=1&c=1&qlt=95&w=154&h=105";
 }
 else if(score>questions.length-5 && score<=questions.length-2)
 {
  document.querySelector(".source").src="https://tse3.mm.bing.net/th?id=OIP.0EKBnNlSJMUYs19MxIMhXwHaFj&pid=Api&P=0";
 }
 else{
  document.querySelector(".source").src="https://tse3.mm.bing.net/th?id=OIP.deAr9oLMJLZpxbvyFJCTvQHaFs&pid=Api&P=0";
 }
 

 
  scoreContainer.textContent=`you score ${score} out of ${questions.length}`
  })


  
  
