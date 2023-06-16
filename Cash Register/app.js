
 
const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  const kasa = {
    "PENNY": 100,
    "NICKEL": 50,
    "DIME": 20,
    "QUARTER": 10,
    "ONE": 5,
    "FIVE": 2,
    "TEN": 3,
    "TWENTY": 4,
    "ONE HUNDRED": 10
  };
  
  function checkCashRegister(fiyat, nakit) {
    const paraBirimleri = Object.keys(currencyUnit).reverse();
    let tutar = fiyat; // m. hesabı
    let odenen = nakit; // m. ödediği tutar
    let kalan = ""; // m. eksik tutarı 
    let paraustu = ""; // m ödenecek geri tutar
    let kasaMiktari = { ...kasa };
    let kasaParaustu = [];
    
    if (odenen > tutar) {
      paraustu += (odenen - tutar);
      console.log("Buyrun para üstünüz =", paraustu, "TL");
    } else if (odenen < tutar){
      kalan += (tutar - odenen);
      console.log(kalan, "TL ödemeniz gerekiyor efendim!");
    } else {
      console.log("İyi Günler Dileriz Efendim!");
    }
    
    for (let i = 0; i < paraBirimleri.length; i++) {
      const paraBirimi = paraBirimleri[i];
      const birimDegeri = currencyUnit[paraBirimi];
      let miktar = Math.floor(paraustu / birimDegeri);
      
      if (miktar > 0) {
        const toplamPara = birimDegeri * miktar;
        if (toplamPara <= kasaMiktari[paraBirimi]) {
          paraustu -= toplamPara;
          kasaMiktari[paraBirimi] -= toplamPara;
          kasaParaustu.push([paraBirimi, toplamPara]);
        } else {
          paraustu -= kasaMiktari[paraBirimi];
          kasaParaustu.push([paraBirimi, kasaMiktari[paraBirimi]]);
          kasaMiktari[paraBirimi] = 0;
        }
        paraustu = parseFloat(paraustu.toFixed(2));
      }
    }
    
    if (paraustu > 0) {
      console.log("Kasa yetersiz. Geri ödeme yapılamıyor!");
    } else {
      console.log("Kasa paraüstü:", kasaParaustu);
    }
  }
  
  const fiyat = 30; // Ürünün fiyatı
  const nakit = 235; // Müşterinin verdiği nakit miktarı
  
  const sonuc = checkCashRegister(fiyat, nakit);
  