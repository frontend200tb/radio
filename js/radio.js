/*Страница с интернет радио*/


/*Создадим переменные для элементов Player*/
const audioTag = document.getElementById('av-tag');
const playImg=document.getElementById("play-img");
const streamDisable = document.getElementById("stream-disable");

/*Создадим переменные для элементов Listen Radio*/
const radioTitle = document.getElementById('radio__title');
const radioLogo = document.getElementById('radio__logo');
const radioSite = document.getElementById('radio__site');
const radioCountry = document.getElementById('radio__country');



/*Создадим объекты для радиостанций*/


/*****************
Сербия
*****************/
const dataSrbijaPrviNovisad = {
  title: "Prvi Radio Novi Sad",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradions?mp=/stream",
  logo: "img/radio/srb-prvi-novi-sad.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-novi-sad/",
  id: "stanicaPrvinsad",
  btnid: "srb_prvinsad"
}

const dataSrbijaPrviSubotica = {
  title: "Prvi Radio Subotica",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradiosu?mp=/stream",
  logo: "img/radio/srb-prvi-subotica.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-subotica/",
  id: "stanicaPrvisubo",
  btnid: "srb_prvisubo"
}

const dataSrbijaPrviUzice = {
  title: "Prvi Radio Užice",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradioue?mp=/stream",
  logo: "img/radio/srb-prvi-uzice.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-uzice/",
  id: "stanicaPrviuzice",
  btnid: "srb_prviuzice"
}

const dataSrbijaPrviKafanica = {
  title: "Prvi Radio Kafanica",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvikafanica?mp=/stream",
  logo: "img/radio/srb-prvi-kafanica.png",
  site: "https://prviradio.rs/radiochannel/kafanica/",
  id: "stanicaPrvikafa",
  btnid: "srb_prvikafa"
}

const dataSrbijaPrvi90 = {
  title: "Prvi Radio 90-te",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvi90te?mp=/stream",
  logo: "img/radio/srb-prvi-90te.png",
  site: "https://prviradio.rs/radiochannel/90-te/",
  id: "stanicaPrvi90",
  btnid: "srb_prvi90"
}

const dataSrbijaPrviCafe = {
  title: "Prvi Radio Cafe",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvicafe?mp=/stream",
  logo: "img/radio/srb-prvi-cafe.png",
  site: "https://prviradio.rs/radiochannel/cafe/",
  id: "stanicaPrvicafe",
  btnid: "srb_prvicafe"
}

const dataSrbijaPrviTrending = {
  title: "Prvi Radio Trending",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvitrending?mp=/stream",
  logo: "img/radio/srb-prvi-trending.png",
  site: "https://prviradio.rs/radiochannel/trending/",
  id: "stanicaPrvitren",
  btnid: "srb_prvitren"
}

const dataSrbijaPrviYu = {
  title: "Prvi Radio YU kolekcija",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviyukolekcija?mp=/stream",
  logo: "img/radio/srb-prvi-yu.png",
  site: "https://prviradio.rs/radiochannel/yu/",
  id: "stanicaPrviyu",
  btnid: "srb_prviyu"
}

const srbIn = {
  title: "Radio In Beograd FM 95.8 MHz",
  country: "Srbija",
  stream: "https://radioin-64ssl.streaming.rs:9212/;stream.mp3",
  logo: "img/radio/srb-in.png",
  site: "https://www.radioinbeograd.rs/",
  id: "stanicaIn",
  btnid: "srb_in"
}

const srbAparat = {
  title: "Radio Aparat Beograd",
  country: "Srbija",
  stream: "https://ca3ssl.rcast.net/stream/60815/",
  logo: "img/radio/srb-aparat.png",
  site: "https://www.radioaparat.com",
  id: "stanicaAparat",
  btnid: "srb_aparat"
}

const srbPuls = {
  title: "Radio Puls Grocka",
  country: "Srbija",
  stream: "https://stream.iradio.pro/proxy/radiopuls?mp=/stream",
  logo: "img/radio/srb-puls.jpg",
  site: "https://www.radiopuls.rs/",
  id: "stanicaPuls",
  btnid: "srb_puls"
}

const srb012 = {
  title: "Radio 012 Požarevac",
  country: "Srbija",
  stream: "https://pozarevac-bobanex.radioca.st/stream",
  logo: "img/radio/srb-012.jpg",
  site: "https://radio-012.tk",
  id: "stanica012",
  btnid: "srb_012"
}

const srbAsfm = {
  title: "Radio AS FM Novi Sad",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
  logo: "img/radio/srb-asfm.png",
  site: "https://radioas.fm",
  id: "stanicaAsfm",
  btnid: "srb_asfm"
}

const srbSputnjik = {
  title: "Radio Sputnjik Srbija",
  country: "Srbija",
  stream: "https://riavoice.gcdn.co/voicesrb",
  logo: "img/radio/srb-sputnik.jpg",
  site: "http://www.radiobeograd.rs/",
  id: "stanicaSpuynjik",
  btnid: "srb_sputnjik"
}

const srb101 = {
  title: "Radio 101 Beograd",
  country: "Srbija",
  stream: "https://radiossl.radio101.rs/mp3",
  logo: "img/radio/srb-101.png",
  site: "http://radio101.rs",
  id: "stanica101",
  btnid: "srb_101"
}


/*****************
Босния
*****************/
const dataBih8 = {
  title: "Radio 8 Sarajevo FM 106,8 MHz",
  country: "BiH",
  stream: "https://radio8-bhcloud.radioca.st/1.mp3",
  logo: "img/radio/bih-8.png",
  site: "https://radio8.ba/",
  id: "stanica8",
  btnid: "bih_8"
}



/*Функция setRadio записывает данные в плеер*/
const setRadio = (station) => {
  audioTag.setAttribute('src', station.stream);
  radioLogo.setAttribute('src', station.logo);
  radioSite.href = (station.site);
  radioSite.title = (station.site);
  radioTitle.innerHTML = (station.title);
  radioCountry.innerHTML = (station.country);

  audioTag.pause();
  audioTag.classList.remove("isPlaying");
  playImg.src = "img/player/play.svg";
  streamDisable.style.display = "none";
}



/*Добавим обработчики нажатия на button Listen live */


/*****************
Сербия
*****************/
srb_prvinsad.addEventListener('click', () => setRadio(dataSrbijaPrviNovisad));

srb_prvisubo.addEventListener('click', () => setRadio(dataSrbijaPrviSubotica));

srb_prviuzice.addEventListener('click', () => setRadio(dataSrbijaPrviUzice));

srb_prvikafa.addEventListener('click', () => setRadio(dataSrbijaPrviKafanica));

srb_prvi90.addEventListener('click', () => setRadio(dataSrbijaPrvi90));

srb_prvicafe.addEventListener('click', () => setRadio(dataSrbijaPrviCafe));

srb_prvitren.addEventListener('click', () => setRadio(dataSrbijaPrviTrending));

srb_prviyu.addEventListener('click', () => setRadio(dataSrbijaPrviYu));

srb_in.addEventListener('click', () => setRadio(srbIn));

srb_aparat.addEventListener('click', () => setRadio(srbAparat));

srb_puls.addEventListener('click', () => setRadio(srbPuls));

srb_012.addEventListener('click', () => setRadio(srb012));

srb_asfm.addEventListener('click', () => setRadio(srbAsfm));

srb_sputnjik.addEventListener('click', () => setRadio(srbSputnjik));

srb_101.addEventListener('click', () => setRadio(srb101));


/*****************
Хорватия
*****************/


/*****************
Босния
*****************/
bih_8.addEventListener('click', () => setRadio(dataBih8));

