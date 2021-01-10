var OrderNew = [];
function Pizza(pizzaSize, pizzaCrust, pizzaTopping, pizzaNumber) {
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.pizzaTopping = pizzaTopping;
    this.pizzaNumber = pizzaNumber;
}
var pizzaPrice= [1100, 550, 350]
Pizza.prototype.totalPrice = function() {
    return (this.pizzaCrust + this.pizzaTopping + this.pizzaSize) * this.pizzaNumber
};
Pizza.prototype.pizzaSz = function () {
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

Pizza.prototype.pizzaCr = function () {
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

Pizza.prototype.pizzaTp =function(){
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
    
    var PizzaSize = parseInt( $("#size").val());
    var PizzaCrust = parseInt( $("#crust").val());
    var PizzaTopping =parseInt( $("#topping").val());
    var PizzaNumber =parseInt( $("#number").val());
    var newPizzae = new Pizza(PizzaSize, PizzaCrust, PizzaTopping, PizzaNumber); 
    
    console.log(newPizzae)
    
    OrderNew.push(newPizzae);
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
    
    $("#ordersTaken").append("<tr>" + '<td scope="orderCalculation">' + 
    newPizzae.pizzaSz () + newPizzae.pizzaSize + "</td>" + "<td>" +
    newPizzae.pizzaCr () + newPizzae.pizzaCrust + "</td>" + "<td>" +
    newPizzae.pizzaTp () + newPizzae.pizzaTopping + "</td>" + "<td>" + 
    newPizzae.PizzaNumber + "</td>" + "<td>" +
    newPizzae.totalPrice() + "</td>" + "</tr>"
    );

    $("#ordersTaken").append("");
    if (OrderNew.length > 0) {
        $("#form-heading").empty();
        $("#form-heading").append("Make A New Order");
    }

    $("#totalAmount").fadeIn();
    $("#Checkout").fadeIn();
    $("#orderClass").fadeIn();
    $("#totalAmount").empty();
    $("#totalAmount").append(totalAmount);
    $("#totalAmount").show();
  });

  $("#Checkout").click(function () {
  $(".checkout-info").show();
  });

  $("#checkoutForm").submit(function (event) {
  event.preventDefault();
  var name = $("#name").val();
  var deliveryOption = $("#OptionDelivery").val();
  NameOfCustomer = name;
  $("#name").val("");
  $("#OptionDelivery").val("");
  $(".checkout-info").hide();
  $("#Checkout").hide();
  $("#totalAmount").empty();
  
  if (deliveryOption === "deliver") {
    $(".deliveryLocation").show();
    $(".deliveryCost").show();
    $("#totalAmount").empty();
    $("#delivery-cost").append(250);
    totalAmount += 250;
    $("#totalAmount").empty();
    $("#totalAmount").empty();
  $("#totalAmount").append(totalAmount);
  $(".TotalAmount").show();
  } 
  else {
    alert(+"Dear Customer, " + ": Your total bill is Ksh. " + totalAmount + ".Collect your order in the next 20 minutes." + " Your Tag Name is " + NameOfCustomer);
  }
  });

  $("#locationForm").submit(function (event) {
  event.preventDefault();
  var locationEntered = $("location").val();
  var mobileEntered = $("#mobilenumb").val();
  location = locationEntered;
  mobileNumb = mobileEntered;
  $("#Checkout").hide();
  $(".deliveryLocation").hide();
  $("#totalAmount").empty();
  $("#totalAmount").append(totalAmount);
  $(".TotalAmount").show();
  alert("Dear Customer"  + ": Your new total bill is Ksh. " + totalAmount + ". Your order will be delivered in the next one hour." + " Payment on delivery!!.");
  });