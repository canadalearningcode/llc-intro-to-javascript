$(document).ready(function(){

    /* Using jQuery to reference the elements by class, 
      adding a click event and passing the function on click */
    
    // Referencing the button with the 'add' class
    $(".add").click(function(){
        //call the appropriate function
        addItem();
    });

    $(".removeItem").click(function(){
        removeItem();
    });

     $(".checkout").click(function(){
        checkout();
    });


    // Start quantity at 0 
    var quantity = 0; 

    // JavaScript functions
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

});//closes the document.ready


  

