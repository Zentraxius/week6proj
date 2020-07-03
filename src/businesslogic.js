// import $ from "jquery";

export class CurrencyExchange {
  async getWeatherByCity() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}


// // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD // Worked in postmates
// // Supported codes
// // CNY - China | Chinese Renminbi
// // EUR - Europe | Euro
// // GBP - United Kingdom | Pound Sterling
// // JPY - Japan | Japanese Yen
// // RUB -	Russia | Russian Ruble