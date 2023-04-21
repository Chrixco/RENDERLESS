for (let i = 0; i < 100; i++) {
  let line = document.createElement("div");
  line.style.position = "fixed";
  line.style.top = `${10 + i * 2}%`;
  line.style.width = "75vw";
  line.style.padding = "0 10px";
  line.style.fontSize = "10px";
  line.style.textAlign = "center";

  setInterval(() => {
    let text = "";
    let length = Math.floor(Math.random() * 2222) + 1;
    let characters = "//ABCDEFGHIJKLMN**OPQRSTUVWXYZabcd//efghijklmno//pqrstuvwxy**z0123456789//";

    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    line.textContent = text;
  }, 100);

  document.body.appendChild(line);
}
