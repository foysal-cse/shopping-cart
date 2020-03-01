

var increment = document.getElementsByClassName("fa-plus");

Array.from(increment).map((el,index) => {
    el.addEventListener('click', ()=> {
        var quantity = document.getElementById(`quantity-${index}`).value;
        newQuantity = parseInt(quantity) + 1;
        document.getElementById(`quantity-${index}`).value = newQuantity;
        quantity = newQuantity
})
})