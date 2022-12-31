/* Binance */
let ws_binance = new WebSocket("wss://stream.binance.com:9443/ws");
let div_binance = document.getElementById("price_binance");

let last_price_binance = null;

ws_binance.onopen = function () {
  ws_binance.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params: ["btcusdt@trade"],
      id: 1
    })
  );
};

ws_binance.onmessage = function (event) {
  let current_price_binance = JSON.parse(event.data);
  let price_binance = parseFloat(current_price_binance.p).toFixed(2);
  div_binance.innerText = price_binance;

  if (price_binance < last_price_binance && isNaN(price_binance) == false) {
    div_binance.innerText = "↓" + price_binance;
    div_binance.style.color = "red";
  } else if (
    price_binance > last_price_binance &&
    isNaN(price_binance) == false
  ) {
    div_binance.innerText = "↑" + price_binance;
    div_binance.style.color = "green";
  } else if (
    price_binance == last_price_binance &&
    isNaN(price_binance) == false
  ) {
    div_binance.innerText = "=" + price_binance;
    div_binance.style.color = "black";
  }

  last_price_binance = price_binance;
};

/* Bitstamp */
let ws_bitstamp = new WebSocket("wss://ws.bitstamp.net");
let div_bitstamp = document.getElementById("price_bitstamp");

let last_price_bitstamp = null;

ws_bitstamp.onopen = function () {
  ws_bitstamp.send(
    JSON.stringify({
      event: "bts:subscribe",
      data: { channel: "live_trades_btcusd" }
    })
  );
};

ws_bitstamp.onmessage = function (event) {
  let current_price_bitstamp = JSON.parse(event.data);
  let price_bitstamp = parseFloat(current_price_bitstamp.data.price).toFixed(2);

  if (price_bitstamp < last_price_bitstamp && isNaN(price_bitstamp) == false) {
    div_bitstamp.innerText = "↓" + price_bitstamp;
    div_bitstamp.style.color = "red";
  } else if (
    price_bitstamp > last_price_bitstamp &&
    isNaN(price_bitstamp) == false
  ) {
    div_bitstamp.innerText = "↑" + price_bitstamp;
    div_bitstamp.style.color = "green";
  } else if (
    price_bitstamp == last_price_bitstamp &&
    isNaN(price_bitstamp) == false
  ) {
    div_bitstamp.innerText = "=" + price_bitstamp;
    div_bitstamp.style.color = "black";
  }

  last_price_bitstamp = price_bitstamp;
};

/* Coinbase */
let ws_coinbase = new WebSocket("wss://ws-feed.pro.coinbase.com");
let div_coinbase = document.getElementById("price_coinbase");

let last_price_coinbase = null;

ws_coinbase.onopen = function () {
  ws_coinbase.send(
    JSON.stringify({
      type: "subscribe",
      channels: [{ name: "ticker", product_ids: ["BTC-USD"] }]
    })
  );
};

ws_coinbase.onmessage = function (event) {
  let current_price_coinbase = JSON.parse(event.data);
  let price_coinbase = parseFloat(current_price_coinbase.price).toFixed(2);
  div_coinbase.innerText = price_coinbase;

  if (price_coinbase < last_price_coinbase && isNaN(price_coinbase) == false) {
    div_coinbase.innerText = "↓" + price_coinbase;
    div_coinbase.style.color = "red";
  } else if (
    price_coinbase > last_price_coinbase &&
    isNaN(price_coinbase) == false
  ) {
    div_coinbase.innerText = "↑" + price_coinbase;
    div_coinbase.style.color = "green";
  } else if (
    price_coinbase == last_price_coinbase &&
    isNaN(price_coinbase) == false
  ) {
    div_coinbase.innerText = "=" + price_coinbase;
    div_coinbase.style.color = "black";
  }

  last_price_coinbase = price_coinbase;
};

/* Gemini */
let ws_gemini = new WebSocket("wss://api.gemini.com/v2/marketdata");
let div_gemini = document.getElementById("price_gemini");

let last_price_gemini = null;

ws_gemini.onopen = function () {
  ws_gemini.send(
    JSON.stringify({
      type: "subscribe",
      subscriptions: [{ name: "l2", symbols: ["BTCUSD"] }]
    })
  );
};

ws_gemini.onmessage = function (event) {
  let current_price_gemini = JSON.parse(event.data);
  let price_gemini = parseFloat(current_price_gemini.price).toFixed(2);

  if (price_gemini < last_price_gemini && isNaN(price_gemini) == false) {
    div_gemini.innerText = "↓" + price_gemini;
    div_gemini.style.color = "red";
  } else if (price_gemini > last_price_gemini && isNaN(price_gemini) == false) {
    div_gemini.innerText = "↑" + price_gemini;
    div_gemini.style.color = "green";
  } else if (
    price_gemini == last_price_gemini &&
    isNaN(price_gemini) == false
  ) {
    div_gemini.innerText = "=" + price_gemini;
    div_gemini.style.color = "black";
  }

  last_price_gemini = price_gemini;
};

/* Bitfinex */
let ws_bitfinex = new WebSocket("wss://api.bitfinex.com/ws/2");
let div_bitfinex = document.getElementById("price_bitfinex");

let last_price_bitfinex = null;

ws_bitfinex.onopen = function () {
  ws_bitfinex.send(
    JSON.stringify({
      event: "subscribe",
      channel: "trades",
      symbol: "tBTCUSD"
    })
  );
};

ws_bitfinex.onmessage = function (event) {
  let current_price_bitfinex = JSON.parse(event.data);
  let current_price_bitfinex_array = current_price_bitfinex[2];
  let current_price_bitfinex_string = "" + current_price_bitfinex_array;
  let current_price_bitfinex_string_split = current_price_bitfinex_string.split(
    ","
  );
  let price_bitfinex = parseFloat(
    current_price_bitfinex_string_split[3]
  ).toFixed(2);

  if (price_bitfinex < last_price_bitfinex && isNaN(price_bitfinex) == false) {
    div_bitfinex.innerText = "↓" + price_bitfinex;
    div_bitfinex.style.color = "red";
  } else if (
    price_bitfinex > last_price_bitfinex &&
    isNaN(price_bitfinex) == false
  ) {
    div_bitfinex.innerText = "↑" + price_bitfinex;
    div_bitfinex.style.color = "green";
  } else if (
    price_bitfinex == last_price_bitfinex &&
    isNaN(price_bitfinex) == false
  ) {
    div_bitfinex.innerText = "=" + price_bitfinex;
    div_bitfinex.style.color = "black";
  }

  last_price_bitfinex = price_bitfinex;
};

/* Kraken */
let ws_kraken = new WebSocket("wss://ws.kraken.com/");
let div_kraken = document.getElementById("price_kraken");

let last_price_kraken = null;

ws_kraken.onopen = function () {
  ws_kraken.send(
    JSON.stringify({
      event: "subscribe",
      pair: ["BTC/USD"],
      subscription: {
        name: "trade"
      }
    })
  );
};

ws_kraken.onmessage = function (event) {
  let current_price_kraken = JSON.parse(event.data);
  let current_price_kraken_array = current_price_kraken[1];
  let current_price_kraken_string = "" + current_price_kraken_array;
  let current_price_kraken_string_split = current_price_kraken_string.split(
    ","
  );
  let price_kraken = parseFloat(current_price_kraken_string_split[0]).toFixed(
    2
  );

  if (price_kraken < last_price_kraken && isNaN(price_kraken) == false) {
    div_kraken.innerText = "↓" + price_kraken;
    div_kraken.style.color = "red";
  } else if (price_kraken > last_price_kraken && isNaN(price_kraken) == false) {
    div_kraken.innerText = "↑" + price_kraken;
    div_kraken.style.color = "green";
  } else if (
    price_kraken == last_price_kraken &&
    isNaN(price_kraken) == false
  ) {
    div_kraken.innerText = "=" + price_kraken;
    div_kraken.style.color = "black";
  }

  last_price_kraken = price_kraken;
};