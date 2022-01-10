/*Страница с интернет радио*/


/*Создадим переменные для плеера*/
const av = document.getElementById('av-tag');
var playImg=document.getElementById("play-img");
  const streamDisable = document.getElementById("stream-disable");

/*Создадим переменные для текущей радиостанции*/
const radioTitle = document.getElementById('radio__title');
const radioLogo = document.getElementById('radio__logo');
const radioSite = document.getElementById('radio__site');



/*Создадим объекты для радиостанций*/


/*****************
Сербия
*****************/
const dataSrbijaPrviNovisad = {
  title: "Prvi Radio Novi Sad Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradions?mp=/stream",
  logo: "img/radio/prvi-radio-novi-sad-100x100.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-novi-sad/",
  id: "stanicaPrvinsad",
  btnid: "srb_prvinsad"
}

const dataSrbijaPrviSubotica = {
  title: "Prvi Radio Subotica Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradiosu?mp=/stream",
  logo: "img/radio/prvi-radio-subotica-100x100.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-subotica/",
  id: "stanicaPrvisubo",
  btnid: "srb_prvisubo"
}

const dataSrbijaPrviUzice = {
  title: "Prvi Radio Užice Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradioue?mp=/stream",
  logo: "img/radio/prvi-radio-uzice-100x100.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-uzice/",
  id: "stanicaPrviuzice",
  btnid: "srb_prviuzice"
}

const dataSrbijaPrviKafanica = {
  title: "Prvi Radio Kafanica Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvikafanica?mp=/stream",
  logo: "img/radio/prvi-kafanica-100x100.png",
  site: "https://prviradio.rs/radiochannel/kafanica/",
  id: "stanicaPrvikafa",
  btnid: "srb_prvikafa"
}

const dataSrbijaPrvi90 = {
  title: "Prvi Radio 90-te Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvi90te?mp=/stream",
  logo: "img/radio/prvi-90te-100x100.png",
  site: "https://prviradio.rs/radiochannel/90-te/",
  id: "stanicaPrvi90",
  btnid: "srb_prvi90"
}

const dataSrbijaPrviCafe = {
  title: "Prvi Radio Cafe Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvicafe?mp=/stream",
  logo: "img/radio/prvi-cafe-100x100.png",
  site: "https://prviradio.rs/radiochannel/cafe/",
  id: "stanicaPrvicafe",
  btnid: "srb_prvicafe"
}

const dataSrbijaPrviTrending = {
  title: "Prvi Radio Trending Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvitrending?mp=/stream",
  logo: "img/radio/prvi-trending-100x100.png",
  site: "https://prviradio.rs/radiochannel/trending/",
  id: "stanicaPrvitren",
  btnid: "srb_prvitren"
}

const dataSrbijaPrviYu = {
  title: "Prvi Radio YU kolekcija Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviyukolekcija?mp=/stream",
  logo: "img/radio/prvi-yu-100x100.png",
  site: "https://prviradio.rs/radiochannel/yu/",
  id: "stanicaPrviyu",
  btnid: "srb_prviyu"
}


/*Сохраним в объекте данные Radio Puls Grocka Srbija*/
const srbPuls = {
    title: "Radio Puls Grocka",
    stream: "https://stream.iradio.pro/proxy/radiopuls?mp=/stream",
    logo: "img/radio/radio-puls.jpg",
    site: "https://www.radiopuls.rs/",
    id: "stanicaPuls",
    btnid: "srb_puls"
}

/*Сохраним в объекте данные Radio 012 Požarevac Srbija*/
const srb012 = {
    title: "Radio 012 Požarevac",
    stream: "https://pozarevac-bobanex.radioca.st/stream",
    logo: "img/radio/radio-012.jpg",
    site: "https://radio-012.tk",
    id: "stanica012",
    btnid: "srb_012"
}


/*Сохраним в объекте данные Radio Aparat Beograd Srbija*/
const srbAparat = {
    title: "Radio Aparat Beograd",
    stream: "https://ca3ssl.rcast.net/stream/60815/",
    logo: "img/radio/radio-aparat.png",
    site: "https://www.radioaparat.com",
    id: "stanicaAparat",
    btnid: "srb_aparat"
}


/*Сохраним в объекте данные Radio AS FM Novi Sad Srbija*/
const srbAsfm = {
    title: "Radio AS FM Novi Sad",
    stream: "https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
    logo: "img/radio/radio-asfm.png",
    site: "https://radioas.fm",
    id: "stanicaAsfm",
    btnid: "srb_asfm"
}


/*Сохраним в объекте данные Radio Luna Užice Srbija*/
const srbLuna = {
    title: "Radio Luna Užice",
    stream: "http://radio.m-1.fm/laluna/mp3",
    logo: "img/radio/radio-luna.png",
    site: "https://www.radioluna.info",
    id: "stanicaLuna",
    btnid: "srb_luna"
}


/*Сохраним в объекте данные Radio Šljivovica Kaljevo Srbija*/
const srbSljivovica = {
    title: "Radio Šljivovica Kaljevo",
    stream: "http://stream.iradio.pro:8114/stream",
    logo: "img/radio/radio-sljivovica.png",
    site: "https://www.radiosljivovica.net",
    id: "stanicaSljivovica",
    btnid: "srb_sljivovica"
}

/*Сохраним в объекте данные Radio RTS Beograd 1 Srbija*/
const srbRts1 = {
    title: "Radio RTS Beograd 1",
    stream: "http://138.201.33.203:8000/rts_1",
    logo: "img/radio/radio-rtsbeograd1.png",
    site: "http://www.radiobeograd.rs/",
    id: "stanicaRts1",
    btnid: "srb_rts1"
}

/*Сохраним в объекте данные Radio DigiFM România*/
const romDigifm = {
    title: "Radio DigiFM România",
    stream: "https://edge76.rcs-rds.ro/digifm/digifm.mp3",
    logo: "img/radio/radio-digifm.svg",
    site: "https://www.digifm.ro/",
    id: "stanicaDigifm",
    btnid: "rom_digifm"
}

/*Сохраним в объекте данные Radio Sputnjik Srbija*/
const srbSputnjik = {
    title: "Radio Sputnjik Srbija",
    stream: "https://riavoice.gcdn.co/voicesrb",
    logo: "img/radio/radio-sputnik.jpg",
    site: "http://www.radiobeograd.rs/",
    id: "stanicaSpuynjik",
    btnid: "srb_sputnjik"
}

/*Сохраним в объекте данные Radio 101 Beograd Srbija*/
const srb101 = {
    title: "Radio 101 Beograd",
    stream: "https://radiossl.radio101.rs/mp3",
    logo: "img/radio/radio-101.png",
    site: "http://radio101.rs",
    id: "stanica101",
    btnid: "srb_101"
}


/*****************
Хорватия
*****************/
const dataHrvatskaDalmacijaSplit = {
  title: "Radio Dalmacija Split Hrvatska",
  stream: "http://shoutcast.pondi.hr:8000/",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmsplit",
  btnid: "hrv_dalmsplit"
}

const dataHrvatskaDalmacijaOliver = {
  title: "Radio Dalmacija Oliver Hrvatska",
  stream: "http://c5.hostingcentar.com:8275/stream",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmoliver",
  btnid: "hrv_dalmoliver"
}

const dataHrvatskaDalmacijaRokija = {
  title: "Radio Dalmacija Rokija Hrvatska",
  stream: "http://c5.hostingcentar.com:8209/stream",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmrokija",
  btnid: "hrv_dalmrokija"
}

const dataHrvatskaDalmacijaFjaka = {
  title: "Radio Dalmacija Fjaka Hrvatska",
  stream: "http://c5.hostingcentar.com:8203/stream",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmfjaka",
  btnid: "hrv_dalmfjaka"
}

const dataHrvatskaDalmacijaFuresta = {
  title: "Radio Dalmacija Furešta Hrvatska",
  stream: "http://c5.hostingcentar.com:8215/stream",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmfuresta",
  btnid: "hrv_dalmfuresta"
}

const dataHrvatskaDalmacijaHajducke = {
  title: "Radio Dalmacija Hajdučke Hrvatska",
  stream: "http://c5.hostingcentar.com:8221/stream",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmhajducke",
  btnid: "hrv_dalmhajducke"
}

const dataHrvatskaDalmacijaPartymix = {
  title: "Radio Dalmacija Party Mix Hrvatska",
  stream: "http://c5.hostingcentar.com:8281/stream",
  logo: "img/radio/dalmacija-live.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmpartymix",
  btnid: "hrv_dalmpartymix"
}




/*****************
Босния
*****************/
const dataBihSehara = {
  title: "Radio Sehara Sarajevo",
  stream: "http://radio.radiosehara.net:9320/;*.mp3",
  logo: "img/radio/radio-bih-sehara.jpg",
  site: "https://prviradio.rs/radiochannel/prvi-radio-novi-sad/",
  id: "stanicaSehara",
  btnid: "bih_sehara"
}


/*Функция setRadio записывает данные в плеер*/
const setRadio = (station) => {
    av.setAttribute('src', station.stream);
    radioTitle.innerHTML = (station.title);
    radioLogo.setAttribute('src', station.logo);
    radioSite.href = (station.site);
    radioSite.innerHTML = (station.site);

    av.pause();
    av.classList.remove("isPlaying");
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

srb_puls.addEventListener('click', () => setRadio(srbPuls));

srb_012.addEventListener('click', () => setRadio(srb012));

srb_aparat.addEventListener('click', () => setRadio(srbAparat));

srb_asfm.addEventListener('click', () => setRadio(srbAsfm));

srb_luna.addEventListener('click', () => setRadio(srbLuna));

srb_sljivovica.addEventListener('click', () => setRadio(srbSljivovica));

srb_rts1.addEventListener('click', () => setRadio(srbRts1));

rom_digifm.addEventListener('click', () => setRadio(romDigifm));

srb_sputnjik.addEventListener('click', () => setRadio(srbSputnjik));

srb_101.addEventListener('click', () => setRadio(srb101));


/*****************
Хорватия
*****************/
hrv_dalmsplit.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaSplit));

hrv_dalmoliver.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaOliver));

hrv_dalmrokija.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaRokija));

hrv_dalmfjaka.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaFjaka));

hrv_dalmfuresta.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaFuresta));

hrv_dalmhajducke.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaHajducke));

hrv_dalmpartymix.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaPartymix));


/*****************
Босния
*****************/
bih_sehara.addEventListener('click', () => setRadio(dataBihSehara));
