/*
// XMLHttpRequest 객체의 생성
 var xhr = new XMLHttpRequest();

 // 비동기 방식으로 Request를 오픈한다
 xhr.open('GET', 'data/data.json');
 // Request를 전송한다
 xhr.send();

 xhr.onreadystatechange = function () {
   // 서버 응답 완료 && 정상 응답
   if (xhr.readyState !== XMLHttpRequest.DONE) return;

   if (xhr.status === 200) {
     console.log(xhr.responseText);

     // Deserializing (String → Object)
     responseObject = JSON.parse(xhr.responseText);
    let newContent = '';

    responseObject.clothesList.forEach(clothes => {
        newContent += `<div class="clothesList">
    <img src="imgs/${clothes.color}_${clothes.type}.png" alt="">
    <div>${clothes.sex}, ${clothes.size} size</div>
</div>\n`;
    });

    //console.log(newContent);
    document.getElementById('lists').innerHTML = newContent;

   } else {
     console.log(`[${xhr.status}] : ${xhr.statusText}`);
   }
 };

 document.getElementsByClassName('clothes').onclick = function() {
     console.log(hi);
 }
*/

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
