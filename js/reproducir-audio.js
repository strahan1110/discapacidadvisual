document.addEventListener('DOMContentLoaded', function() {
    const btnPlay = document.getElementById('btnPlay');
    const btnPause = document.getElementById('btnPause');
    const btnStop = document.getElementById('btnStop');
    const audio = document.getElementById('audio');
  
    btnPlay.addEventListener('click', function() {
      reproducirAudio();
    });
  
    btnPause.addEventListener('click', function() {
      pausarAudio();
    });
  
    btnStop.addEventListener('click', function() {
      detenerAudio();
    });
  
    function reproducirAudio() {
      audio.play();
    }
  
    function pausarAudio() {
      audio.pause();
    }
  
    function detenerAudio() {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  