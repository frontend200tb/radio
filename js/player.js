console.log('start 200tb Online Radio Serbia');

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


console.log('js code complete 200tb Online Radio Serbia');
