document.addEventListener('DOMContentLoaded', function() {
    const btnPlay = document.getElementById('btnPlay');
    const btnPause = document.getElementById('btnPause');
    const btnStop = document.getElementById('btnStop');
    const textoInput = document.getElementById('texto');
    let mensaje = null;
  
    btnPlay.addEventListener('click', function() {
      reproducirTexto();
    });
  
    btnPause.addEventListener('click', function() {
      pausarTexto();
    });
  
    btnStop.addEventListener('click', function() {
      detenerTexto();
    });
  
    function reproducirTexto() {
      const texto = textoInput.value.trim();
      if (texto !== '') {
        mensaje = new SpeechSynthesisUtterance(texto);
        mensaje.lang = 'es-ES';
        window.speechSynthesis.speak(mensaje);
      }
    }
  
    function pausarTexto() {
      if (mensaje) {
        window.speechSynthesis.pause();
      }
    }
  
    function detenerTexto() {
      if (mensaje) {
        window.speechSynthesis.cancel();
        mensaje = null;
      }
    }
  });
  