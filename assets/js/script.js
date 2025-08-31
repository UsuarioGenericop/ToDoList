const container = document.querySelector(".container");

const verificar = document.querySelector("button");

const input = document.querySelector("input");

const tasks = document.querySelector(".tasks");

const ids = document.querySelector(".ids");

const stats = document.querySelector(".stats");

const total = document.querySelector("#total");

const statusBoxes = document.querySelector(".status");

const result = document.querySelector("#resultado");

var counter = 0;
var counterResult = 0;
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
function adjustContainerHeight() {
  const baseHeight = 200;
  const heightPerTask = 50;
  const newHeight = baseHeight + heightPerTask;
  container.style.minHeight = `${newHeight}px`;
}
function recibirTexto() {
  console.log(input.value);
  let task = document.createElement("p");
  task.innerHTML = input.value;
  tasks.appendChild(task);
  console.log(task);
  if (input.value != "") {
    adjustContainerHeight();

    console.log("Nueva tarea agregada");
    counter++;
    console.log(counter);
    total.innerHTML = `Total: ${counter}`;
    let id = document.createElement("p");
    id.innerHTML = Math.round(getRandomInRange(1, 100));
    ids.appendChild(id);
    let checkboxes = document.createElement("div");
    checkboxes.className = "checkboxes";
    statusBoxes.appendChild(checkboxes);
    let checkboxright = document.createElement("input");
    checkboxright.type = "checkbox";
    checkboxright.className = "right";
    checkboxright.id = `right${id.innerHTML}`;
    checkboxes.appendChild(checkboxright);
    checkboxright.addEventListener("change", function () {
      if (this.checked) {
        counterResult++;
        result.innerHTML = `Realizadas: ${counterResult}`;
      } else {
        counterResult--;
        result.innerHTML = `Realizadas: ${counterResult}`;
      }
    });

    let checkboxwrong = document.createElement("input");
    checkboxwrong.type = "checkbox";
    checkboxwrong.className = "wrong";
    checkboxwrong.id = `wrong${id.innerHTML}`;

    checkboxwrong.addEventListener("change", function () {
      if (this.checked) {
        setTimeout(() => {
          task.remove();
          id.remove();
          checkboxes.remove();
          counter--;
          total.innerHTML = `Total: ${counter}`;
          console.log("Tarea eliminada");
        }, 100);
      }
    });

    checkboxes.appendChild(checkboxwrong);
  } else {
    console.log("No hay nueva tarea");
  }
}
verificar.addEventListener("click", () => {
  recibirTexto();
  input.value = null;
});
