let tipPourcentage = 0 ; 

$("#bill-amount , #no-of-people ").keyup(function(){
    calculateTip(tipPourcentage	);
})
$("#bill-amount , #no-of-people ").click(function(){
    calculateTip(tipPourcentage	);
})
$(".tip-input").click(function() {
    tipPercantage = parseInt(this.value, 10) / 100; // saves the Tip-% value of the clicked button
    calculateTip(tipPercantage); // calls the custom function
  })

function tipPourcentageButton(test) {
    calculateTip(test);
}


function calculateTip(tipPourcentage){
    let billAmount = parseFloat($("#bill-amount").val(), 10);
    let tipTotal = (tipPourcentage * billAmount) / 100  ; 
    var numPeople = parseFloat($("#no-of-people").val(), 10);
    var billPerHead = billAmount / numPeople;
    var tipPerHead = tipTotal / numPeople;
    var totalPerHead = billPerHead + tipPerHead;



    if (billAmount > 0) { // validates the Bill-Input value
        if ($(".bill-input").hasClass("error")) { // revokes red error border style, if already present
          $(".bill-input").removeClass("error");
        }
        if (numPeople > 0 && Number.isInteger(numPeople)) { // checks whether num-of-people is an integer
          $(".error-text").text(""); // revokes error message, if already present
          if ($(".people-input").hasClass("error")) { // revokes red error border style, if already present
            $(".people-input").removeClass("error");
          }
          if (!isNaN(tipPourcentage)) { // checks whether the Tip-Percantage is a number or not
            $("#tip-per-head").text(parseFloat(tipPerHead.toFixed(2)));
            $("#tip-total").text(parseFloat(totalPerHead.toFixed(2)));
            $(".reset-button").removeClass("disabled");
          }
        } else if (numPeople > 0 && !Number.isInteger(numPeople)) { // when no-of-people is not an integer
          $(".people-input").addClass("error"); // adds error class to place red border of the input field
          $(".error-text").text("Must be an integer!"); // shows error message
        } else if (numPeople < 0) { // when no-of-people is negative
          $(".people-input").addClass("error"); // adds error class to place red border of the input field
          $(".error-text").text("Can't be negative!"); // shows error message
        } else { // when no-of-people is zero
          $(".people-input").addClass("error"); // adds error class to place red border of the input field
          $(".error-text").text("Can't be zero!"); // shows error message
        }
    
      } else if (billAmount < 0) {
        $(".bill-input").addClass("error");
        $("#tip-per-head").text("0.00");
        $("#tip-total").text("0.00");
      }

    
    console.log(billAmount,numPeople ,billPerHead ,tipPerHead,totalPerHead , tipTotal ) ; 
}
