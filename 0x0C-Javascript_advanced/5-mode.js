const changeMode = (size, weight, transform, background, color) => {
  document.documentElement.style["font-size"] = size;
  document.documentElement.style["font-weight"] = weight;
  document.documentElement.style["text-transform"] = transform;
  document.documentElement.style["background-color"] = background;
  document.documentElement.style["color"] = color;
};

const main = () => {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let dark = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let p = document.createElement("p");
  let spooky_button = document.createElement("button");
  let dark_button = document.createElement("button");
  let scream_button = document.createElement("button");

  p.innerHTML = "Welcome Holberton!";
  spooky_button.innerHTML = "Spooky";
  dark_button.innerHTML = "Dark mode";
  scream_button.innerHTML = "Scream mode";

  document.body.appendChild(p);
  document.body.appendChild(spooky_button);
  document.body.appendChild(dark_button);
  document.body.appendChild(scream_button);

  spooky_button.onclick = spooky;
  dark_button.onclick = dark;
  scream_button.onclick = screamMode;
};

main();
