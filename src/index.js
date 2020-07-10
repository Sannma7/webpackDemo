import "./style.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello Webpack";
  element.classList.add("Hello");

  return element;
}

document.body.appendChild(component());
