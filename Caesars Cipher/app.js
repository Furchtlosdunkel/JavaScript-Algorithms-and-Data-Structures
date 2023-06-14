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
