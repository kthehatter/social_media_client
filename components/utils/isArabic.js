export default function isArabic(strInput) {
    var arregex = /[\u0600-\u06FF]/;
    if (arregex.test(strInput)) {
      return true;
    } else {
      return false;
    }
  }