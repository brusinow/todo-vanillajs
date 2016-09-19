console.log("js loaded!");

var todos = ["thing 1", "thing 2", "thing 3"];




  for (var i = 0 ; i < todos.length; i++){
    console.log(todos[i]);
    var list = document.querySelector("#todoList");
    list.innerHTML += '<li><button class="remove">X</button>'+ todos[i] +'</li>';  
  }   


var remove = document.querySelectorAll(".remove");
for (var i = 0; i < remove.length; i++){
  remove[i].onclick = function(){
    console.log(this.parentNode);
    this.parentNode.classList.add("removed");
  }
}
