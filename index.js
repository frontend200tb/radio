/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/player/player.js":
/*!*****************************************!*\
  !*** ./src/components/player/player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryPlay": () => (/* binding */ tryPlay)
/* harmony export */ });
/* harmony import */ var _js_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/const.js */ "./src/js/const.js");
/****************
Скрипт из файла player.js
*******************/


var timeNum = document.querySelector(".time-num");
var stopBtn = document.querySelector(".stop-btn");
var repeatBtn = document.querySelector(".repeat-btn");
var speakerBtn = document.querySelector(".speaker-btn");
var volumeNum = document.querySelector(".volume-num");
var volumeRange = document.querySelector(".volume-range");
var streamDisable = document.getElementById("stream-disable");

/*******************
Play
*******************/
function tryPlay() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.add('pause');
  streamDisable.style.display = "none";
  try {
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.play();
  } catch (err) {
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.remove('pause');
    streamDisable.style.display = "block";
    console.log(err);
  }
}

/*******************
Кнопка Play
*******************/
function clickPlay() {
  if (_js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.paused) {
    tryPlay();
  } else {
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.remove('pause');
  }
  ;
}
function changePlayBtn() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.paused ? _js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.remove('pause') : _js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.add('pause');
}
_js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.addEventListener('click', function () {
  clickPlay();
});

/*******************
Кнопка Stop
*******************/
function clickStop() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.setAttribute('src', _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.src);
}
function stopPlayBtn() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.remove('pause');
}
stopBtn.addEventListener('click', function () {
  clickStop();
  stopPlayBtn();
});

/*******************
Кнопка Repeat
*******************/
function clickRepeat() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime = 0;
}
repeatBtn.addEventListener('click', function () {
  clickRepeat();
  stopPlayBtn();
});

/*******************
Ошибка если поток не загрузился
*******************/
function audioError() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
  changePlayBtn();
  streamDisable.style.display = "block";
}
_js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.addEventListener('error', audioError);

/*******************
Вычисление времени воспроизведения
*******************/
_js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.ontimeupdate = function () {
  var sec_num = _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime;
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;
  seconds = Math.round(seconds);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timeNum.innerHTML = minutes + ':' + seconds;
};

/*******************
Кнопка вкл/выкл громкости
*******************/
var currentVolume = Number(volumeNum.innerHTML);

// Изменение кнопки вкл/выкл громкости
var changeSpeakerBtn = function changeSpeakerBtn() {
  return speakerBtn.classList.toggle('mute');
};

// Клик на кнопке вкл/выкл громкости
var clickVolume = function clickVolume() {
  if (volumeRange.value == 0) {
    volumeRange.value = currentVolume;
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.volume = volumeRange.value / 100;
    volumeNum.innerHTML = volumeRange.value;
  } else {
    currentVolume = volumeRange.value;
    volumeRange.value = 0;
    _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.volume = 0;
    volumeNum.innerHTML = volumeRange.value;
  }
  changeSpeakerBtn();
};

// Клик на кнопке вкл/выкл громкости
speakerBtn.addEventListener('click', clickVolume);

/*******************
Изменение регулятора громкости
*******************/
var changeVolume = function changeVolume() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.audio.volume = volumeRange.value / 100;
  volumeNum.innerHTML = volumeRange.value;
  if (volumeRange.value == 0 && !speakerBtn.classList.contains('mute')) {
    speakerBtn.classList.add('mute');
  }
  if (volumeRange.value != 0 && speakerBtn.classList.contains('mute')) {
    speakerBtn.classList.remove('mute');
  }
};

// Изменение регулятора громкости
volumeRange.addEventListener('change', changeVolume);

/***/ }),

/***/ "./src/components/snow/snow.js":
/*!*************************************!*\
  !*** ./src/components/snow/snow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../js/const.js */ "./src/js/const.js");
/****************
Скрипт из файла snow.js
*******************/

/* Алгоритм работы
1. По нажатию на кнопку с id="setSnow" будем запускать функции changeSnow() и saveSnow()
2. Функция changeSnow() добавит class="snow" к элементу page если его не было и наоборот
3. Функция saveSnow() сохранит настройки снега в localStorage
4. При загрузке страницы настройки снега выбираются из localStorage, если нет то по умолчанию снег идет
*/


var setSnow = document.querySelector('#setSnow');
function changeSnow() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.toggle('snow');
}
function saveSnow() {
  currentSnow = _js_const_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.contains("snow") ? 'snow' : 'false';
  localStorage.setItem("snow", currentSnow);
}
setSnow.addEventListener('click', function () {
  changeSnow();
  saveSnow();
});

// Выбираем настройки снега из localStorage
var currentSnow = localStorage.getItem('snow') || 'snow';
if (currentSnow == 'snow') {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.add("snow");
}

/***/ }),

/***/ "./src/components/theme/theme.js":
/*!***************************************!*\
  !*** ./src/components/theme/theme.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../js/const.js */ "./src/js/const.js");
/****************
Скрипт из файла theme.js
*******************/

/* Алгоритм работы
1. По нажатию на кнопку с id="theme" будем запускать функции changeTheme() и saveTheme()
2. Функция changeTheme() добавит class="dark-theme" к элементу page если его не было и наоборот
3. Функция saveTheme() сохранит выбранную тему в localStorage
4. При загрузке страницы тема выбирается из localStorage, если нет то по умолчанию тема темная
*/


var theme = document.querySelector('#theme');
function changeTheme() {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.toggle('dark-theme');
}
function saveTheme() {
  currentTheme = _js_const_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}
theme.addEventListener('click', function () {
  changeTheme();
  saveTheme();
});

// Выбираем настройки темы из localStorage
var currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme == 'dark') {
  _js_const_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.add("dark-theme");
}

/***/ }),

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audio": () => (/* binding */ audio),
/* harmony export */   "page": () => (/* binding */ page),
/* harmony export */   "playBtn": () => (/* binding */ playBtn)
/* harmony export */ });
/****************
Скрипт из файла const.js
*******************/

var page = document.querySelector('#page');
var audio = document.querySelector('audio');
var playBtn = document.querySelector(".play-btn");

/***/ }),

/***/ "./src/js/create-stations-list.js":
/*!****************************************!*\
  !*** ./src/js/create-stations-list.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStationsList": () => (/* binding */ createStationsList)
/* harmony export */ });
/* harmony import */ var _set_radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-radio.js */ "./src/js/set-radio.js");
/*****************
Функция createStationsList создает список радиостанций на странице
*****************/


function createStationsList(data, elem) {
  var parentDiv = [];
  var _loop = function _loop(i) {
    var divStanica = document.createElement('div');
    divStanica.className = "stanica";
    divStanica.innerHTML = data[i].title;
    divStanica.addEventListener('click', function () {
      return (0,_set_radio_js__WEBPACK_IMPORTED_MODULE_0__.setRadio)(data[i]);
    });
    parentDiv.push(divStanica);
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  elem.append.apply(elem, parentDiv);
}

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ (() => {

/****************
Скрипт из файла order.js написан для
main.content
По нажатию на пункт меню в секции content
Переносит содержимое этого пункта наверх
*******************/

/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/
function addOrder(item) {
  old.classList.remove('content__order');
  item.classList.add('content__order');
  old = item;
}
/*конец Основная функция убирает class order -1 у старого элемента и добавляет новому*/

/***************************
Выбираем ссылки для основного контента и вешаем обработчик событий
***************************/
var menu_links = document.querySelectorAll('.content__menu-link');
var content_items = document.querySelectorAll('.content__item');

/*если ссылки для основного контента есть*/
if (menu_links[0]) {
  var old = menu_links[0]; // первая ссылка должна быть наверху
  var _loop = function _loop(i) {
    menu_links[i].addEventListener('click', function () {
      return addOrder(content_items[i]);
    });
  };
  for (var i = 0; i < menu_links.length; i++) {
    _loop(i);
  }
}
/*конец Выбираем ссылки для основного контента и вешаем обработчик событий*/

/***/ }),

/***/ "./src/js/radio.js":
/*!*************************!*\
  !*** ./src/js/radio.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_data_stations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../static/data-stations.js */ "./src/static/data-stations.js");
/* harmony import */ var _static_data_stations1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../static/data-stations1.js */ "./src/static/data-stations1.js");
/* harmony import */ var _create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-stations-list.js */ "./src/js/create-stations-list.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/****************
Скрипт из файла radio.js
*******************/

/* Алгоритм работы
1. Получаем массив из файла data-stations.js
2. Создаем объекты (наследуем от класса Stations)
*/





/*Создадим переменные для DOM элементов*/
var rusStanice = document.querySelector('#content__item1');
var belStanice = document.querySelector('#content__item2');
var srbStanice = document.querySelector('#content__item3');
var hrvStanice = document.querySelector('#content__item4');
var bihStanice = document.querySelector('#content__item5');
var indStanice = document.querySelector('#content__item6');
var srbStanice1 = document.querySelector('#content__item7');
var hrvStanice1 = document.querySelector('#content__item8');
var bihStanice1 = document.querySelector('#content__item9');

/*Создадим переменную для папки где лежат картинки*/
var logoPath = 'static/img/radio/';
/*Создадим переменную для https адреса http потока*/
var httpToHttps = 'https://cors.bitwize.com.lb/';

/*Создадим класс для объектов для радиостанций*/
var Station = /*#__PURE__*/_createClass(function Station(title, country, stream, logo, site) {
  _classCallCheck(this, Station);
  this.title = title;
  this.country = country;
  this.stream = stream;
  this.logo = logoPath + logo;
  this.site = site;
});
/*В файле data-stations.js радиостанции https*/
var dataRussia = [];
var dataBelarus = [];
var dataSrbija = [];
var dataHrvatska = [];
var dataBiH = [];
var dataInd = [];
var stations = [];
var s = _static_data_stations_js__WEBPACK_IMPORTED_MODULE_0__.dataStations;

//Для каждого объекта из массива stations создаем станцию
for (var i = 0; i < s.length; i++) {
  stations[i] = new Station(s[i].title, s[i].country, s[i].stream, s[i].logo, s[i].site);
}

//Каждую станцию кладем в массив в зависимости от страны
for (var _i = 0; _i < stations.length; _i++) {
  switch (stations[_i].country) {
    case 'Russia':
      dataRussia.push(stations[_i]);
      break;
    case 'Belarus':
      dataBelarus.push(stations[_i]);
      break;
    case 'Srbija':
      dataSrbija.push(stations[_i]);
      break;
    case 'Hrvatska':
      dataHrvatska.push(stations[_i]);
      break;
    case 'BiH':
      dataBiH.push(stations[_i]);
      break;
    case 'India':
      dataInd.push(stations[_i]);
      break;
  }
}

/*В файле data-stations1.js радиостанции http*/
var stations1 = [];
var dataStations1 = [];
stations1 = _static_data_stations1_js__WEBPACK_IMPORTED_MODULE_1__.dataStationss1;

//Для каждого элемента из json1 создаем станцию
for (var _i2 = 0; _i2 < stations1.length; _i2++) {
  dataStations1[_i2] = new Station(stations1[_i2].title, stations1[_i2].country, httpToHttps + stations1[_i2].stream, stations1[_i2].logo, stations1[_i2].site);
}

//Каждую станцию кладем в массив в зависимости от страны
for (var _i3 = 0; _i3 < dataStations1.length; _i3++) {
  switch (dataStations1[_i3].country) {
    case 'Srbija':
      dataSrbija.push(dataStations1[_i3]);
      break;
    case 'Hrvatska':
      dataHrvatska.push(dataStations1[_i3]);
      break;
    case 'BiH':
      dataBiH.push(dataStations1[_i3]);
      break;
  }
}
(0,_create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__.createStationsList)(dataRussia, rusStanice);
(0,_create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__.createStationsList)(dataBelarus, belStanice);
(0,_create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__.createStationsList)(dataSrbija, srbStanice);
(0,_create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__.createStationsList)(dataHrvatska, hrvStanice);
(0,_create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__.createStationsList)(dataBiH, bihStanice);
(0,_create_stations_list_js__WEBPACK_IMPORTED_MODULE_2__.createStationsList)(dataInd, indStanice);

// Список русских станций https://e-radio.ru/
// Список беларуских станций https://www.tvr.by/radio/

/***/ }),

/***/ "./src/js/set-radio.js":
/*!*****************************!*\
  !*** ./src/js/set-radio.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setRadio": () => (/* binding */ setRadio)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/js/const.js");
/* harmony import */ var _components_player_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/player/player.js */ "./src/components/player/player.js");
/*****************
Функция setRadio записывает данные в плеер
*****************/



var radioLogo = document.getElementById('radio__logo');
var radioSite = document.getElementById('radio__site');
var radioTitle = document.getElementById('radio__title');
var radioCountry = document.getElementById('radio__country');
function setRadio(station) {
  _const_js__WEBPACK_IMPORTED_MODULE_0__.audio.setAttribute('src', station.stream);
  radioLogo.setAttribute('src', station.logo);
  radioSite.href = station.site;
  radioSite.title = station.site;
  radioTitle.innerHTML = station.title;
  radioCountry.innerHTML = station.country;
  (0,_components_player_player_js__WEBPACK_IMPORTED_MODULE_1__.tryPlay)();
}

/***/ }),

/***/ "./src/static/data-stations.js":
/*!*************************************!*\
  !*** ./src/static/data-stations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataStations": () => (/* binding */ dataStations)
/* harmony export */ });
var dataStations = [{
  "title": "Новое радио",
  "country": "Russia",
  "stream": "https://emgspb.hostingradio.ru:80/novoespb64.mp3",
  "logo": "rus-novoe.jpg",
  "site": "https://newradio.ru/"
}, {
  "title": "Хорошее радио",
  "country": "Russia",
  "stream": "https://hr.amgradio.ru/Horoshee",
  "logo": "rus-horoshee.svg",
  "site": "https://horoshee-radio.ru/"
}, {
  "title": "Русская волна",
  "country": "Russia",
  "stream": "https://ru1.amgradio.ru/RuWave48",
  "logo": "rus-russkaja-volna.svg",
  "site": "https://horoshee-radio.ru/"
}, {
  "title": "Сказка FM",
  "country": "Russia",
  "stream": "https://skazka.amgradio.ru/Skazka",
  "logo": "rus-skazka.png",
  "site": "https://horoshee-radio.ru/"
}, {
  "title": "Умное радио",
  "country": "Russia",
  "stream": "https://umnoe.amgradio.ru/Umnoe",
  "logo": "rus-umnoe.png",
  "site": "https://horoshee-radio.ru/"
}, {
  "title": "1 канал",
  "country": "Belarus",
  "stream": "https://stream2.datacenter.by/1kanal",
  "logo": "bel-1.jpg",
  "site": "https://www.tvr.by/radio/1-kanal/"
}, {
  "title": "Сталіца",
  "country": "Belarus",
  "stream": "https://stream2.datacenter.by/stalica",
  "logo": "bel-stalica.jpg",
  "site": "https://www.radiostalica.by/"
}, {
  "title": "Культура",
  "country": "Belarus",
  "stream": "https://stream2.datacenter.by/kultura",
  "logo": "bel-kultura.png",
  "site": "https://radiokultura.by/"
}, {
  "title": "Радиус FM",
  "country": "Belarus",
  "stream": "https://stream2.datacenter.by/radiusfm_main",
  "logo": "bel-radius.png",
  "site": "http://www.radiusfm.by/"
}, {
  "title": "Prvi Radio Novi Sad",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prviradions?mp=/stream",
  "logo": "srb-prvi-novi-sad.png",
  "site": "https://prviradio.rs/radiochannel/prvi-radio-novi-sad/"
}, {
  "title": "Prvi Radio Subotica",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prviradiosu?mp=/stream",
  "logo": "srb-prvi-subotica.png",
  "site": "https://prviradio.rs/radiochannel/prvi-radio-subotica/"
}, {
  "title": "Prvi Radio Užice",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prviradioue?mp=/stream",
  "logo": "srb-prvi-uzice.png",
  "site": "https://prviradio.rs/radiochannel/prvi-radio-uzice/"
}, {
  "title": "Prvi Radio Kafanica",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prvikafanica?mp=/stream",
  "logo": "srb-prvi-kafanica.png",
  "site": "https://prviradio.rs/radiochannel/kafanica/"
}, {
  "title": "Prvi Radio 90-te",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prvi90te?mp=/stream",
  "logo": "srb-prvi-90te.png",
  "site": "https://prviradio.rs/radiochannel/90-te/"
}, {
  "title": "Prvi Radio Cafe",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prvicafe?mp=/stream",
  "logo": "srb-prvi-cafe.png",
  "site": "https://prviradio.rs/radiochannel/cafe/"
}, {
  "title": "Prvi Radio Trending",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prvitrending?mp=/stream",
  "logo": "srb-prvi-trending.png",
  "site": "https://prviradio.rs/radiochannel/trending/"
}, {
  "title": "Prvi Radio YU kolekcija",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/prviyukolekcija?mp=/stream",
  "logo": "srb-prvi-yu.png",
  "site": "https://prviradio.rs/radiochannel/yu/"
}, {
  "title": "Radio In Beograd FM 95.8 MHz",
  "country": "Srbija",
  "stream": "https://radioin-64ssl.streaming.rs:9212/;stream.mp3",
  "logo": "srb-in.png",
  "site": "https://www.radioinbeograd.rs/"
}, {
  "title": "Radio Aparat Beograd",
  "country": "Srbija",
  "stream": "https://ca3ssl.rcast.net/stream/60815/",
  "logo": "srb-aparat.png",
  "site": "https://www.radioaparat.com/"
}, {
  "title": "Radio Puls Grocka",
  "country": "Srbija",
  "stream": "https://stream.iradio.pro/proxy/radiopuls?mp=/stream",
  "logo": "srb-puls.jpg",
  "site": "https://www.radiopuls.rs/"
}, {
  "title": "Radio 012 Požarevac",
  "country": "Srbija",
  "stream": "https://pozarevac-bobanex.radioca.st/stream",
  "logo": "srb-012.jpg",
  "site": "https://radio-012.tk/"
}, {
  "title": "Radio AS FM Novi Sad",
  "country": "Srbija",
  "stream": "https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
  "logo": "srb-asfm.png",
  "site": "https://radioas.fm/"
}, {
  "title": "Radio Šljivovica Kaljevo",
  "country": "Srbija",
  "stream": "https://stream.iradio.pro/proxy/radiosljivovica?mp=/stream",
  "logo": "srb-sljivovica.png",
  "site": "https://www.radiosljivovica.net/"
}, {
  "title": "Radio Sputnjik Srbija",
  "country": "Srbija",
  "stream": "https://icecast-rian.cdnvideo.ru/voicesrb",
  "logo": "srb-sputnik.jpg",
  "site": "https://sputnikportal.rs/radio/"
}, {
  "title": "Radio 101 Beograd",
  "country": "Srbija",
  "stream": "https://radiossl.radio101.rs/mp3",
  "logo": "srb-101.png",
  "site": "http://radio101.rs/"
}, {
  "title": "Radio Morava - Jagodina",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8000/radiomorava128.mp3",
  "logo": "srb-morava.png",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Resavski Radio - Veliki Popovic",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8010/resavskiradio128.mp3",
  "logo": "srb-resavski.jpg",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Morava VIC Radio - Jagodina",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8020/vic.mp3",
  "logo": "srb-morava-vic.jpg",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Morava KOLO Radio - Jagodina",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8040/kolo.mp3",
  "logo": "srb-morava-kolo.jpg",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Morava ETNO Radio - Jagodina",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8050/etno.mp3",
  "logo": "srb-morava-etno.jpg",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Morava POP ROK Radio - Jagodina",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8060/poprok.mp3",
  "logo": "srb-morava-pop-rok.jpg",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Morava TOP 50 Radio - Jagodina",
  "country": "Srbija",
  "stream": "https://e3.radiomorava.rs/radio/8070/top50.mp3",
  "logo": "srb-morava-top-50.jpg",
  "site": "http://www.radiomorava.rs/"
}, {
  "title": "Radio 1 Čakovec",
  "country": "Hrvatska",
  "stream": "https://azuracast.novi-net.net/radio/8020/radio1.mp3",
  "logo": "hrv-1.png",
  "site": "https://radio1.hr/"
}, {
  "title": "Radio 105 Selnica",
  "country": "Hrvatska",
  "stream": "https://azuracast.novi-net.net/radio/8050/radio105.mp3",
  "logo": "hrv-105.png",
  "site": "https://www.radio105.hr/"
}, {
  "title": "Radio 8 Sarajevo FM 106,8 MHz",
  "country": "BiH",
  "stream": "https://radio8-bhcloud.radioca.st/1.mp3",
  "logo": "bih-8.png",
  "site": "https://radio8.ba/"
}, {
  "title": "Gup Shup 94.3 FM Assam",
  "country": "India",
  "stream": "https://cors.bitwize.com.lb/http://103.95.48.18:8080/;",
  "logo": "ind-gup-shup.png",
  "site": "https://radiogupshup.com/"
}, {
  "title": "Radio Mirchi 98.3FM",
  "country": "India",
  "stream": "https://stream-56.zeno.fm/20g8vnc5mp8uv",
  "logo": "ind-mirchi.jpg",
  "site": "https://mirchi.in/"
}, {
  "title": "Big FM 106.2",
  "country": "India",
  "stream": "https://funasia.streamguys1.com/live4",
  "logo": "ind-bigfm.jpg",
  "site": "https://radiosindia.com/bigfm.html"
}, {
  "title": "Radio City 91.1FM",
  "country": "India",
  "stream": "https://stream-64.zeno.fm/pxc55r5uyc9uv",
  "logo": "ind-city.jpg",
  "site": "https://radiosindia.com/radiocityhindi.html"
}, {
  "title": "Spice FM UK 98.8",
  "country": "India",
  "stream": "https://spice988fm.radioca.st/stream",
  "logo": "ind-spicefmuk.jpg",
  "site": "https://radiosindia.com/spicefmuk.html"
}, {
  "title": "Radio Caravan",
  "country": "India",
  "stream": "https://stream.voxx.pro/radio/8260/radio.mp3",
  "logo": "ind-caravan.jpg",
  "site": "https://radiosindia.com/radiocaravan.html"
}, {
  "title": "Radio Olive 106.3FM",
  "country": "India",
  "stream": "https://playerservices.streamtheworld.com/api/livestream-redirect/OLIVE1063.mp3",
  "logo": "ind-olive.jpg",
  "site": "https://radiosindia.com/radioolive.html"
}, {
  "title": "Radio Shruti",
  "country": "India",
  "stream": "https://rs.suricloud.com/radio/8000/radio.mp3",
  "logo": "ind-shruti.jpg",
  "site": "https://radiosindia.com/radioshruti.html"
}, {
  "title": "Radio Namkin",
  "country": "India",
  "stream": "https://stream.zeno.fm/yg1qhsbaqv5tv",
  "logo": "ind-namkin.jpg",
  "site": "https://radiosindia.com/radionamkin.html"
}, {
  "title": "Desi Bollywood",
  "country": "India",
  "stream": "https://www.desizoneradio.com/relay2",
  "logo": "ind-desibollywood.jpg",
  "site": "https://radiosindia.com/desibollywood.html"
}, {
  "title": "EBC Radio 1170AM",
  "country": "India",
  "stream": "https://ice7.securenetsystems.net/WWTR?",
  "logo": "ind-ebc.jpg",
  "site": "https://radiosindia.com/ebcradio.html"
}, {
  "title": "Radio Badal",
  "country": "India",
  "stream": "https://stream.zeno.fm/nhrtcxg09u8uv",
  "logo": "ind-badal.jpg",
  "site": "https://radiosindia.com/radiobadal.html"
}];

/***/ }),

/***/ "./src/static/data-stations1.js":
/*!**************************************!*\
  !*** ./src/static/data-stations1.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataStationss1": () => (/* binding */ dataStationss1)
/* harmony export */ });
var dataStationss1 = [{
  "title": "Cool radio",
  "country": "Srbija",
  "stream": "http://176.9.30.66/",
  "logo": "srb-cool.png",
  "site": "https://coolradio.rs/"
}, {
  "title": "Radio RTS Beograd 1",
  "country": "Srbija",
  "stream": "http://138.201.33.203:8000/rts_1",
  "logo": "srb-rts-beograd1.jpg",
  "site": "http://www.radiobeograd.rs/"
}, {
  "title": "Radio RTS Beograd 2",
  "country": "Srbija",
  "stream": "http://138.201.33.203:8000/rts_2",
  "logo": "srb-rts-beograd2.jpg",
  "site": "http://www.radiobeograd.rs/"
}, {
  "title": "Radio RTS Beograd 3",
  "country": "Srbija",
  "stream": "http://138.201.33.203:8000/rts_3",
  "logo": "srb-rts-beograd3.jpg",
  "site": "http://www.radiobeograd.rs/"
}, {
  "title": "Radio RTS Beograd 202",
  "country": "Srbija",
  "stream": "http://138.201.33.203:8000/rts_4",
  "logo": "srb-rts-beograd202.jpg",
  "site": "http://www.radiobeograd.rs/"
}, {
  "title": "Radio Dalmacija Split",
  "country": "Hrvatska",
  "stream": "http://shoutcast.pondi.hr:8000/;",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Dalmacija Oliver",
  "country": "Hrvatska",
  "stream": "http://c5.hostingcentar.com:8275/stream",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Dalmacija Rokija",
  "country": "Hrvatska",
  "stream": "http://c5.hostingcentar.com:8209/stream",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Dalmacija Fjaka",
  "country": "Hrvatska",
  "stream": "http://c5.hostingcentar.com:8203/stream",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Dalmacija Furešta",
  "country": "Hrvatska",
  "stream": "http://c5.hostingcentar.com:8215/stream",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Dalmacija Hajdučke",
  "country": "Hrvatska",
  "stream": "http://c5.hostingcentar.com:8221/stream",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Dalmacija Party Mix",
  "country": "Hrvatska",
  "stream": "http://c5.hostingcentar.com:8281/stream",
  "logo": "hrv-dalmacija.png",
  "site": "https://www.radiodalmacija.hr/"
}, {
  "title": "Radio Sehara Sarajevo",
  "country": "BiH",
  "stream": "http://radio.radiosehara.net:9320/;",
  "logo": "bih-sehara.jpg",
  "site": "https://radiosehara.net/"
}, {
  "title": "Radio Čaršija",
  "country": "BiH",
  "stream": "http://stream.radiocarsija.com:19406/;",
  "logo": "bih-carsija.jpg",
  "site": "http://www.radiocarsija.com/"
}, {
  "title": "Radio BN",
  "country": "BiH",
  "stream": "http://stream.rtvbn.com:8522/;",
  "logo": "bih-bn.png",
  "site": "http://www.radiobn.net/"
}, {
  "title": "Radio Studio D",
  "country": "BiH",
  "stream": "http://radio.studiod.ba:8018/;stream.nsv",
  "logo": "bih-studio-d.png",
  "site": "https://studiod.ba/"
}];

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _js_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/order */ "./src/js/order.js");
/* harmony import */ var _js_order__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_order__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/radio */ "./src/js/radio.js");
/* harmony import */ var _components_theme_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/theme/theme */ "./src/components/theme/theme.js");
/* harmony import */ var _components_snow_snow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/snow/snow */ "./src/components/snow/snow.js");
/* harmony import */ var _components_player_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player/player */ "./src/components/player/player.js");






console.log('Radio start');
})();

/******/ })()
;
//# sourceMappingURL=index.js.map