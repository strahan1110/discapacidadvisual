document.addEventListener('DOMContentLoaded', function() {
    const btnPlay = document.getElementById('btnPlay');
    const btnPause = document.getElementById('btnPause');
    const btnStop = document.getElementById('btnStop');
    const archivoInput = document.getElementById('archivoInput');
    let mensaje = null;
  
    btnPlay.addEventListener('click', function() {
      reproducirArchivo();
    });
  
    btnPause.addEventListener('click', function() {
      pausarArchivo();
    });
  
    btnStop.addEventListener('click', function() {
      detenerArchivo();
    });
  
    function reproducirArchivo() {
      const archivo = archivoInput.files[0];
      if (archivo) {
        const lector = new FileReader();
        lector.onload = function(e) {
          const contenido = e.target.result;
          mensaje = new SpeechSynthesisUtterance(contenido);
          mensaje.lang = 'es-ES';
          window.speechSynthesis.speak(mensaje);
        };
        lector.readAsText(archivo);
      }
    }
  
    function pausarArchivo() {
      if (mensaje) {
        window.speechSynthesis.pause();
      }
    }
  
    function detenerArchivo() {
      if (mensaje) {
        window.speechSynthesis.cancel();
        mensaje = null;
      }
    }
  });
  