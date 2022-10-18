/****************
Скрипт из файла order.js написан для
main.content
По нажатию на пункт меню в секции content
Переносит содержимое этого пункта наверх
*******************/


/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/
function addOrder(item){
    console.log(item);
    old.classList.remove('content__order');
    item.classList.add('content__order');
    console.log(item);
    old = item;
}
/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/


/**************Content*/

if (document.getElementById('content__menu-link1') &&
    document.getElementById('content__item1')) {
    var old = document.getElementById('content__menu-link1');
    const menu_link1 = document.getElementById('content__menu-link1');
    const item1 = document.getElementById('content__item1');
    menu_link1.addEventListener('click', () => addOrder(item1));
}

if (document.getElementById('content__menu-link2') &&
    document.getElementById('content__item2')) {
    const menu_link2 = document.getElementById('content__menu-link2');
    const item2 = document.getElementById('content__item2');
    menu_link2.addEventListener('click', () => addOrder(item2));
}

if (document.getElementById('content__menu-link3') &&
    document.getElementById('content__item3')) {
    const menu_link3 = document.getElementById('content__menu-link3');
    const item3 = document.getElementById('content__item3');
    menu_link3.addEventListener('click', () => addOrder(item3));
}

if (document.getElementById('content__menu-link4') &&
    document.getElementById('content__item4')) {
    const menu_link4 = document.getElementById('content__menu-link4');
    const item4 = document.getElementById('content__item4');
    menu_link4.addEventListener('click', () => addOrder(item4));
}

if (document.getElementById('content__menu-link5') &&
    document.getElementById('content__item5')) {
    const menu_link5 = document.getElementById('content__menu-link5');
    const item5 = document.getElementById('content__item5');
    menu_link5.addEventListener('click', () => addOrder(item5));
}

if (document.getElementById('content__menu-link6') &&
    document.getElementById('content__item6')) {
    const menu_link6 = document.getElementById('content__menu-link6');
    const item6 = document.getElementById('content__item6');
    menu_link6.addEventListener('click', () => addOrder(item6));
}

if (document.getElementById('content__menu-link7') &&
    document.getElementById('content__item7')) {
    const menu_link7 = document.getElementById('content__menu-link7');
    const item7 = document.getElementById('content__item7');
    menu_link7.addEventListener('click', () => addOrder(item7));
}

if (document.getElementById('content__menu-link8') &&
    document.getElementById('content__item8')) {
    const menu_link8 = document.getElementById('content__menu-link8');
    const item8 = document.getElementById('content__item8');
    menu_link8.addEventListener('click', () => addOrder(item8));
}

/*************Content*/
/****************
Скрипт из файла player.js
*******************/

const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const timeNum = document.querySelector(".time-num");
const stopBtn = document.querySelector(".stop-btn");
const speakerBtn = document.querySelector(".speaker-btn");
const volumeNum = document.querySelector(".volume-num");
const volumeRange = document.querySelector(".volume-range");
const streamDisable = document.getElementById("stream-disable");


/*******************
Кнопка Play
*******************/
const play = () => audio.play();
const pause = () => audio.pause();

// Изменение кнопки play
const changePlayBtn = () => {
  audio.paused ? playBtn.classList.remove('pause') : playBtn.classList.add('pause');
}

// Клик на кнопке play
const clickPlay = () => {
  const method = audio.paused ? 'play' : 'pause';
  audio[method]();
  changePlayBtn();
}

// Клик на кнопке play
playBtn.addEventListener('click', clickPlay);

// Клик на кнопке stop
const clickStop = () => {
  const method = audio.paused ? 'play' : 'pause';
  audio[method]();
  changePlayBtn();
}

// Клик на кнопке stop
stopBtn.addEventListener('click', clickStop);


/*******************
Ошибка если поток не загрузился
*******************/
  async function playRadio() {
    try {
      changePlayBtn();
      streamDisable.style.display = "none";
      await audio.play();
    }
    catch(err) {
      audio.pause();
      changePlayBtn();
      streamDisable.style.display = "block";
    }
  }


/*******************
Вычисление времени воспроизведения
*******************/
    audio.ontimeupdate = function() {

        var sec_num = audio.currentTime;
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        seconds=Math.round(seconds);

        if (hours < 10) {
          hours   = "0"+hours;
        }
        if (minutes < 10) {
          minutes = "0"+minutes;
        }
        if (seconds < 10) { seconds = "0"+seconds; } timeNum.innerHTML = minutes+':'+seconds;
   };


   /*******************
Кнопка вкл/выкл громкости
*******************/
let currentVolume = Number(volumeNum.innerHTML);

// Изменение кнопки вкл/выкл громкости
const changeSpeakerBtn = () => speakerBtn.classList.toggle('mute');

// Клик на кнопке вкл/выкл громкости
const clickVolume = () => {

  if (volumeRange.value == 0) {
    volumeRange.value = currentVolume; 
    audio.volume = volumeRange.value / 100;
    volumeNum.innerHTML = volumeRange.value;
  }
  else {
    currentVolume = volumeRange.value;
    volumeRange.value = 0; 
    audio.volume = 0;
    volumeNum.innerHTML = volumeRange.value;
  }

  changeSpeakerBtn();
}

// Клик на кнопке вкл/выкл громкости
speakerBtn.addEventListener('click', clickVolume);


/*******************
Изменение регулятора громкости
*******************/
const changeVolume = () => { 
  audio.volume = volumeRange.value / 100;
  volumeNum.innerHTML = volumeRange.value;
  if(volumeRange.value == 0 && !speakerBtn.classList.contains('mute')) { 
    speakerBtn.classList.add('mute');
  }
  if(volumeRange.value != 0 && speakerBtn.classList.contains('mute')) { 
    speakerBtn.classList.remove('mute');
  }
};

// Изменение регулятора громкости
volumeRange.addEventListener('change', changeVolume);

/****************
Скрипт из файла radio.js
*******************/


/*Создадим переменные для DOM элементов*/
const audio1 = document.querySelector('audio');
const radioTitle = document.getElementById('radio__title');
const radioLogo = document.getElementById('radio__logo');
const radioSite = document.getElementById('radio__site');
const radioCountry = document.getElementById('radio__country');
const stanice1 = document.querySelectorAll('.stanicaHttp');
const rusStanice = document.querySelector('#content__item1');
const belStanice = document.querySelector('#content__item2');
const srbStanice = document.querySelector('#content__item3');
const hrvStanice = document.querySelector('#content__item4');
const bihStanice = document.querySelector('#content__item5');
const srbStanice1 = document.querySelector('#content__item6');
const hrvStanice1 = document.querySelector('#content__item7');
const bihStanice1 = document.querySelector('#content__item8');


/*Создадим переменную для папки где лежат картинки*/
const logoPath = 'assets/img/radio/';


/*Создадим класс для объектов для радиостанций*/
class Station {
  constructor (title, country, stream, logo, site) {
    this.title = title;
    this.country = country;
    this.stream = stream;
    this.logo = logoPath + logo;
    this.site = site;
  }
}

/*Работаем с JSON , который должен быть на сервере. Например live server*/
/*В файле stations.json радиостанции https*/
const stationsURL = 'assets/stations.json';
let stations = [];
const dataStations = [];
const dataRussia = [];
const elemDataRussia = [];
const dataBelarus = [];
const elemDataBelarus = [];
const dataSrbija = [];
const elemDataSrbija = [];
const dataHrvatska = [];
const elemDataHrvatska = [];
const dataBiH = [];
const elemDataBiH = [];


//Делаем запрос на получение json
const request = new XMLHttpRequest();
request.open('GET', stationsURL);
request.responseType = 'json';
request.send();

request.onload = () => {
  stations = request.response;
  console.log('Данные радиостанций из json', stations);
  
  //Для каждого элемента из json создаем станцию
  for(let i = 0; i < stations.length; i++) {
    dataStations[i] = new Station (stations[i].title, stations[i].country, stations[i].stream, stations[i].logo, stations[i].site);
  }

  //Каждую станцию кладем в массив в зависимости от страны
  for(let i = 0; i < dataStations.length; i++) {
      switch (dataStations[i].country) {
      case 'Russia':
        dataRussia.push(dataStations[i]);
        break;
      case 'Belarus':
        dataBelarus.push(dataStations[i]);
        break;
      case 'Srbija':
        dataSrbija.push(dataStations[i]);
        break;
      case 'Hrvatska':
        dataHrvatska.push(dataStations[i]);
        break;
      case 'BiH':
        dataBiH.push(dataStations[i]);
        break;
    }
  }

  //Для каждой станции из России создаем кнопку
  for(let i = 0; i < dataRussia.length; i++) {
    elemDataRussia[i] = document.createElement('div');
    elemDataRussia[i].className = "stanica";
    elemDataRussia[i].innerHTML = dataRussia[i].title;
    rusStanice.appendChild(elemDataRussia[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataRussia[i].addEventListener('click', () => setRadio(dataRussia[i]));
  }
  console.log('Данные радиостанций из России', dataRussia);

  //Для каждой станции из Беларуси создаем кнопку
  for(let i = 0; i < dataBelarus.length; i++) {
    elemDataBelarus[i] = document.createElement('div');
    elemDataBelarus[i].className = "stanica";
    elemDataBelarus[i].innerHTML = dataBelarus[i].title;
    belStanice.appendChild(elemDataBelarus[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataBelarus[i].addEventListener('click', () => setRadio(dataBelarus[i]));
  }
  console.log('Данные радиостанций из Беларуси', dataBelarus);

  //Для каждой станции из Сербии создаем кнопку
  for(let i = 0; i < dataSrbija.length; i++) {
    elemDataSrbija[i] = document.createElement('div');
    elemDataSrbija[i].className = "stanica";
    elemDataSrbija[i].innerHTML = dataSrbija[i].title;
    srbStanice.appendChild(elemDataSrbija[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataSrbija[i].addEventListener('click', () => setRadio(dataSrbija[i]));
  }
  console.log('Данные радиостанций из Сербии', dataSrbija);

  //Для каждой станции из Хорватии создаем кнопку
  for(let i = 0; i < dataHrvatska.length; i++) {
    elemDataHrvatska[i] = document.createElement('div');
    elemDataHrvatska[i].className = "stanica";
    elemDataHrvatska[i].innerHTML = dataHrvatska[i].title;
    hrvStanice.appendChild(elemDataHrvatska[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataHrvatska[i].addEventListener('click', () => setRadio(dataHrvatska[i]));
  }
  console.log('Данные радиостанций из Хорватии', dataHrvatska);

  //Для каждой станции из Боснии создаем кнопку
  for(let i = 0; i < dataBiH.length; i++) {
    elemDataBiH[i] = document.createElement('div');
    elemDataBiH[i].className = "stanica";
    elemDataBiH[i].innerHTML = dataBiH[i].title;
    bihStanice.appendChild(elemDataBiH[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataBiH[i].addEventListener('click', () => setRadio(dataBiH[i]));
  }
  console.log('Данные радиостанций из Боснии', dataBiH);

}

/*В файле stations1.json радиостанции http*/
const stations1URL = 'assets/stations1.json';
let stations1 = [];
const dataStations1 = [];
const dataSrbija1 = [];
const elemDataSrbija1 = [];
const dataHrvatska1 = [];
const elemDataHrvatska1 = [];
const dataBiH1 = [];
const elemDataBiH1 = [];


//Делаем запрос на получение json
const request1 = new XMLHttpRequest();
request1.open('GET', stations1URL);
request1.responseType = 'json';
request1.send();

request1.onload = () => {
  stations1 = request1.response;
  console.log('Данные радиостанций из json1', stations1);

  //Для каждого элемента из json1 создаем станцию
  for(let i = 0; i < stations1.length; i++) {
    dataStations1[i] = new Station (stations1[i].title, stations1[i].country, stations1[i].stream, stations1[i].logo, stations1[i].site);
  }

  //Каждую станцию кладем в массив в зависимости от страны
  for(let i = 0; i < dataStations1.length; i++) {
    switch (dataStations1[i].country) {
    case 'Srbija':
      dataSrbija1.push(dataStations1[i]);
      break;
    case 'Hrvatska':
      dataHrvatska1.push(dataStations1[i]);
      break;
    case 'BiH':
      dataBiH1.push(dataStations1[i]);
      break;
    }
  }


  //Для каждой станции из Сербии создаем кнопку
  for(let i = 0; i < dataSrbija1.length; i++) {
    elemDataSrbija1[i] = document.createElement('div');
    elemDataSrbija1[i].className = "stanica";
    elemDataSrbija1[i].innerHTML = dataSrbija1[i].title;
    srbStanice1.appendChild(elemDataSrbija1[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataSrbija1[i].addEventListener('click', () => setRadio(dataSrbija1[i]));
  }
  console.log('Данные радиостанций из Сербии', dataSrbija1);

  //Для каждой станции из Хорватии создаем кнопку
  for(let i = 0; i < dataHrvatska1.length; i++) {
    elemDataHrvatska1[i] = document.createElement('div');
    elemDataHrvatska1[i].className = "stanica";
    elemDataHrvatska1[i].innerHTML = dataHrvatska1[i].title;
    hrvStanice1.appendChild(elemDataHrvatska1[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataHrvatska1[i].addEventListener('click', () => setRadio(dataHrvatska1[i]));
  }
  console.log('Данные радиостанций из Хорватии', dataHrvatska1);

  //Для каждой станции из Боснии создаем кнопку
  for(let i = 0; i < dataBiH1.length; i++) {
    elemDataBiH1[i] = document.createElement('div');
    elemDataBiH1[i].className = "stanica";
    elemDataBiH1[i].innerHTML = dataBiH1[i].title;
    bihStanice1.appendChild(elemDataBiH1[i]);

    //И вешаем на эту кнопку обработчик клика
    elemDataBiH1[i].addEventListener('click', () => setRadio(dataBiH1[i]));
  }
  console.log('Данные радиостанций из Боснии', dataBiH1);

}

// Список русских станций https://e-radio.ru/
// Список беларуских станций https://www.tvr.by/radio/


/*****************
Функция setRadio записывает данные в плеер
*****************/
const setRadio = (station) => {
  audio1.setAttribute('src', station.stream);
  radioLogo.setAttribute('src', station.logo);
  radioSite.href = (station.site);
  radioSite.title = (station.site);
  radioTitle.innerHTML = (station.title);
  radioCountry.innerHTML = (station.country);

  audio1.play();
  //changePlayBtn();
  console.info(station);
  // streamDisable.style.display = "none";
}

/****************
Скрипт из файла theme.js
*******************/

// Переключение темы светлая - темная
const theme = document.querySelector('#theme');
const page = document.querySelector('#page');

theme.addEventListener('click', function() {
  page.classList.toggle('dark-theme');
  // Допустим, тема светлая
  let theme = "light";
  // Если <body> содержит класс .dark-theme…
  if (page.classList.contains("dark-theme")) {
    // …тогда делаем тему тёмной
    theme = "dark";
  }
  // После чего сохраняем выбор в localStorage
  localStorage.setItem("theme", theme);
});


// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem('theme');
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == 'dark') {
  // …тогда мы используем класс .dark-theme
  page.classList.add("dark-theme");
}


//# sourceMappingURL=index.js.map
