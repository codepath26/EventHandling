let form = document.getElementById("addForm")

let additem  = document.getElementById("item")
let items  = document.getElementById("items")
form.addEventListener("submit", additemfn);
items.addEventListener('click',itemclick)
function additemfn(e) {
  e.preventDefault();
 let newitem = document.createElement("li")
 newitem.className = "list-group-item"
 let text = document.createTextNode(  additem.value);
 let deletbtn = document.createElement('button');
 deletbtn.classList ="btn btn-danger btn-sm float-end delete "
 deletbtn.innerText = "X";
 newitem.appendChild(text)
 newitem.appendChild(deletbtn)
 items.appendChild(newitem)
 
}
//deleteItem Function called

function itemclick(e){
  if(e.target.classList.contains('delete')){
     let li = e.target.parentElement;
     console.log(li);
     items.removeChild(li)
  }


}