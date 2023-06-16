var positionY = 0;

const sectionItems = document.getElementsByClassName("section_item");

// Создаем пустой массив для хранения элементов
const itemsArray = [];

// Итерируемся по всем элементам и добавляем их в массив
for (let i = 0; i < sectionItems.length; i++) {
    itemsArray.push(sectionItems[i]);
}
const currentScale = [];
var currentMarginTop = parseInt(window.getComputedStyle(itemsArray[1]).zIndex);

for (let i = 0; i < itemsArray.length; i++) {
    currentScale.push(parseFloat(window.getComputedStyle(itemsArray[i]).scale));
    
}
var abc = -230;
function upItem(){
    positionY++;
    abc = abc + 10;
    console.log(abc);
    // if (positionY == 1) {
        sectionItems[positionY].style.zIndex = "7";
        sectionItems[positionY].style.marginTop = abc + "px";
        sectionItems[positionY - 1].style.zIndex = "6";
        sectionItems[positionY - 1].style.marginBottom = "240px";
        setInterval(function() {
            sectionItems[positionY - 1].style.marginBottom = "80px";
          }, 400)
    // }
    // if (positionY == 2) {
    //     document.getElementById('Nature').style.zIndex = "7";
    //     document.getElementById('Nature').style.marginTop = abc + "px";
    //     document.getElementById('Nature').style.scale = "1";
    //     document.getElementById('People').style.zIndex = "6";
    //     document.getElementById('People').style.marginBottom = "240px";
    //     setInterval(function() {
    //         document.getElementById('People').style.marginBottom = "80px";
    //       }, 400)
    // }
    // if (positionY == 3) {
    //     document.getElementById('inventions').style.zIndex = "7";
    //     document.getElementById('inventions').style.marginTop = abc + "px";
    //     document.getElementById('inventions').style.scale = "1";
    //     document.getElementById('Nature').style.zIndex = "6";
    //     document.getElementById('Nature').style.marginBottom = "240px";
    //     setInterval(function() {
    //         document.getElementById('Nature').style.marginBottom = "80px";
    //       }, 400)
    // }
    // if (positionY == 4) {
    //     document.getElementById('Facts').style.zIndex = "7";
    //     document.getElementById('Facts').style.marginTop = abc + "px";
    //     document.getElementById('Facts').style.scale = "1";
    //     document.getElementById('inventions').style.zIndex = "6";
    //     document.getElementById('inventions').style.marginBottom = "240px";
    //     setInterval(function() {
    //         document.getElementById('inventions').style.marginBottom = "80px";
    //       }, 400)
    // }
    // if (positionY == 5) {
    //     document.getElementById('literature').style.zIndex = "7";
    //     document.getElementById('literature').style.marginTop = abc + "px";
    //     document.getElementById('literature').style.scale = "1";
    //     document.getElementById('Facts').style.zIndex = "6";
    //     document.getElementById('Facts').style.marginBottom = "240px";
    //     setInterval(function() {
    //         document.getElementById('Facts').style.marginBottom = "80px";
    //       }, 400)
    // }
    // if (positionY == 6) {
    //     document.getElementById('History').style.zIndex = "7";
    //     document.getElementById('History').style.marginTop = abc + "px";
    //     document.getElementById('History').style.scale = "1";
    //     document.getElementById('literature').style.zIndex = "6";
    //     document.getElementById('literature').style.marginBottom = "240px";
    //     setInterval(function() {
    //         document.getElementById('literature').style.marginBottom = "80px";
    //       }, 400)
    // }
}

function downItem(){
    positionY--;
    
}
