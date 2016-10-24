var items = ["item-one", "item-two", "item-three"];
var list = [];

var printList = function(){
  list.sort();
  alert(list);
};

$(document).ready(function(event){
  $('button#submit').click(function(event){
    items.forEach(function(item){
      var userInput = $('input#' + item).val().toUpperCase();
      list.push(userInput);
    });

    printList();
    event.preventDefault();
  });

});
