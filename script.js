var n= Math.floor((Math.random())*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+n+".jpg");
var p= Math.floor((Math.random())*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+p+".jpg");
if(n>p)
document.querySelector("h1").textContent="🚩Player 1 wins";
else if(p>n)
document.querySelector("h1").textContent="Player 2 wins🚩";
else
document.querySelector("h1").textContent="Draw!";
