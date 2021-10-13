function learn() {
  let streaming = prompt("What streaming service do you have?");

  if (
    streaming === "HBO" ||
    streaming === "hbo" ||
    streaming === "Hbo" ||
    streaming === "Netflix" ||
    streaming === "netflix" ||
    streaming === "NETFLIX" ||
    streaming === "Funimation" ||
    streaming === "FUNIMATION" ||
    streaming === "Crunchyroll" ||
    streaming === "crunchyroll"
  ) {
    alert("Go look up Food Wars and start streaming the First episode!! 🍜");
  } else {
    alert("Go click to Learn More about the episode");
  }
}

let button = document.querySelector("button");
button.addEventListener("click", learn);
