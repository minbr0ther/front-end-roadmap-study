//Fetch the items from the JSON file
function loadClothesList() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.clothesList);
}

//Update the list with the given items
function displayClothesList(clothesList) {
  document.getElementById("lists").innerHTML = clothesList
    .map((clothes) => createHTMLString(clothes))
    .join("");
}

//Create HTML list item from the given data item
function createHTMLString(clothes) {
  return `<div class="clothesList">
    <img src="imgs/${clothes.color}_${clothes.type}.png" alt="">
    <div>${clothes.sex}, ${clothes.size} size</div>
</div>\n`;
}

function onButtonClick(event, clothesList) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayClothesList(clothesList.filter((clothes) => clothes[key] === value));
}

function setEventListeners(clothesList) {
  const logo = document.querySelector(".logo");
  const clothesBtns = document.querySelector(".clothes");
  logo.addEventListener("click", () => displayClothesList(clothesList));
  clothesBtns.addEventListener("click", (event) =>
    onButtonClick(event, clothesList)
  );
}

loadClothesList()
  .then((clothesList) => {
    displayClothesList(clothesList);
    setEventListeners(clothesList);
  })
  .catch(console.log);
