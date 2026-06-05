const pageTitle = document.querySelector(".title");
const container = document.querySelector(".container");

const params = Array.from(new URLSearchParams(window.location.href).entries());

params[0][0] = params[0][0].split("?")[1];

params.forEach(([param, value]) => {
  if (param === "title") {
    pageTitle.textContent = value;

    return;
  }

  const paramBlock = document.createElement("p");

  paramBlock.textContent = `${param} — ${value}`;

  container.append(paramBlock);
});