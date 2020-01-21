$(document).ready(function () {
  var listItems = []
  var printOut = $("#list1")

  $("#submitButton").click(function(event){
  event.preventDefault();
  var groceryItem = $("input#groceryItem").val();
  listItems.push(groceryItem);
  listItems.sort();
  printOut.empty();

  listItems.forEach(function(item){
    $("#list1").append("<li> " + item + "</li>")
  })

  })
});
