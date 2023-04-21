let line = document.createElement("div");
line.style.position = "fixed";
line.style.top = "10%";
line.style.width = "calc(100% - 10px)";
line.style.padding = "0 10px";
line.style.fontSize = "20px";
line.style.textAlign = "center";

setInterval(() => {
  let text = "";
  let length = Math.floor(Math.random() * 50) + 1;
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  line.textContent = text;
}, 100);

document.body.appendChild(line);


