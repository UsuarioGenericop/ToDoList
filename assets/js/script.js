const verificar = document.querySelector("button");

const input = document.querySelector("input");

const tasks = document.querySelector(".tasks");

const ids = document.querySelector(".ids");

const stats = document.querySelector(".stats");

const total = document.querySelector("#total");
var counter = 0;
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
function recibirTexto() {
  console.log(input.value);
  let task = document.createElement("p");

  task.innerHTML = input.value;
  tasks.appendChild(task);
  console.log(task);
  if (input.value != "") {
    console.log("Si hay");
    counter++;
    console.log(counter);
    total.innerHTML = `Total: ${counter}`;
    let id = document.createElement("p");
    id.innerHTML = Math.round(getRandomInRange(1, 100));
    ids.appendChild(id);
  } else {
    console.log("No hay");
  }
}
verificar.addEventListener("click", () => {
  recibirTexto();
  input.value = null;
});
