add = document.getElementById("add");
// itemJsonArray = [];
let getUpdate = ()=>
{
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log('updating items');

    itemJsonArray = [];
    if(localStorage.getItem('itemsJson') == null)
    {  
        itemJsonArray.push([tit , desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else
    {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit , desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

let update = ()=>{
  {
   
    if(localStorage.getItem('itemsJson') == null)
    {  
      itemJsonArray = [];
      // itemJsonArray.push([tit , desc]);
       localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else
    {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
    
    // populating the table
    
    tabelBody = document.getElementById('tabel-body')
    let str = "";
    mydate = new Date();
    minute = mydate.getMinutes();
    itemJsonArray.forEach((element,index) =>
    {
      // back tics ` it is present above tab ~ under this symbol
      str +=`
         <tr>
            <th scope="row">${index + 1}</th>
            <td>${mydate.getDate()}/${mydate.getMonth()}/${mydate.getFullYear()}(${mydate.getHours()}:${minute})</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick = "deleteit(${index})">Delete</button>
            </td>
         </tr>`;
    });
    tabelBody.innerHTML = str;
  }
} 

add.addEventListener("click", getUpdate);
update();

function deleteit( index )
{
  console.log('deleteted' , index)
  itemJsonArraystr = localStorage.getItem('itemsJson');
  itemJsonArray = JSON.parse(itemJsonArraystr);
  // deleting the element from array 
  itemJsonArray.splice(index , 1);
  localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
  update();
}

function clearAllstr1()
{
  // let ans = alert("Do you really want to delete all items");
  if(confirm("Do you really want to delete all items?"))
   {
     localStorage.clear();
     update();
   }  
}