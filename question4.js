
const form = document.getElementById("orderBooks");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculatePrice();
});

function calculatePrice() {
  //unitary prices of books
  const priceOfWebProg = 19.99;
  const priceOfIntroPHP = 86.0;
  const priceOfAdvJQuery = 55.0;

  //input values
  const webProg = parseInt(document.getElementById("webProg").value);
  const introPHP = parseInt(document.getElementById("introPHP").value);
  const advJQuery = parseInt(document.getElementById("advJQuery").value);

  //check if inputs are empty
  if (isNaN(webProg) || isNaN(introPHP) || isNaN(advJQuery)) {
    alert("Please enter a valid integer for all inputs");
    return;
  }

  //cost of books
  const costOfWebProg = webProg * priceOfWebProg;
  const costIntroPHP = introPHP * priceOfIntroPHP;
  const costAdvJQuery = advJQuery * priceOfAdvJQuery;
  const totalPrice = costAdvJQuery + costIntroPHP + costOfWebProg;

  const outputWebProg = 'Basic Web Programming (Quantity = ' + webProg + '): $ '+ costOfWebProg + '<br>';
  const outputIntroPHP = 'Intro to PHP (Quantity = ' + introPHP + '): $ '+ costIntroPHP + '<br>';
  const outputAdvJQuery = 'Advanced JQuery (Quantity = ' + advJQuery + '): $ '+ costAdvJQuery + '<br>';
  const outputTotal = 'Final Cost: $' + totalPrice;

  const div = document.getElementById("output");
  div.innerHTML = '<b>'+ outputWebProg + outputIntroPHP + outputAdvJQuery + outputTotal + '</b>';
}