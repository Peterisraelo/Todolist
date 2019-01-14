//Obtaining appropriate date format
var d= new Date();
document.getElementById("todaytop").innerHTML += " " + d.getDate() +""+((d.getMonth())-1) + "-"+d.getFullYear();

//Adding new item to to do list
var put= document.createElement("input");
var li = document.createElement("li");

function addnewtask(){
    var txt = document.getElementById("additem").value;
    var ul = document.getElementById("MyList");
    var li = document.createElement("li");
    //checkbox changes
    var put= document.createElement("input");
    put.className="check"
    put.type="checkbox";
    // li.appendChild(put);
    // put.onclick=FinishedTask();
    //checkbox changes
    li.appendChild(document.createTextNode(txt));
    ul.appendChild(li);
    li.appendChild(put);
    put.onclick= FinishedTask();
    document.getElementById("additem").value="";
    li.onclick= FinishedTask();
}
document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addnewtask();
    }
  }

  function FinishedTask(){
      put.className="checked";
      li.className="done";

  }