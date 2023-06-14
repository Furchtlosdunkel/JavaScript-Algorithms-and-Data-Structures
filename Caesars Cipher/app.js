function caesarCipher(str, shift) {
    // Shift değeri 26'nın modunu alarak sınırlanır
    shift = shift % 26;
    
    // Şifrelenmiş metni tutmak için boş bir dize oluşturulur
    let encryptedStr = "";
    
    // Metindeki her bir karakter için döngü oluşturulur
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      // Eğer karakter bir harf ise
      if (char.match(/[a-z]/i)) {
        // Karakterin ASCII değeri alınır
        let charCode = str.charCodeAt(i);
        
        // Büyük harfler için ASCII değeri 65 ile başlar
        let base = char.match(/[A-Z]/) ? 65 : 97;
         
        // Şifreleme işlemi gerçekleştirilir
        let encryptedCharCode = (charCode - base + shift) % 26 + base;
        
        // Şifrelenmiş karakter elde edilir ve şifrelenmiş metne eklenir
        let encryptedChar = String.fromCharCode(encryptedCharCode);
        encryptedStr += encryptedChar;
      } else {
        // Karakter bir harf değilse olduğu gibi şifrelenmiş metne eklenir
        encryptedStr += char;
      }
    }
    
    // Şifrelenmiş metin döndürülür
    return encryptedStr;
  }
  
  // Kullanım örneği
  let plaintext = "Merhaba Dünya!";
  let shiftAmount = 3;
  let encryptedText = caesarCipher(plaintext, shiftAmount);
  console.log(encryptedText); // "Phukded Güqbd!"
  

//! TR  VERSİYON

// function caesarSifrele(metin, kaydirma) {
//     // Kaydırma değerini 26'ya mod alarak sınırlayalım
//     kaydirma = kaydirma % 26;
    
//     // Şifrelenmiş metni tutmak için boş bir dize oluşturalım
//     let sifreliMetin = "";
    
//     // Metindeki her bir karakter için döngü oluşturalım
//     for (let i = 0; i < metin.length; i++) {
//       let karakter = metin[i];
      
//       // Eğer karakter bir harfse
//       if (karakter.match(/[a-z]/i)) {
//         // Karakterin ASCII değerini alalım
//         let karakterKodu = metin.charCodeAt(i);
        
//         // Büyük harfler için ASCII değeri 65 ile başlar
//         let base = karakter.match(/[A-Z]/) ? 65 : 97;
        
//         // Şifreleme işlemini gerçekleştirelim
//         let sifreliKarakterKodu = (karakterKodu - base + kaydirma) % 26 + base;
        
//         // Şifrelenmiş karakteri elde edelim ve şifreli metne ekleyelim
//         let sifreliKarakter = String.fromCharCode(sifreliKarakterKodu);
//         sifreliMetin += sifreliKarakter;
//       } else {
//         // Karakter bir harf değilse olduğu gibi şifreli metne ekleyelim
//         sifreliMetin += karakter;
//       }
//     }
    
//     // Şifreli metni döndürelim
//     return sifreliMetin;
//   }
  
//   // Kullanım örneği
//   let metin = "Merhaba, dünya!";
//   let kaydirmaMiktari = 3;
//   let sifreliMetin = caesarSifrele(metin, kaydirmaMiktari);
//   console.log(sifreliMetin); // "Phuherd, gxqwd!"
  

//! rot13
// function rot13(str) {
//     let result = "";
  
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       let charCode = str.charCodeAt(i);
  
//       if (char.match(/[a-z]/i)) {
//         if (charCode >= 65 && charCode <= 90) {
//           // Büyük harfler için
//           charCode = ((charCode - 65 + 13) % 26) + 65;
//         } else if (charCode >= 97 && charCode <= 122) {
//           // Küçük harfler için
//           charCode = ((charCode - 97 + 13) % 26) + 97;
//         }
//       }
  
//       result += String.fromCharCode(charCode);
//     }
  
//     return result;
//   }
  
//   // Kullanım örneği
//   let plaintext = "Merhaba, dünya!";
//   let encryptedText = rot13(plaintext);
//   console.log(encryptedText); // "Zreunon, qhlan!"
  