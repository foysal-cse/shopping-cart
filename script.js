const basePrice = [
  parseInt(document.getElementById("price-0").innerText),
  parseInt(document.getElementById("price-1").innerText)
];

var currentPrice = [...basePrice];

function totalPriceUpdate() {
  var subTotal = currentPrice.reduce((a, b) => a + b, 0);
  var tax = (subTotal * 15) / 100;
  var total = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}

function itemUpdate(index, type) {
  var quantity = document.getElementById(`quantity-${index}`).value;
  var newQuantity;
  if (type === "inc") {
    newQuantity = parseInt(quantity) + 1;
  } else if (type === "dec") {
    newQuantity = parseInt(quantity) - (parseInt(quantity) > 0 ? 1 : 0);
  } else {
    newQuantity = 0;
  }
  currentPrice[index] = basePrice[index] * newQuantity;
  document.getElementById(`price-${index}`).innerText = currentPrice[index];
  document.getElementById(`quantity-${index}`).value = newQuantity;
  quantity = newQuantity;
  totalPriceUpdate();
}

totalPriceUpdate();

const increment = document.getElementsByClassName("fa-plus");
Array.from(increment).map((el, index) => {
  el.parentElement.addEventListener("click", () => {
    itemUpdate(index, "inc");
  });
});

const decrement = document.getElementsByClassName("fa-minus");
Array.from(decrement).map((el, index) => {
  el.parentElement.addEventListener("click", () => {
    itemUpdate(index, "dec");
  });
});

const removeItems = document.getElementsByClassName("remove-item");
Array.from(removeItems).map((el, index) => {
  el.addEventListener("click", () => {
    itemUpdate(index, "rmv");
    el.parentElement.parentElement.parentElement.style.display = "none";
  });
});



const checkOut = document.getElementById("check-out-btn");
checkOut.addEventListener("click", ()=>{
    subTotal = document.getElementById("sub-total").innerText;
    tax = document.getElementById("tax").innerText;
    total = document.getElementById("total").innerText;
    if(total == 0){
        alert("You have nothing to order!");
    } else{
        alert("Thanks for ordering!!!");
    }
});




