/*Страница с интернет радио*/


/*Создадим переменные для элементов Player*/
const audio1 = document.querySelector('audio');
// const streamDisable = document.getElementById("stream-disable");

/*Создадим переменные для элементов Listen Radio*/
const radioTitle = document.getElementById('radio__title');
const radioLogo = document.getElementById('radio__logo');
const radioSite = document.getElementById('radio__site');
const radioCountry = document.getElementById('radio__country');



/*Создадим объекты для радиостанций*/


/*****************
Россия
*****************/
// Список русских станций https://e-radio.ru/
const dataRusNovoe = {
  title: "Новое радио",
  country: "Russia",
  stream: "https://emgspb.hostingradio.ru:80/novoespb64.mp3",
  logo: "img/radio/rus-novoe.jpg",
  site: "https://newradio.ru/",
  id: "",
  btnid: ""
}

const dataRusHoroshee = {
  title: "Хорошее радио",
  country: "Russia",
  stream: "https://hr.amgradio.ru/Horoshee",
  logo: "img/radio/rus-horoshee.svg",
  site: "https://horoshee-radio.ru/",
  id: "",
  btnid: ""
}

const dataRusSkazka = {
  title: "Радио сказка",
  country: "Russia",
  stream: "https://skazka.amgradio.ru/Skazka",
  logo: "img/radio/rus-skazka.png",
  site: "https://amgradio.ru/",
  id: "",
  btnid: ""
}

const dataRusUmnoe = {
  title: "Умное радио",
  country: "Russia",
  stream: "https://umnoe.amgradio.ru/Umnoe",
  logo: "img/radio/rus-umnoe.png",
  site: "https://amgradio.ru/",
  id: "",
  btnid: ""
}


/*****************
Беларусь
*****************/
// Список беларуских станций https://www.tvr.by/radio/
const dataBel1kanal = {
  title: "1 канал",
  country: "Belarus",
  stream: "https://stream2.datacenter.by/1kanal",
  logo: "img/radio/bel-1.jpg",
  site: "https://www.tvr.by/radio/1-kanal/",
  id: "",
  btnid: ""
}

const dataBelStalica = {
  title: "Сталіца",
  country: "Belarus",
  stream: "https://stream2.datacenter.by/stalica",
  logo: "img/radio/bel-stalica.jpg",
  site: "https://www.radiostalica.by/",
  id: "",
  btnid: ""
}

const dataBelKultura = {
  title: "Культура",
  country: "Belarus",
  stream: "https://stream2.datacenter.by/kultura",
  logo: "img/radio/bel-kultura.png",
  site: "https://radiokultura.by/",
  id: "",
  btnid: ""
}

const dataBelRadius = {
  title: "Радиус FM",
  country: "Belarus",
  stream: "https://stream2.datacenter.by/radiusfm_main",
  logo: "img/radio/bel-radius.png",
  site: "http://www.radiusfm.by/",
  id: "",
  btnid: ""
}


/*****************
Сербия
*****************/
const dataSrbPrviNovisad = {
  title: "Prvi Radio Novi Sad",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradions?mp=/stream",
  logo: "img/radio/srb-prvi-novi-sad.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-novi-sad/",
  id: "stanicaPrvinsad",
  btnid: "srb_prvinsad"
}

const dataSrbPrviSubotica = {
  title: "Prvi Radio Subotica",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradiosu?mp=/stream",
  logo: "img/radio/srb-prvi-subotica.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-subotica/",
  id: "stanicaPrvisubo",
  btnid: "srb_prvisubo"
}

const dataSrbPrviUzice = {
  title: "Prvi Radio Užice",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviradioue?mp=/stream",
  logo: "img/radio/srb-prvi-uzice.png",
  site: "https://prviradio.rs/radiochannel/prvi-radio-uzice/",
  id: "stanicaPrviuzice",
  btnid: "srb_prviuzice"
}

const dataSrbPrviKafanica = {
  title: "Prvi Radio Kafanica",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvikafanica?mp=/stream",
  logo: "img/radio/srb-prvi-kafanica.png",
  site: "https://prviradio.rs/radiochannel/kafanica/",
  id: "stanicaPrvikafa",
  btnid: "srb_prvikafa"
}

const dataSrbPrvi90 = {
  title: "Prvi Radio 90-te",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvi90te?mp=/stream",
  logo: "img/radio/srb-prvi-90te.png",
  site: "https://prviradio.rs/radiochannel/90-te/",
  id: "stanicaPrvi90",
  btnid: "srb_prvi90"
}

const dataSrbPrviCafe = {
  title: "Prvi Radio Cafe",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvicafe?mp=/stream",
  logo: "img/radio/srb-prvi-cafe.png",
  site: "https://prviradio.rs/radiochannel/cafe/",
  id: "stanicaPrvicafe",
  btnid: "srb_prvicafe"
}

const dataSrbPrviTrending = {
  title: "Prvi Radio Trending",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prvitrending?mp=/stream",
  logo: "img/radio/srb-prvi-trending.png",
  site: "https://prviradio.rs/radiochannel/trending/",
  id: "stanicaPrvitren",
  btnid: "srb_prvitren"
}

const dataSrbPrviYu = {
  title: "Prvi Radio YU kolekcija",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/prviyukolekcija?mp=/stream",
  logo: "img/radio/srb-prvi-yu.png",
  site: "https://prviradio.rs/radiochannel/yu/",
  id: "stanicaPrviyu",
  btnid: "srb_prviyu"
}

const dataSrbIn = {
  title: "Radio In Beograd FM 95.8 MHz",
  country: "Srbija",
  stream: "https://radioin-64ssl.streaming.rs:9212/;stream.mp3",
  logo: "img/radio/srb-in.png",
  site: "https://www.radioinbeograd.rs/",
  id: "stanicaIn",
  btnid: "srb_in"
}

const dataSrbAparat = {
  title: "Radio Aparat Beograd",
  country: "Srbija",
  stream: "https://ca3ssl.rcast.net/stream/60815/",
  logo: "img/radio/srb-aparat.png",
  site: "https://www.radioaparat.com",
  id: "stanicaAparat",
  btnid: "srb_aparat"
}

const dataSrbPuls = {
  title: "Radio Puls Grocka",
  country: "Srbija",
  stream: "https://stream.iradio.pro/proxy/radiopuls?mp=/stream",
  logo: "img/radio/srb-puls.jpg",
  site: "https://www.radiopuls.rs/",
  id: "stanicaPuls",
  btnid: "srb_puls"
}

const dataSrb012 = {
  title: "Radio 012 Požarevac",
  country: "Srbija",
  stream: "https://pozarevac-bobanex.radioca.st/stream",
  logo: "img/radio/srb-012.jpg",
  site: "https://radio-012.tk",
  id: "stanica012",
  btnid: "srb_012"
}

const dataSrbAsfm = {
  title: "Radio AS FM Novi Sad",
  country: "Srbija",
  stream: "https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
  logo: "img/radio/srb-asfm.png",
  site: "https://radioas.fm",
  id: "stanicaAsfm",
  btnid: "srb_asfm"
}

const dataSrbSputnjik = {
  title: "Radio Sputnjik Srbija",
  country: "Srbija",
  stream: "https://riavoice.gcdn.co/voicesrb",
  logo: "img/radio/srb-sputnik.jpg",
  site: "http://www.radiobeograd.rs/",
  id: "stanicaSpuynjik",
  btnid: "srb_sputnjik"
}

const dataSrb101 = {
  title: "Radio 101 Beograd",
  country: "Srbija",
  stream: "https://radiossl.radio101.rs/mp3",
  logo: "img/radio/srb-101.png",
  site: "http://radio101.rs",
  id: "stanica101",
  btnid: "srb_101"
}


/*****************
Хорватия
*****************/
const dataHrv1 = {
  title: "Radio 1 Čakovec",
  country: "Hrvatska",
  stream: "https://azuracast.novi-net.net/radio/8020/radio1.mp3",
  logo: "img/radio/hrv-1.png",
  site: "https://radio1.hr/",
  id: "stanica1",
  btnid: "hrv_1"
}

const dataHrv105 = {
  title: "Radio 105 Selnica",
  country: "Hrvatska",
  stream: "https://azuracast.novi-net.net/radio/8050/radio105.mp3",
  logo: "img/radio/hrv-105.png",
  site: "https://www.radio105.hr/",
  id: "stanica105",
  btnid: "hrv_105"
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


/*****************
http Сербия
*****************/
const srbLuna = {
  title: "Radio Luna Užice FM 92MHz",
  country: "Srbija",
  stream: "http://radio.m-1.fm/laluna/mp3",
  logo: "img/radio/srb-luna.png",
  site: "https://www.radioluna.info",
  id: "stanicaLuna",
  btnid: "srb_luna"
}

const srbSljivovica = {
  title: "Radio Šljivovica Kaljevo",
  country: "Srbija",
  stream: "http://stream.iradio.pro:8114/stream",
  logo: "img/radio/srb-sljivovica.png",
  site: "https://www.radiosljivovica.net",
  id: "stanicaSljivovica",
  btnid: "srb_sljivovica"
}

const srbRts1 = {
  title: "Radio RTS Beograd 1",
  country: "Srbija",
  stream: "http://138.201.33.203:8000/rts_1",
  logo: "img/radio/srb-rts-beograd1.png",
  site: "http://www.radiobeograd.rs/",
  id: "stanicaRts1",
  btnid: "srb_rts1"
}


/*****************
http Хорватия
*****************/
const dataHrvatskaDalmacijaSplit = {
  title: "Radio Dalmacija Split",
  country: "Hrvatska",
  stream: "http://shoutcast.pondi.hr:8000/;",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmsplit",
  btnid: "hrv_dalmsplit"
}

const dataHrvatskaDalmacijaOliver = {
  title: "Radio Dalmacija Oliver",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8275/stream",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmoliver",
  btnid: "hrv_dalmoliver"
}

const dataHrvatskaDalmacijaRokija = {
  title: "Radio Dalmacija Rokija",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8209/stream",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmrokija",
  btnid: "hrv_dalmrokija"
}

const dataHrvatskaDalmacijaFjaka = {
  title: "Radio Dalmacija Fjaka",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8203/stream",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmfjaka",
  btnid: "hrv_dalmfjaka"
}

const dataHrvatskaDalmacijaFuresta = {
  title: "Radio Dalmacija Furešta",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8215/stream",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmfuresta",
  btnid: "hrv_dalmfuresta"
}

const dataHrvatskaDalmacijaHajducke = {
  title: "Radio Dalmacija Hajdučke",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8221/stream",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmhajducke",
  btnid: "hrv_dalmhajducke"
}

const dataHrvatskaDalmacijaPartymix = {
  title: "Radio Dalmacija Party Mix",
  country: "Hrvatska",
  stream: "http://c5.hostingcentar.com:8281/stream",
  logo: "img/radio/hrv-dalmacija.png",
  site: "https://www.radiodalmacija.hr/",
  id: "stanicaDalmpartymix",
  btnid: "hrv_dalmpartymix"
}


/*****************
http Босния
*****************/
const dataBihSehara = {
  title: "Radio Sehara Sarajevo",
  country: "BiH",
  stream: "http://radio.radiosehara.net:9320/;",
  logo: "img/radio/bih-sehara.jpg",
  site: "https://radiosehara.net/",
  id: "stanicaSehara",
  btnid: "bih_sehara"
// http://radio.radiosehara.net:9320/;*.mp3
// http://5.9.25.50:9320/;stream.nsv
}

const dataBihCarsija = {
  title: "Radio Čaršija",
  country: "BiH",
  stream: "http://stream.radiocarsija.com:19406/;",
  logo: "img/radio/bih-carsija.jpg",
  site: "http://www.radiocarsija.com/",
  id: "stanicaCarsija",
  btnid: "bih_carsija"
//http://stream.radiocarsija.com:19406/;stream.nsv
}

const dataBihBn = {
  title: "Radio BN",
  country: "BiH",
  stream: "http://stream.rtvbn.com:8522/;",
  logo: "img/radio/bih-bn.png",
  site: "http://www.radiobn.net/",
  id: "stanicaBn",
  btnid: "bih_bn"
//http://stream.rtvbn.com:80/;*.mp3
}

const dataBihStudiod = {
  title: "Radio Studio D",
  country: "BiH",
  stream: "http://radio.studiod.ba:8018/;stream.nsv",
  logo: "img/radio/bih-studio-d.png",
  site: "https://studiod.ba/",
  id: "stanicaStudiod",
  btnid: "bih_studiod"
}


/*Функция setRadio записывает данные в плеер*/
const setRadio = (station) => {
  audio1.setAttribute('src', station.stream);
  radioLogo.setAttribute('src', station.logo);
  radioSite.href = (station.site);
  radioSite.title = (station.site);
  radioTitle.innerHTML = (station.title);
  radioCountry.innerHTML = (station.country);

  audio1.pause();
  changePlayBtn();
  // streamDisable.style.display = "none";
}



/*Добавим обработчики нажатия на button Listen live */


/*****************
Россия
*****************/
rus_novoe.addEventListener('click', () => setRadio(dataRusNovoe));

rus_horoshee.addEventListener('click', () => setRadio(dataRusHoroshee));

rus_skazka.addEventListener('click', () => setRadio(dataRusSkazka));

rus_umnoe.addEventListener('click', () => setRadio(dataRusUmnoe));


/*****************
Беларусь
*****************/
bel_1kanal.addEventListener('click', () => setRadio(dataBel1kanal));

bel_stalica.addEventListener('click', () => setRadio(dataBelStalica));

bel_kultura.addEventListener('click', () => setRadio(dataBelKultura));

bel_radius.addEventListener('click', () => setRadio(dataBelRadius));


/*****************
Сербия
*****************/
srb_prvinsad.addEventListener('click', () => setRadio(dataSrbPrviNovisad));

srb_prvisubo.addEventListener('click', () => setRadio(dataSrbPrviSubotica));

srb_prviuzice.addEventListener('click', () => setRadio(dataSrbPrviUzice));

srb_prvikafa.addEventListener('click', () => setRadio(dataSrbPrviKafanica));

srb_prvi90.addEventListener('click', () => setRadio(dataSrbPrvi90));

srb_prvicafe.addEventListener('click', () => setRadio(dataSrbPrviCafe));

srb_prvitren.addEventListener('click', () => setRadio(dataSrbPrviTrending));

srb_prviyu.addEventListener('click', () => setRadio(dataSrbPrviYu));

srb_in.addEventListener('click', () => setRadio(dataSrbIn));

srb_aparat.addEventListener('click', () => setRadio(dataSrbAparat));

srb_puls.addEventListener('click', () => setRadio(dataSrbPuls));

srb_012.addEventListener('click', () => setRadio(dataSrb012));

srb_asfm.addEventListener('click', () => setRadio(dataSrbAsfm));

srb_sputnjik.addEventListener('click', () => setRadio(dataSrbSputnjik));

srb_101.addEventListener('click', () => setRadio(dataSrb101));


/*****************
Хорватия
*****************/
hrv_1.addEventListener('click', () => setRadio(dataHrv1));
hrv_105.addEventListener('click', () => setRadio(dataHrv105));


/*****************
Босния
*****************/
bih_8.addEventListener('click', () => setRadio(dataBih8));


/*****************
http Сербия
*****************/
srb_luna.addEventListener('click', () => setRadio(srbLuna));

srb_sljivovica.addEventListener('click', () => setRadio(srbSljivovica));

srb_rts1.addEventListener('click', () => setRadio(srbRts1));


/*****************
http Хорватия
*****************/
hrv_dalmsplit.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaSplit));

hrv_dalmoliver.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaOliver));

hrv_dalmrokija.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaRokija));

hrv_dalmfjaka.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaFjaka));

hrv_dalmfuresta.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaFuresta));

hrv_dalmhajducke.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaHajducke));

hrv_dalmpartymix.addEventListener('click', () => setRadio(dataHrvatskaDalmacijaPartymix));


/*****************
http Босния
*****************/
bih_sehara.addEventListener('click', () => setRadio(dataBihSehara));

bih_8.addEventListener('click', () => setRadio(dataBih8));

bih_carsija.addEventListener('click', () => setRadio(dataBihCarsija));

bih_bn.addEventListener('click', () => setRadio(dataBihBn));

bih_studiod.addEventListener('click', () => setRadio(dataBihStudiod));

