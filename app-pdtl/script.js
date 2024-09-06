window.onload = function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detectar iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "https://apps.apple.com/ar/app/pfizer-de-tu-lado/id6473001234";
  } 
  // Detectar Android
  else if (/android/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.osanapfizer.odspfizerapp";
  } 
  // Cualquier otro SO
  else {
    window.location.href = "http://pfizerdetulado.com.ar";
  }
};
