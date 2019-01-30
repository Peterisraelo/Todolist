//Obtaining appropriate date format
var d= new Date();
document.getElementById("todaytop").innerHTML += " " + d.getDate() +""+((d.getMonth())-1) + "-"+d.getFullYear();

//Adding new item to to do list

function addnewtask(){
    var txt = document.getElementById("additem").value;
    var ul = document.getElementById("MyList");
    var li = document.createElement("li");

    //Creating close button
    var close = document.createElement("p");
    close.appendChild(document.createTextNode("x"));

    li.appendChild(document.createTextNode(txt));
    ul.appendChild(li);
    ul.appendChild(close);

    txt.value = "";
    (li).onclick = function(){
        li.style.textDecoration= "line-through";
        li.style.color= "grey";
    }
}
document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addnewtask();
    }
  }
