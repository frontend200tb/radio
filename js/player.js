document.addEventListener("DOMContentLoaded", (e)=> {

//dom объекты элементов контроля
  var av = document.getElementById("av-tag");

  var playBtn=document.getElementById("play-btn");
  var playImg=document.getElementById("play-img");
  var playTime = document.getElementById("play-time");
  var curTime = document.getElementById("cur-time");

  var speakerBtn=document.getElementById("speaker-btn");
  var speakerImg=document.getElementById("speaker-img");
  var value=document.getElementById("value-num");
  var volume = document.getElementById("volume");
  const streamDisable = document.getElementById("stream-disable");


//Класс isPlaying в av для отслеживания воспроизведения звука


//функция для play/pause и изображения кнопки воспроизведения
  playBtn.addEventListener("click", (a)=> {
    if(av.classList.contains("isPlaying")) {
      av.pause();
      av.classList.remove("isPlaying");
      playImg.src = "img/player/play.svg";
    }
    else {
      playRadio()
    }
  });

  async function playRadio() {
    try {
      av.classList.add("isPlaying");
      playImg.src = "img/player/pause.svg";
      streamDisable.style.display = "none";
      await av.play();
    }
    catch(err) {
      av.pause();
      av.classList.remove("isPlaying");
      playImg.src = "img/player/play.svg";
      streamDisable.style.display = "block";
    }
  }




//функция для настройки громкости
     volume.onchange=function() { 
        av.volume = volume.value/100;
        value.innerHTML = volume.value;
        if(volume.value==0) { 
           speakerImg.src="img/player/mute.svg"
        }
     };

//функция для вкл/выкл громкости
     speakerBtn.onclick=function() {

      if(volume.value==0) {
         volume.value=50; av.volume=1;
         speakerImg.src="img/player/speaker.svg"
         value.innerHTML = volume.value;
      }
      else {
         volume.value=0; av.volume=0;
         speakerImg.src="img/player/mute.svg"
         value.innerHTML = volume.value;
      }

    };

//Время равно времени трека
    av.onloadedmetadata = function() {
      curTime.max=av.duration;
    };

//функция вывода текущего времени воспроизведения
    av.ontimeupdate=function() {

        var sec_num = av.currentTime;
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
        if (seconds < 10) { seconds = "0"+seconds; } playTime.innerHTML = minutes+':'+seconds; 
        if(av.classList.contains("isPlaying")) curTime.value=av.currentTime; 
   };

//функция для установки начала воспроизведения
    curTime.onchange=function() { 

      av.pause(); av.currentTime = curTime.value; av.play(); 
    };

});