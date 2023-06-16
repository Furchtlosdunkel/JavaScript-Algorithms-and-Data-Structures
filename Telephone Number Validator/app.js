
//! TR VERSİYON
// function telNoKonturol(telNo) {
//     var pattern = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}\-\d{2}\-\d{2}$/;
//     return pattern.test(telNo);
//   }
  
//   // Örnek kullanım
//   var numara= "+90 (123) 456-78-90";
//   if (telNoKonturol(numara)) {
//     console.log("Geçerli telefon numarası.");
//   } else {
//     console.log("Geçersiz telefon numarası.");
//   }
  

  //! US VERSİYON

  function validateUSPhoneNumber(number) {
    var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
    return pattern.test(number);
  }
  
  // Örnek kullanım
  var phoneNumber = "1 (123) 456-7890";
  if (validateUSPhoneNumber(phoneNumber)) {
    console.log("Valid phone number.");
  } else {
    console.log("Invalid phone number.");
  }
  