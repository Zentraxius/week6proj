import "bootstrap";
import $ from "jquery";
import "./styles.css";
import { CurrencyExchange } from "./businesslogic.js";
let userCurrencyAmount = $("#currencyAmount").val();

$(document).ready(function () {

  $(".convertJPY").click(function (event){
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        $('.exchangedResult').text(`You can convert your currency into ${response.conversion_rates.JPY * userCurrencyAmount} Japanese Yen.`)
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  })

  $(".convertCNY").click(function (event){
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        $('.exchangedResult').text(`You can convert your currency into ${response.conversion_rates.CNY * userCurrencyAmount} Chinese Renminbi.`)
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  })

  $(".convertRUB").click(function (event){
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        $('.exchangedResult').text(`You can convert your currency into ${response.conversion_rates.RUB * userCurrencyAmount} Russian Rubles.`)
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  })

  $(".convertGBP").click(function (event){
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        $('.exchangedResult').text(`You can convert your currency into ${response.conversion_rates.GBP * userCurrencyAmount} British Pounds Sterling.`)
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  })

  $(".convertEUR").click(function (event){
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        $('.exchangedResult').text(`You can convert your currency into ${response.conversion_rates.EUR * userCurrencyAmount} Europe Euros.`)
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  })

  $(".convertOther").click(function (event){
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();

      function getElements(response) {
        if (response) {
          $('.exchangedResult').text(`The API call returned the result ${response.status}, but your currency type could not be found, please try again or contact the developer.`)
        } else {
          $(".showResult").text(`There was an error handling your request.`);
          $(".showError").text(`Please check your inputs and try again!`);
        }
      }
    })

  $(".showRateTotal").click(function (event) {
    event.preventDefault();
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getWeatherByCity();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.exchangeRatesBox').show();
        $("#eurRate").text(`The exchange rate is ${response.conversion_rates.EUR} for Dollars to Euros, you could exchange $${userCurrencyAmount} for ${response.conversion_rates.EUR * userCurrencyAmount} Euros.`);
        $("#gbpRate").text(`The exchange rate is ${response.conversion_rates.GBP} for Dollars to Pounds, you could exchange $${userCurrencyAmount} for ${response.conversion_rates.GBP * userCurrencyAmount} Pounds.`);
        $("#rubRate").text(`The exchange rate is ${response.conversion_rates.RUB} for Dollars to Rubles, you could exchange $${userCurrencyAmount} for ${response.conversion_rates.RUB * userCurrencyAmount} Rubles.`);
        $("#cnyRate").text(`The exchange rate is ${response.conversion_rates.CNY} for Dollars to Renminbi, you could exchange $${userCurrencyAmount} for ${response.conversion_rates.CNY * userCurrencyAmount} Renminbi.`);
        $("#jpyRate").text(`The exchange rate is ${response.conversion_rates.JPY} for Dollars to Yen, you could exchange $${userCurrencyAmount} for ${response.conversion_rates.JPY * userCurrencyAmount} Yen.`);
        $(".showError").text(`For additional information on the API used please refer to the documentation at: ${response.documentation}.`);
      } else {
        $(".showResult").text(`There was an error handling your request.`);
        $(".showError").text(`Please check your inputs and try again!`);
      }
    }
  });
});