$(document).ready(function () {
  var listItems = []
  var printOut = $("#list1");
  var show = true;

  $("#submitButton").click(function (event) {
    event.preventDefault();

    //makes input array
    var allItems = $('input.item');

    //adds inputs to array
    allItems.each(function (index, item) {
      listItems.push(item.value);
    });

    // listItems.push(groceryItem);
    listItems.sort();
    printOut.empty();
    toggleShow();

  }); // END BUTTON CLICK

  $("#bringListBack").click(function (event) {
    toggleShow();
  });


  function toggleShow() {
    if (show) {
      $('#hide-me').toggle();
      $('#show-me').toggle();

      //Prints out items
      listItems.forEach(function (item) {
        $("#list1").append("<li> " + item + "</li>")
      })
    } else if (!show) {
      
        $('#show-me').toggle();
        $('#hide-me').toggle();
        $('#bringListBack').hide();

        console.log("button works")
    } else {
      console.log('error');
    }
  }

});
