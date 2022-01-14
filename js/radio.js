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
  logo: "img/radio/prvi-radio-novi-sad-100x100.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-novi-sad/",
  id: "stanicaPrvinsad",
  btnid: "srb_prvinsad"
}

const dataSrbijaPrviSubotica = {
  title: "Prvi Radio Subotica",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradiosu?mp=/stream",
  logo: "img/radio/prvi-radio-subotica-100x100.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-subotica/",
  id: "stanicaPrvisubo",
  btnid: "srb_prvisubo"
}

const dataSrbijaPrviUzice = {
  title: "Prvi Radio Užice",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradioue?mp=/stream",
  logo: "img/radio/prvi-radio-uzice-100x100.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-uzice/",
  id: "stanicaPrviuzice",
  btnid: "srb_prviuzice"
}

const dataSrbijaPrviKafanica = {
  title: "Prvi Radio Kafanica",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvikafanica?mp=/stream",
  logo: "img/radio/prvi-kafanica-100x100.png",
  site: "https://prviradio.rs/radiochannel/kafanica/",
  id: "stanicaPrvikafa",
  btnid: "srb_prvikafa"
}

const dataSrbijaPrvi90 = {
  title: "Prvi Radio 90-te",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvi90te?mp=/stream",
  logo: "img/radio/prvi-90te-100x100.png",
  site: "https://prviradio.rs/radiochannel/90-te/",
  id: "stanicaPrvi90",
  btnid: "srb_prvi90"
}

const dataSrbijaPrviCafe = {
  title: "Prvi Radio Cafe",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvicafe?mp=/stream",
  logo: "img/radio/prvi-cafe-100x100.png",
  site: "https://prviradio.rs/radiochannel/cafe/",
  id: "stanicaPrvicafe",
  btnid: "srb_prvicafe"
}

const dataSrbijaPrviTrending = {
  title: "Prvi Radio Trending",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvitrending?mp=/stream",
  logo: "img/radio/prvi-trending-100x100.png",
  site: "https://prviradio.rs/radiochannel/trending/",
  id: "stanicaPrvitren",
  btnid: "srb_prvitren"
}

const dataSrbijaPrviYu = {
  title: "Prvi Radio YU kolekcija",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviyukolekcija?mp=/stream",
  logo: "img/radio/prvi-yu-100x100.png",
  site: "https://prviradio.rs/radiochannel/yu/",
  id: "stanicaPrviyu",
  btnid: "srb_prviyu"
}

const srbIn = {
  title: "Radio In Beograd FM 95.8 MHz",
  country: "Srbija",
  stream: "http://radioin-128.streaming.rs:9200/;stream.nsv",
  logo: "img/radio/radio-srb-in.png",
  site: "https://www.radioinbeograd.rs/",
  id: "stanicaIn",
  btnid: "srb_in"
}

const srbAparat = {
  title: "Radio Aparat Beograd",
  country: "Srbija",
  stream: "https://ca3ssl.rcast.net/stream/60815/",
  logo: "img/radio/radio-aparat.png",
  site: "https://www.radioaparat.com",
  id: "stanicaAparat",
  btnid: "srb_aparat"
}

const srbPuls = {
  title: "Radio Puls Grocka",
  country: "Srbija",
  stream: "https://stream.iradio.pro/proxy/radiopuls?mp=/stream",
  logo: "img/radio/radio-puls.jpg",
  site: "https://www.radiopuls.rs/",
  id: "stanicaPuls",
  btnid: "srb_puls"
}

const srb012 = {
  title: "Radio 012 Požarevac",
  country: "Srbija",
  stream: "https://pozarevac-bobanex.radioca.st/stream",
  logo: "img/radio/radio-012.jpg",
  site: "https://radio-012.tk",
  id: "stanica012",
  btnid: "srb_012"
}

const srbAsfm = {
  title: "Radio AS FM Novi Sad",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
  logo: "img/radio/radio-asfm.png",
  site: "https://radioas.fm",
  id: "stanicaAsfm",
  btnid: "srb_asfm"
}

const srbLuna = {
  title: "Radio Luna Užice FM 92MHz",
  country: "Srbija",
  stream: "http://radio.m-1.fm/laluna/mp3",
  logo: "img/radio/radio-luna.png",
  site: "https://www.radioluna.info",
  id: "stanicaLuna",
  btnid: "srb_luna"
}

const srbSljivovica = {
  title: "Radio Šljivovica Kaljevo",
  country: "Srbija",
  stream: "http://stream.iradio.pro:8114/stream",
  logo: "img/radio/radio-sljivovica.png",
  site: "https://www.radiosljivovica.net",
  id: "stanicaSljivovica",
  btnid: "srb_sljivovica"
}

const srbRts1 = {
  title: "Radio RTS Beograd 1",
  country: "Srbija",
  stream: "http://138.201.33.203:8000/rts_1",
  logo: "img/radio/radio-rtsbeograd1.png",
  site: "http://www.radiobeograd.rs/",
  id: "stanicaRts1",
  btnid: "srb_rts1"
}

const srbSputnjik = {
  title: "Radio Sputnjik Srbija",
  country: "Srbija",
  stream: "https://riavoice.gcdn.co/voicesrb",
  logo: "img/radio/radio-sputnik.jpg",
  site: "http://www.radiobeograd.rs/",
  id: "stanicaSpuynjik",
  btnid: "srb_sputnjik"
}

const srb101 = {
  title: "Radio 101 Beograd",
  country: "Srbija",
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
  title: "Radio Dalmacija Split",
  country: "Hrvatska",
  stream: "http://shoutcast.pondi.hr:8000/;",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmsplit",
  btnid: "hrv_dalmsplit"
}

const dataHrvatskaDalmacijaOliver = {
  title: "Radio Dalmacija Oliver",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8275/stream",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmoliver",
  btnid: "hrv_dalmoliver"
}

const dataHrvatskaDalmacijaRokija = {
  title: "Radio Dalmacija Rokija",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8209/stream",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmrokija",
  btnid: "hrv_dalmrokija"
}

const dataHrvatskaDalmacijaFjaka = {
  title: "Radio Dalmacija Fjaka",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8203/stream",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmfjaka",
  btnid: "hrv_dalmfjaka"
}

const dataHrvatskaDalmacijaFuresta = {
  title: "Radio Dalmacija Furešta",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8215/stream",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmfuresta",
  btnid: "hrv_dalmfuresta"
}

const dataHrvatskaDalmacijaHajducke = {
  title: "Radio Dalmacija Hajdučke",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8221/stream",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmhajducke",
  btnid: "hrv_dalmhajducke"
}

const dataHrvatskaDalmacijaPartymix = {
  title: "Radio Dalmacija Party Mix",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8281/stream",
  logo: "img/radio/radio-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmpartymix",
  btnid: "hrv_dalmpartymix"
}




/*****************
Босния
*****************/
const dataBihSehara = {
  title: "Radio Sehara Sarajevo",
  country: "BiH",
  stream: "http://radio.radiosehara.net:9320/;",
  logo: "img/radio/radio-bih-sehara.jpg",
  site: "https://radiosehara.net/",
  id: "stanicaSehara",
  btnid: "bih_sehara"
// http://radio.radiosehara.net:9320/;*.mp3
// http://5.9.25.50:9320/;stream.nsv
}

const dataBih8 = {
  title: "Radio 8 Sarajevo FM 106,8 MHz",
  country: "BiH",
  stream: "https://radio8-bhcloud.radioca.st/1.mp3",
  logo: "img/radio/radio-bih-8.png",
  site: "https://radio8.ba/",
  id: "stanica8",
  btnid: "bih_8"
}

const dataBihCarsija = {
  title: "Radio Čaršija",
  country: "BiH",
  stream: "http://stream.radiocarsija.com:19406/;",
  logo: "img/radio/radio-bih-carsija.jpg",
  site: "http://www.radiocarsija.com/",
  id: "stanicaCarsija",
  btnid: "bih_carsija"
//http://stream.radiocarsija.com:19406/;stream.nsv
}

const dataBihBn = {
  title: "Radio BN",
  country: "BiH",
  stream: "http://stream.rtvbn.com:8522/;",
  logo: "img/radio/radio-bih-bn.png",
  site: "http://www.radiobn.net/",
  id: "stanicaBn",
  btnid: "bih_bn"
//http://stream.rtvbn.com:80/;*.mp3
}

const dataBihStudiod = {
  title: "Radio Studio D",
  country: "BiH",
  stream: "http://radio.studiod.ba:8018/;stream.nsv",
  logo: "img/radio/radio-bih-studio-d.png",
  site: "https://studiod.ba/",
  id: "stanicaStudiod",
  btnid: "bih_studiod"
}


/*****************
Румыния
*****************/
const romDigifm = {
  title: "Radio DigiFM",
  country: "România",
  stream: "https://edge76.rcs-rds.ro/digifm/digifm.mp3",
  logo: "img/radio/radio-digifm.svg",
  site: "https://www.digifm.ro/",
  id: "stanicaDigifm",
  btnid: "rom_digifm"
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

srb_luna.addEventListener('click', () => setRadio(srbLuna));

srb_sljivovica.addEventListener('click', () => setRadio(srbSljivovica));

srb_rts1.addEventListener('click', () => setRadio(srbRts1));

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

bih_8.addEventListener('click', () => setRadio(dataBih8));

bih_carsija.addEventListener('click', () => setRadio(dataBihCarsija));

bih_bn.addEventListener('click', () => setRadio(dataBihBn));

bih_studiod.addEventListener('click', () => setRadio(dataBihStudiod));


/*****************
Румыния
*****************/
rom_digifm.addEventListener('click', () => setRadio(romDigifm));
