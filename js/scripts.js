var OrderNew = [];
function Pizza(pizzaSize, pizzaCrust, pizzaTopping, pizzaNumber) {
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.pizzaTopping = pizzaTopping;
    this.pizzaNumber = pizzaNumber;
}
var pizzaPrice= [1100, 650, 350]
Pizza.prototype.totalPrice = function() {
    return (this.pizzaCrust + this.pizzaTopping + this.pizzaSize) * this.pizzaNumber
};
Pizza.prototype.pizzaSz = function () {
    if (this.pizzaSize == 1100) {
        return "Large "
    } 
    else if (this.pizzaSize == 650) {
        return "Medium "
    } 
    else if (this.pizzaSize == 350) {
        return "Small "
    }
}
Pizza.prototype.pizzaCr = function () {
    if (this.pizzaCrust == 200) {
        return "Crispy "
    } 
    else if (this.pizzaCrust == 250) {
        return "Stuffed "
    } 
    else if (this.pizzaCrust == 300) {
        return "Glutten Free "
    }
}
Pizza.prototype.pizzaTp =function(){
    if (this.pizzaTopping == 150){
        return "Beef "
    }
    else if (this.pizzaTopping == 170){
        return "Sausage "
    }
    else if ( this.pizzaTopping == 200){
        return"Chicken "
    }
}
$("#order").click(function (event) {
    
    var PizzaSize = parseInt( $("#size").val());
    var PizzaCrust = parseInt( $("#crust").val());
    var PizzaTopping =parseInt( $("#topping").val());
    var PizzaNumber =parseInt( $("#number").val());
    var newPizz = new Pizza(PizzaSize, PizzaCrust, PizzaTopping, PizzaNumber); 
    
    console.log(newPizz)
    OrderNew.push(newPizz);
    console.log(OrderNew)

    $("#size").val("");
    $("#crust").val("");
    $("#topping").val("");
    $("#number").val("");
     
    totalAmount = 0
    for (let i = 0; i < OrderNew.length; i++ ){
        totalAmount += OrderNew[i].totalPrice();
        console.log(totalAmount)
    }
    
    $("#ordersTaken").append("<tr>" + '<td scope="orderList">' + 
    newPizz.pizzaSz () + newPizz.pizzaSize + "</td>" + "<td>" +
    newPizz.pizzaCr () + newPizz.pizzaCrust + "</td>" + "<td>" +
    newPizz.pizzaTp () + newPizz.pizzaTopping + "</td>" + "<td>" + 
    newPizz.PizzaNumber + "</td>" + "<td>"
    );

    $("#ordersTaken").append("");
    if (OrderNew.length > 0) {
        $("#form-heading").append("Make A New Order");
    }
    $("#totalAmount").append(totalAmount);
  });

  $("#checkout").click(function () {
  });

  $("#deliveryForm").submit(function (event) {
  event.preventDefault();
  var name = $("#name").val();
  var deliveryOption = $("#deliveryOption").val();
  NameOfCustomer = name;
  $("#name").val("");
  $("#deliveryOption").val("");

  if (deliveryOption === "deliver") {
    $("#delivery-cost").append(250);
    totalAmount += 250;
    $("#totalAmount").append(totalAmount);
  } 
  else {
    alert(+ "Dear Customer, " + " your total bill is Ksh. " + totalAmount + " Collect your order in the next 20 minutes." + " Your Tag Name is " + NameOfCustomer);
  }
  });
  $("#locationForm").submit(function (event) {
  event.preventDefault();
  var locationEntered = $("location").val();
  var mobileEntered = $("#mobilenumb").val();
  location = locationEntered;
  mobileNumb = mobileEntered;
  $("#totalAmount").append(totalAmount);
  alert(+ "Dear Customer"  + ", your new total bill is Ksh. " + totalAmount + ". Your order will be delivered in the next one hour." + " Payment on delivery!!");
  });