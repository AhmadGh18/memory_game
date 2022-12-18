let div = document.querySelectorAll(".main div");
let spasn = document.querySelector(".span");
let arr = [];
var i = 0;
let wrongattemp = 0;
let corrextspan = document.querySelector("#one");
let wrongspan = document.querySelector("#tow");
let truepresscount = 0;
var count = 0;
let sumofv = 0;
let everything = document.querySelector(".everything");
let easy = document.querySelector(".easy");
let medum = document.querySelector(".medum");
let hard = document.querySelector(".hard");
let unknow = document.querySelectorAll(".unknow div");
let t = 0;
unknow.forEach((d) => {
  d.onclick = () => {
    everything.style.display = "block";
    d.parentElement.style.display = "none";
    if (d.classList.contains("easy")) {
      console.log("yes");

      t = 5000;
    } else if (d.classList.contains("medum")) {
      t = 4000;
    } else if (d.classList.contains("hard")) {
      t = 1500;
    }
  };
});

setTimeout(() => {
  console.log(t);
  let colors = ["green", "purple", "black", "yellow", "blue", "brown"];
  let finalv = colors[Math.floor(Math.random() * colors.length)];
  div.forEach((d) => {
    setTimeout(() => {
      d.classList.add("s");
      d.style.backgroundColor = "rgba(56, 206, 22, 0.794)";
    }, t);
    let c = `${colors[Math.floor(Math.random() * colors.length)]}`;
    d.style.backgroundColor = c;

    arr.push(c);
    if (d.style.backgroundColor == finalv) {
      sumofv++;
    }

    setTimeout(() => {
      d.onclick = () => {
        d.classList.add("finish");
        d.style.backgroundColor = c;
        if (d.style.backgroundColor != finalv) {
          wrongattemp++;
          wrongspan.innerHTML = wrongattemp;
          d.classList.add("op");
        } else {
          truepresscount++;
          corrextspan.innerHTML = truepresscount;
        }
        console.log(truepresscount);
        if (truepresscount == sumofv) {
          Swal.fire("you win");
          setTimeout(() => {
            location.reload();
          }, 3000);
        }
        if (wrongattemp > 6) {
          Swal.fire("you lose");

          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      };
    }, t);
  });

  let sum = 0;
  console.log(" sum of the color : " + sumofv);

  spasn.innerHTML = finalv;
  spasn.style.color = `${finalv}`;
  if (finalv == "black") {
    spasn.style.backgroundColor = "white";
  }
}, 2000);
