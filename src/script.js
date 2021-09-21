function Converter() {
  let elementValue = document.getElementById("valor");
  let valor = elementValue.value;
  let valorNumDollar = parseFloat(valor);

  let valorYen = valorNumDollar * 109.33; //  date: 2021/09/15
  console.log(valorYen);

  let elementValorConverted = document.getElementById("valorConvertido");
  let valorConverted = "The result in Japanese Yen is ¥ " + valorYen;
  elementValorConverted.innerHTML = valorConverted;

  let valueInBitcoin = valorNumDollar * 0.0000208283; // 2021/09/16
  let valueInBitcoinFixed = valueInBitcoin.toFixed(10);
  let elementInBitcoin = document.getElementById("valorInBitcoin");
  let valueConvertedInBitCoin =
    "Also, the result in BitCoin is " + valueInBitcoinFixed + " BTC";
  elementInBitcoin.innerHTML = valueConvertedInBitCoin;
}

function kmForLightYears() {
  let elementKm = document.getElementById("kilometre");
  let kilometreValue = elementKm.value;
  let valueKm = parseInt(kilometreValue);

  let valueLightYear = valueKm * 1.057e-13; //km to light-years
  console.log(valueLightYear);
  let valueLightYearFixed = valueLightYear.toFixed(2);
  let elementInLightYear = document.getElementById("resultOfLightYear");
  let valueConvertedInLightYear =
    "The result in Light-Years is " + valueLightYearFixed;
  elementInLightYear.innerHTML = valueConvertedInLightYear;
}
