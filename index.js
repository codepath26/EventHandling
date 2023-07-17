let form = document.getElementById("addForm")
let filter = document.getElementById("filter")
filter.addEventListener('keyup',filteritem)
let discription = document.getElementById("discription")

let additem  = document.getElementById("item")
let items  = document.getElementById("items")
form.addEventListener("submit", additemfn);
items.addEventListener('click',itemclick)
function additemfn(e) {
  e.preventDefault();
 let newitem = document.createElement("li")
 newitem.className = "list-group-item"
 let text = document.createTextNode(  additem.value);
 let text1 = document.createTextNode(  discription.value);
 let deletbtn = document.createElement('button');
 deletbtn.classList ="btn btn-danger btn-sm float-end delete "
 deletbtn.innerText = "X";
 let editbtn = document.createElement('button');
 editbtn.classList ="btn btn-danger btn-sm float-end edit mx-2"
 editbtn.innerText = "edit";
 newitem.appendChild(text)
 newitem.appendChild(text1)
 newitem.appendChild(deletbtn)
 newitem.appendChild(editbtn)
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
  function filteritem(e){
  let text = e.target.value.toLowerCase();
  console.log(text)
  let listitems = document.getElementsByTagName("li");
  Array.from(listitems).forEach((item)=>{
     let itemname = item.firstChild.textContent
    let dis = item.childNodes[1].textContent
     if(itemname.toLowerCase().indexOf(text) != -1  || dis.toLowerCase().indexOf(text) != -1    ){
      item.style.display = "block";
    }else{
       item.style.display = "none";

     }
  })
}



// this method is only use for substring so that all the string retur but if you find diffrent diff palce element then its will give -1;
// let s = "rp";
// let c = "parththakorp"
// console.log(c.toLowerCase().indexOf(s))