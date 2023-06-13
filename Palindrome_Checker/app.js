function palindrome(str) {
    var preparedStr = str.toLowerCase().replace(/[\W_]/g, '');
    var reversedStr = preparedStr.split('').reverse().join('');
    return preparedStr === reversedStr;
  }
  
  console.log(palindrome("Eye"));  // true
  

  //! TR VERSİYON
//   function palindromKontrol(dizi) {
//     var hazirlananDizi = dizi.toLowerCase().replace(/[\W_]/g, '');
//     var tersCevrilmisDizi = hazirlananDizi.split('').reverse().join('');
//     return hazirlananDizi === tersCevrilmisDizi;
//   }
  
//   console.log(palindromKontrol("eye"));  // true
  