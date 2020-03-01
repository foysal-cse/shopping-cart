var removeItems = document.getElementsByClassName("remove-item");

Array.from(removeItems).map((el,index) => {
        el.addEventListener('click', ()=> {
            var quantity = document.getElementById(`quantity-${index}`).value;
            console.log(quantity);
            el.parentElement.parentElement.parentElement.style.display = "none";
    })
})



var increment = document.getElementsByClassName("fa-plus");

Array.from(increment).map((el,index) => {
    el.parentElement.addEventListener('click', ()=> {
        var quantity = document.getElementById(`quantity-${index}`).value;
        newQuantity = parseInt(quantity) + 1;
        document.getElementById(`quantity-${index}`).value = newQuantity;
        quantity = newQuantity
})
})


var decrement = document.getElementsByClassName("fa-minus");

Array.from(decrement).map((el,index) => {
    el.parentElement.addEventListener('click', ()=> {
        var quantity = document.getElementById(`quantity-${index}`).value;
        newQuantity = parseInt(quantity) - (parseInt(quantity) > 0? 1 : 0);
        document.getElementById(`quantity-${index}`).value = newQuantity;
        quantity = newQuantity
});
})