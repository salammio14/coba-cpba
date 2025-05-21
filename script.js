// Matrix effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let chars = "アァイゥエカキクケコサシスセソ0123456789";
chars = chars.split("");

let font_size = 14;
let columns = canvas.width / font_size;
let drops = [];
for(let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px monospace";

  for(let i = 0; i < drops.length; i++) {
    let text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*font_size, drops[i]*font_size);

    if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 33);

// Typing terminal text
const teks = `MENGAKSES SERVER...
LOADING...
HACKING SKRIPSI...
MENGIRIM MOTIVASI...
-----------------------
"SEMANGAT BRO! SKRIPSI MU HAMPIR BERES!"`;

let i = 0;
const output = document.getElementById("output");

function ketik() {
  if (i < teks.length) {
    output.textContent += teks.charAt(i);
    i++;
    setTimeout(ketik, 50);
  }
}
ketik();
