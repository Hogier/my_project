let screens = Array.from(document.getElementsByClassName("scrin"));
let numberScreens = screens.length;
let web = document.getElementById("web");
let currentScreens = 0;
let headTitle = document.getElementById("headTitle");
let nav = document.getElementById("inf1");
let body = document.getElementsByTagName("body")[0];

let arc = Array.from(document.getElementsByClassName("arc"));
let menu = Array.from(document.querySelectorAll("nav ul li"));
let ancorMenu = Array.from(document.querySelectorAll("nav ul li a"));
let protoSubmenuCircle = Array.from(
  document.getElementsByClassName("submenu-circle")
);
let submenuCircle = [];
for (let i = 0; i < 4; i++)
  submenuCircle[i] = [
    protoSubmenuCircle[i * 4],
    protoSubmenuCircle[i * 4 + 1],
    protoSubmenuCircle[i * 4 + 2],
    protoSubmenuCircle[i * 4 + 3],
  ];
let headerSide = document.getElementsByClassName("header-side")[0];
let homeIcon = document.querySelector("div.cont-home-icon");
let searchPanel = document.getElementById("search");
let searchInput = document.getElementById("search-input");
let ulSearchList = document.getElementById("search-list");
//const bodyBcgSize = parseFloat(window.getComputedStyle(body).backgroundSize);

// Анимации для выплывания подмкеню при наведении на элементы меню

menu.forEach((menuItem, index) => {
  menuItem.addEventListener("mouseenter", () => {
    arc[index].style.width = "171px";
    arc[index].style.height = "310px";
    arc[index].style.transform = `rotate(${28}deg)`;
    arc[index].style.opacity = "1";

    ancorMenu[index].style.height = "220px";

    submenuCircle[index].forEach((submenuItem, subIndex) => {
      submenuItem.style.opacity = "1";
      submenuItem.style.transform = `translate(${
        170 - subIndex * subIndex * 10
      }px, ${subIndex * 63 - 10}px)`;
    });
  });

  menuItem.addEventListener("mouseleave", () => {
    setTimeout(() => {
      arc[index].style.width = "133px";
      arc[index].style.height = "213px";
      arc[index].style.transform = `rotate(${10}deg)`;
      arc[index].style.opacity = "0";

      ancorMenu[index].style.height = "260px";

      submenuCircle[index].forEach((submenuItem) => {
        submenuItem.style.opacity = "0";
        submenuItem.style.transform = "translate(0, 0)";
      });
    }, 150);
  });
});

//Анимация выпадания меню при свернутом header

homeIcon.addEventListener("mouseenter", () => {
  homeIcon.style.background = "linear-gradient(0deg, rgba(255,255,255,0.22) 64%, rgba(218,37,1,0) 83%)";
  homeIcon.style.height = "460px";
});

homeIcon.addEventListener("mouseleave", () => {
  setTimeout(() => {homeIcon.style.background = "rgba(0, 0, 0, 0)";}, 600);
  homeIcon.style.height = "75px";
});
// Функция для скринов горизонтальной развертки
function move(num) {
  currentScreens = num;
  web.style.left = -currentScreens * 100 + "vw";
  web.style.transition = 0.4 + "s";
}

function updateHeadTitle() {
  if (currentScreens === 0) {
    headTitle.style.height = "400px";
    headerSide.style.left = "0px";
    headTitle.style.top = "45%";
    homeIcon.style.top = "-170px";
    searchPanel.style.top = "-220px";
  } else {
    headTitle.style.height = "90px";
    headerSide.style.left = "-510px";
    homeIcon.style.top = "20px";
    headTitle.style.top = "0%";
    searchPanel.style.top = "20px";
  }
}
// добавили скрины по горизонтали (прокрутка колесом)
window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    if (currentScreens < numberScreens) {
      currentScreens++;
      web.style.left = -currentScreens * 100 + "vw";
      updateHeadTitle();
      body.style.backgroundPosition =
        (100 * currentScreens) / numberScreens + "%";
      //console.log(100 * currentScreens / (numberScreens) + "%");
    }
  } else if (event.deltaY < 0) {
    if (currentScreens > 0) {
      currentScreens--;
      web.style.left = -currentScreens * 100 + "vw";
      updateHeadTitle();
      body.style.backgroundPosition =
        (100 * currentScreens) / numberScreens + "%";
    }
  }
  if (currentScreens == 0) {
    updateHeadTitle();
  }
});

//прокрутка скринов по горизонтали (при помощи нажатия кнопки на главной панели)


homeIcon.addEventListener("click", function () {
  currentScreens = 0;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("homeBtn").addEventListener("click", function () {
  currentScreens = 1;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("aboutBtn").addEventListener("click", function () {
  currentScreens = 2;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("portfolioBtn").addEventListener("click", function () {
  currentScreens = 3;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("contactBtn").addEventListener("click", function () {
  currentScreens = 4;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

// Сщздаем всплываюшее окно с нужной нам информацией

let explanationJS = Array.from(
  document.getElementsByClassName("explanationJS")
);
let isShowJS = false;
function linkJS(numJS) {
  if (isShowJS === false) {
    explanationJS[numJS].style.opacity = "1";
    explanationJS[numJS].style.transform = "scale(1)";
    isShowJS = true;
  } else {
    explanationJS[numJS].style.opacity = "0";
    explanationJS[numJS].style.transform = "scale(0)";
    isShowJS = false;
  }
}

let explanationHTML = Array.from(
  document.getElementsByClassName("explanationHTML")
);
let isShowHTML = false;
function linkHTML(numHTML) {
  if (isShowHTML === false) {
    explanationHTML[numHTML].style.opacity = "1";
    explanationHTML[numHTML].style.transform = "scale(1)";
    isShowHTML = true;
  } else {
    explanationHTML[numHTML].style.opacity = "0";
    explanationHTML[numHTML].style.transform = "scale(0)";
    isShowHTML = false;
  }
}

let explanationCSS = Array.from(
  document.getElementsByClassName("explanationCSS")
);
let isShowCSS = false;
function linkCSS(numCSS) {
  if (isShowCSS === false) {
    explanationCSS[numCSS].style.opacity = "1";
    explanationCSS[numCSS].style.transform = "scale(1)";
    isShowCSS = true;
  } else {
    explanationCSS[numCSS].style.opacity = "0";
    explanationCSS[numCSS].style.transform = "scale(0)";
    isShowCSS = false;
  }
}

let explanationProj = Array.from(
  document.getElementsByClassName("explanationProj")
);
let isShowProj = false;
function linkProj(numProj) {
  if (isShowProj === false) {
    explanationProj[numProj].style.opacity = "1";
    explanationProj[numProj].style.transform = "scale(1)";
    isShowProj = true;
  } else {
    explanationProj[numProj].style.opacity = "0";
    explanationProj[numProj].style.transform = "scale(0)";
    isShowProj = false;
  }
}


// ПОИСК И ВЫДАЧА

let example = [{
  title: "HTML",
  slide: 1,
  section: 1,
  ancor: 0
}, {
  title: "CSS",
  slide: 2,
  section: 1,
  ancor: 0
}, {
  title: "JavaScript",
  slide: 3,
  section: 1,
  ancor: 0
},
{
  title: "FrontEnd",
  slide: 4,
  section: 1,
  ancor: 0
},
{
  title: "HTML basic",
  slide: 1,
  section: 1,
  ancor: 0
}, {
  title: "CSS selector",
  slide: 2,
  section: 1,
  ancor: 0
}, {
  title: "JavaScript jQuery",
  slide: 3,
  section: 1,
  ancor: 0
},
{
  title: "FrontEnd docer",
  slide: 4,
  section: 1,
  ancor: 0
},
{
  title: "HTML list",
  slide: 1,
  section: 1,
  ancor: 0
}, {
  title: "CSS flex",
  slide: 2,
  section: 1,
  ancor: 0
}, {
  title: "JavaScript Node.js",
  slide: 3,
  section: 1,
  ancor: 0
},
{
  title: "FrontEnd MySQL",
  slide: 4,
  section: 1,
  ancor: 0
}
];

searchInput.addEventListener("input", function () {
  ulSearchList.innerHTML = "";
  if(searchInput.value.length >= 2){
  let seekResult = example.filter(function (listPunct) {
     return listPunct.title.toLowerCase().includes(searchInput.value);
  });
  console.log(seekResult);
  if (seekResult.length != 0) ulSearchList.style.display = "block";
  else ulSearchList.style.display = "none";

  for (let i = 0; i < seekResult.length; i++) {
      let newLi = document.createElement('li');
      newLi.addEventListener("click", function () {
          move(i+1);
      });
      ulSearchList.appendChild(newLi);
      newLi.textContent = seekResult[i].title;
      };
  }
  else {
      ulSearchList.style.display = "none";
  }
});
