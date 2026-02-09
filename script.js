const questions = [
  { q:"What does HTML stand for?", o:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Mode Language","None"], a:0 },
  { q:"CSS is mainly used for?", o:["Logic","Styling","Database","Security"], a:1 },
  { q:"Which language runs in the browser?", o:["Python","Java","C","JavaScript"], a:3 },
  { q:"Blockchain is best described as?", o:["Centralized DB","Decentralized ledger","Game engine","Cloud server"], a:1 },
  { q:"Bitcoin was created by?", o:["Elon Musk","Vitalik Buterin","Satoshi Nakamoto","CZ"], a:2 },
  { q:"Smart contracts run on?", o:["WhatsApp","Ethereum","Excel","Linux"], a:1 },
  { q:"What does AI stand for?", o:["Automated Input","Artificial Intelligence","Advanced Internet","Auto Index"], a:1 },
  { q:"Which is a frontend framework?", o:["Node.js","React","MongoDB","Flask"], a:1 },
  { q:"Which is NOT a blockchain?", o:["Ethereum","Solana","Polygon","Google"], a:3 },
  { q:"NFT means?", o:["New File Token","Non-Fungible Token","Network File Tool","None"], a:1 },

  { q:"What does API mean?", o:["App Program Interface","Application Programming Interface","Advanced Program Input","None"], a:1 },
  { q:"Which is a programming language?", o:["HTTP","HTML","CSS","Python"], a:3 },
  { q:"What stores website data?", o:["Browser","Server","Monitor","Keyboard"], a:1 },
  { q:"Which is a JS library?", o:["Laravel","React","Django","Flask"], a:1 },
  { q:"What does DOM mean?", o:["Document Object Model","Data Object Mode","Digital Output Machine","None"], a:0 },

  { q:"Which consensus does Bitcoin use?", o:["PoS","PoA","PoW","DPoS"], a:2 },
  { q:"Which is layer-2?", o:["Ethereum","Polygon","Bitcoin","Solana"], a:1 },
  { q:"Gas fees are paid on?", o:["Blockchain","Browser","Laptop","Router"], a:0 },
  { q:"AI learns using?", o:["Rules","Data","Magic","Luck"], a:1 },
  { q:"Which is NOT frontend?", o:["HTML","CSS","JavaScript","MySQL"], a:3 },

  { q:"Which tag links CSS?", o:["<script>","<css>","<style>","<link>"], a:3 },
  { q:"Which is used for version control?", o:["Git","Google","Linux","Excel"], a:0 },
  { q:"What does UX focus on?", o:["Looks","User experience","Backend","Security"], a:1 },
  { q:"Which AI model generates text?", o:["GPS","ChatGPT","VPN","CPU"], a:1 },
  { q:"Which stores blockchain data?", o:["Nodes","Browsers","APIs","Files"], a:0 },

  { q:"What is Web3?", o:["Web design","Decentralized web","Email","SEO"], a:1 },
  { q:"Which is backend?", o:["React","Vue","Node.js","CSS"], a:2 },
  { q:"Which uses JSX?", o:["Angular","React","Vue","Svelte"], a:1 },
  { q:"What is mining?", o:["Coding","Validating transactions","Design","Hosting"], a:1 },
  { q:"Which AI field handles vision?", o:["NLP","Computer Vision","Robotics","ML"], a:1 },

  { q:"Which stores passwords securely?", o:["Plain text","Hashing","Email","Cookies"], a:1 },
  { q:"Which is NoSQL?", o:["MySQL","PostgreSQL","MongoDB","SQLite"], a:2 },
  { q:"What does JSON stand for?", o:["Java Script Object Notation","Java Syntax","Joint System","None"], a:0 },
  { q:"Which runs JS outside browser?", o:["Node.js","React","Chrome","CSS"], a:0 },
  { q:"Which is decentralized?", o:["Facebook","Google","Ethereum","Twitter"], a:2 },

  { q:"Which improves AI accuracy?", o:["More data","Less data","Luck","UI"], a:0 },
  { q:"Which secures blockchain?", o:["Encryption","Cookies","HTML","CSS"], a:0 },
  { q:"Which is frontend styling?", o:["JS","CSS","SQL","Node"], a:1 },
  { q:"What does CLI mean?", o:["Command Line Interface","Central Logic Input","Cloud Login","None"], a:0 },
  { q:"Which is open-source?", o:["Windows","Linux","iOS","macOS"], a:1 }
];

let index = 0, score = 0;

const qEl = document.getElementById("question");
const opts = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const finalScore = document.getElementById("final-score");

function load() {
  const q = questions[index];
  qEl.textContent = q.q;
  progress.textContent = `Question ${index+1} / 50`;

  opts.forEach((b,i)=>{
    b.textContent = q.o[i];
    b.className = "option";
    b.disabled = false;
  });
}

opts.forEach((b,i)=>{
  b.onclick = ()=>{
    opts.forEach(x=>x.disabled=true);
    if(i === questions[index].a){
      b.classList.add("correct");
      score++;
    } else {
      b.classList.add("wrong");
      opts[questions[index].a].classList.add("correct");
    }
  };
});

nextBtn.onclick = ()=>{
  index++;
  if(index < questions.length){
    load();
  } else {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    finalScore.textContent = `You scored ${score} / 50`;
    confetti();
  }
};

load();

/* CONFETTI */
function confetti(){
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const pieces = Array.from({length:150},()=>({
    x:Math.random()*c.width,
    y:Math.random()*c.height,
    r:Math.random()*6+2,
    d:Math.random()*5+2
  }));

  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = "#e91e63";
    pieces.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
      p.y += p.d;
      if(p.y > c.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
