function convertToRoman(num) {
  var romanNumeral = "";
  var decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (var i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      romanNumeral += romanSymbols[i];
      num -= decimalValues[i];
    }
  }

  return romanNumeral;
}

// Örnek kullanım
var number = 15;
var romanNumber = convertToRoman(number);
console.log(romanNumber); // "XV" çıktısını verir

//! TR VERSİYON
// function romanNumeralCevir(num) {
//     var romaRakami = "";
//     var ondalikDegerler = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     var romaSembolleri = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
//     for (var i = 0; i < ondalikDegerler.length; i++) {
//       while (num >= ondalikDegerler[i]) {
//         romaRakami += romaSembolleri[i];
//         num -= ondalikDegerler[i];
//       }
//     }
  
//     return romaRakami;
//   }
  
//   // Örnek kullanım
//   var sayi = 543;
//   var romaRakami = romanNumeralCevir(sayi);
//   console.log(romaRakami); // "DXLIII" çıktısını verir

