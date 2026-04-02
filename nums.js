let countdata = document.getElementById("count");
let count = 10;
function incrment() {
  count += 1;
  countdata.innerText = count;
  incrmentcolor();
}
function decrment() {
  if (count <= 10) {
    alert("It will not less then 10");
  } else {
    count -= 1;
    countdata.innerText = count;
  }
  decrmentcolor();
}

let onedata = document.getElementById("num");
let nums = 0;
function incrment_one() {
  nums += 1;
  onedata.innerText = nums;
  backgrouncolors();
}
function decrment_one() {
  if (nums <= 1) {
    alert("it will not lss then 1");
  } else {
    nums -= 1;
    onedata.innerText = nums;
  }
  decemntbackcolors();
}

let fifthdata = document.getElementById("fifth");
let fifths = 50;
function incrment_fifth() {
  fifths += 1;
  fifthdata.innerText = fifths;
  fifitcols();
}
function decrment_fifth() {
  if (fifths <= 50) {
    alert("it will not less then 50");
  } else {
    fifths -= 1;
    fifthdata.innerText = fifths;
  }
  fitithbackcolor();
}

function incrmentcolor() {
  countdata.innerText = count;
  if (count > 10) {
    countdata.style.color = "red";
  }
}
function decrmentcolor() {
  countdata.innerText = count;
  countdata.style.color = "blue";
}

function backgrouncolors() {
  onedata.innerText = nums;
  if (nums >= 1) {
    onedata.style.background = "#797d09";
    onedata.style.color = "#10b6d7";
  }
}

function decemntbackcolors() {
  onedata.innerText = nums;
  onedata.style.background = "#dc950f";
  onedata.style.color = "#08cef5";
}

function fifitcols() {
  fifthdata.innerText = fifths;
  if (fifths >= 50) {
    fifthdata.style.background = "#ba1afa";
    fifthdata.style.color = "#ebee38";
  }
}
function fitithbackcolor() {
  fifthdata.innerText = fifths;
  fifthdata.style.background = "#09d5e4";
  fifthdata.style.color = "#ec0b0b";
}
