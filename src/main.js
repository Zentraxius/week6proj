import "bootstrap";
import $ from "jquery";
import "./styles.css";
import { CurrencyExchange } from "./businesslogic.js";

$(document).ready(function () {
  $(".submitForm").click(function (event) {
    event.preventDefault();

    let userCurrencyAmount = $("#currencyAmount").val();
    let userExchangeTarget = $("input:radio[name=exchangeTarget]:checked").val();
    console.log(userCurrencyAmount);
    console.log(userExchangeTarget);

    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.exchangeRatesBox').show();
        $("#eurRate").text(`The exchange rate is ${response.conversion_rates.EUR}`);
        $("#gbpRate").text(`The exchange rate is ${response.conversion_rates.GBP}`);
        $("#rubRate").text(`The exchange rate is ${response.conversion_rates.RUB}`);
        $("#cnyRate").text(`The exchange rate is ${response.conversion_rates.CNY}`);
        $("#jpyRate").text(`The exchange rate is ${response.conversion_rates.JPY}`);

        $(".showError").text(`For additional information on the API used please refer to the documentation at: ${response.documentation}.`);
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  });
});
