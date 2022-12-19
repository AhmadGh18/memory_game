let div = document.querySelectorAll(".main div");
let spasn = document.querySelector(".span");
let arr = [];
var i = 0;
let wrongattemp = 0;
let corrextspan = document.querySelector("#one");
let wrongspan = document.querySelector("#tow");
let truepresscount = 0;
var count = 0;
let pp = 0;
let isclicked = false;
let everything = document.querySelector(".everything");
let easy = document.querySelector("#ch1");
let medum = document.querySelector("#ch2");
let hard = document.querySelector("#ch3");
let unknow = document.querySelectorAll(".unknow button");
let t = 0;
let tt = document.querySelector(".unknow");
let sumofv = 0;
let labels = document.querySelectorAll("input");

let colors = ["green", "purple", "black", "yellow", "blue", "brown"];
let finalv = colors[Math.floor(Math.random() * colors.length)];
unknow.forEach((dd) => {
  dd.onclick = () => {
    everything.style.display = "block";
    tt.style.display = "none";

    if (dd.classList.contains("easy")) {
      t = 5000;
    } else if (dd.classList.contains("medum")) {
      t = 3500;
    } else if (dd.classList.contains("hard")) {
      t = 2000;
    }

    div.forEach((d) => {
      console.log(t);
      let c = `${colors[Math.floor(Math.random() * colors.length)]}`;
      d.style.backgroundColor = c;

      arr.push(c);
      if (d.style.backgroundColor == finalv) {
        sumofv++;
      }

      setTimeout(() => {
        d.classList.add("newclass");
        //  d.style.backgroundColor = "rgba(56, 206, 22, 0.794)";
      }, t);

      setTimeout(() => {
        d.onclick = () => {
          d.classList.add("finish");
          d.style.backgroundColor = c;
          d.classList.remove("newclass");
          if (d.style.backgroundColor != finalv) {
            wrongattemp++;
            wrongspan.innerHTML = wrongattemp;
            d.classList.add("op");
          } else {
            truepresscount++;

            corrextspan.innerHTML = truepresscount;
          }
          if (sumofv == 0) {
            location.reload();
          }
          console.log("real " + sumofv);
          console.log(truepresscount);
          if (truepresscount == sumofv) {
            Swal.fire("you win");
            setTimeout(() => {
              location.reload();
            }, 3000);
          }
          if (wrongattemp > 6) {
            div.forEach((d) => {
              d.classList.remove("newclass");
              d.classList.add("finish");
            });

            setTimeout(() => {
              location.reload();
            }, 2000);
          }
        };
      }, t);

      let sum = 0;

      spasn.innerHTML = finalv;
      spasn.style.color = `${finalv}`;
    }, t);
  };
});
