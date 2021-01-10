var OrderNew = [];
function Pizza(pizzaSize,pizzaCrust,pizzaTopping, PizzaNumber) {
    this.pizzaSize= pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaTopping=pizzaTopping;
    this.PizzaNumber=PizzaNumber;
}
var pizzaPrice= [1100,550,350,]
Pizza.prototype.totalPrice = function(){
    return (this.pizzaCrust + this.pizzaTopping + this.pizzaSize) * this.PizzaNumber
};
Pizza.prototype.pizzaS = function () {
    if (this.pizzaSize == 1100) {
        return "Large"
    } 
    else if (this.pizzaSize == 550) {
        return "Medium"
    } 
    else if (this.pizzaSize == 350) {
        return "Small"
    }
}

Pizza.prototype.pizzaC = function () {
    if (this.pizzaCrust == 200) {
        return "Crispy"
    } 
    else if (this.pizzaCrust == 250) {
        return "Stuffed"
    } 
    else if (this.pizzaCrust == 300) {
        return "Glutten Free"
    }
}

Pizza.prototype.pizzaT =function(){
    if (this.pizzaTopping == 150){
        return "Beef"
    }
    else if (this.pizzaTopping == 170){
        return "Sausage"
    }
    else if ( this.pizzaTopping == 200){
        return"Chicken"
    }
}

$("#checkout").click(function (event) {
    
    var PizzaSize = parseInt( $(".sizey").val());
    var PizzaCrust = parseInt( $(".crusty").val());
    var PizzaTopping =parseInt( $(".toppings").val());
    var PizzaNumber =parseInt( $(".numberz").val());
    var newPizzae = new Pizza(PizzaSize, PizzaCrust, PizzaTopping, PizzaNumber); 
    
    console.log(newPizzae)
    
    OrderNew.push(newPizzae);
    console.log(OrderNew)

}