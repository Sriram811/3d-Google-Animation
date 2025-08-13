let newtext = document.getElementById("inputField");
let submitButton = document.getElementById("submitButton");
let deleteButton = document.getElementById("deleteButton");
function handleSubmit() {
  let element = document.createElement("h1");
  element.innerText = newtext.value;
  element.style.color = "blue";
  element.style.fontSize = "50px";
  document.body.appendChild(element);

  element.addEventListener("pointerover", function () {
    element.style.animation = "animate 3s 1";
  });

  element.addEventListener("mouseover", function () {
    element.style.color = "green";
    element.innerHTML = "h r u da ";
    element.style.fontSize = "70px";
  });

  element.addEventListener("mouseout", function () {
    element.style.color = "aqua";
    element.innerHTML = "i am fine";
    element.style.fontSize = "50px";
  });
}
function handleDelete() {
  let elements = document.getElementsByTagName("h1");
  if (elements.length > 0) {
    document.body.removeChild(elements[elements.length - 1]);
  }
}

let texthello = document.getElementById("hello");
texthello.addEventListener("mouseover", function () {
  texthello.style.color = "red";
  texthello.innerHTML = " i am fine";
  texthello.style.fontSize = "40px";
});
texthello.addEventListener("mouseout", function () {
  texthello.style.color = "aqua";
  texthello.innerHTML = "how about u  ";
  // texthello.style.fontSize="10px";
});
