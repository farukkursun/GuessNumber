let PC = Math.ceil(Math.random() * 20);
console.log(PC);
let SkorPc = 10;
let enYuksekSkor=0;
let mesaj = document.querySelector(".msg");


document.querySelector(".check").onclick = () => {
  const tahmin = document.querySelector(".guess").value;
  const score = document.querySelector(".score");
  const number = document.querySelector(".number");
  const topscores = document.querySelector(".top-score");


  if(!tahmin){
    mesaj.textContent='Lütfen bir tahmin girirniz'
  }

  else if (tahmin == PC) {
    mesaj.textContent = "tebrikler bildiniz..💕";
    document.querySelector("body").style.backgroundColor = "green";
    number.textContent=PC;
    if(SkorPc>enYuksekSkor){
      enYuksekSkor=SkorPc;
      topscores.textContent=enYuksekSkor
    }

  } 
  
  else {
    if (SkorPc > 1) {
      SkorPc--;
      score.textContent = SkorPc;
      tahmin < PC
        ? (mesaj.textContent = "Arttir...📈")
        : (mesaj.textContent = "Azalt...📉");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz";
      score.textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }

  }
};

document.querySelector(".again").onclick = () => {
  SkorPc = 10;
  document.querySelector(".score").textContent = 10;
  PC = Math.ceil(Math.random() * 20);
  console.log(PC);
  mesaj.textContent = "Oyun Yeni Oyuncu icin basliyor";
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
};
