window.onload = function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detectar iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "https://apps.apple.com/ar/app/pfizer-proactive-ar/id1166559115";
  } 
  // Detectar Android
  else if (/android/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.pfizer.proactivear&hl=en";
  } 
  // Cualquier otro SO
  else {
    window.location.href = "https://www.portalpfizer.com.ar";
  }
};
