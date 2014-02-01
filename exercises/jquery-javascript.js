// 1. Add jQuery's document.ready function


    /* 2. Use jQuery to reference the elements by class, 
      add a click event and passing the corresponding function on the click */




    // Start quantity at 0 
    var quantity = 0; 

    // JavaScript functions, no need to changes these
    function addItem(){ 
      quantity = quantity + 1;
      refreshTotal();
    }

    function removeItem(){
      if ( quantity > 0 ) {
        quantity = quantity - 1; 
      } else {
        // do nothing
      }
      refreshTotal();
    }  

    function checkout() {
      if ( quantity <= 0 ) {
        alert( "Sorry, you don't have anything in your cart!" );
      } else {
        alert( "Thank you for your order!" );
      }
    } 

    function refreshTotal() {       
      // calculate the totalCost with a fixed price of $20.  
      var totalCost = quantity * 20;
      // then update the quantity text field
      document.getElementById('updateQuantity').value = quantity;
      // update the total cost text field
      document.getElementById('updateTotal').value = "$" + totalCost;
    }


  

