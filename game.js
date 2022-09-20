const PC = Math.floor(Math.random() * 20);
console.log(PC);
let SkorPc = 10;

const tahmin = document.querySelector(".guess");

document.querySelector(".check").onclick = () => {
  const mesaj = document.querySelector(".msg");
  const score = document.querySelector(".score");
  const number = document.querySelector(".number");
  const topscores = document.querySelector(".top-score");
  if (tahmin.value != PC) {
    SkorPc--;
    score.innerHTML = SkorPc;
  }
  if (SkorPc == 0) {
    mesaj.innerHTML = "Game over!";
  }
  if (tahmin.value < PC) {
    mesaj.innerHTML = "arttir...";
  } else if (tahmin.value > PC) {
    mesaj.innerHTML = "azalt...";
  } else {
    mesaj.innerHTML = "kazandiniz...";
    document.querySelector("body").style.backgroundColor = "green";
    number.innerHTML = tahmin.value;
    topscores.innerHTML = SkorPc;
  }
};

document.querySelector(".again").onclick = () => {
  const mesaj = document.querySelector(".msg");
  const number = document.querySelector(".number");
  const score = document.querySelector(".score");
  const PC = Math.floor(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "black";
  number.innerHTML = "?";
  score.innerHTML = "10";
  mesaj.innerHTML = "satarting...";
  console.log(PC);
  tahmin.value=''
};
