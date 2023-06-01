const apiUrl = "https://api.coinbase.com";

function load() {
  const endpoint = "/v2/currencies";
  const url = `${apiUrl}${endpoint}`;

  const miPromise = fetch(url);
  console.log("Fetch!");

  miPromise
    .then((result) => {
      console.log(result);
      return result.json()
    })
    .then((response) => {
      console.log(response);
      // igualar data a la respuesta
      currencies = response.data;
      // redenrizar otra vez
      render();
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("End load function!");
}

load();
