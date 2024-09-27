 let array=[];



 let todo=()=>{
 let first=document.getElementById("input");
 let all=document.getElementById("all");

 let items=first.value;
 
  array.push(items);
 
 localStorage.setItem('todo list',(array));
  console.log(array);  
  sessionStorage.setItem('todo list',(array));
  console.log(array);  


  // console.log(items);
  if(items.trim()!==""){
      taskDiv=document.createElement("div");
   all.appendChild(taskDiv);
   taskDiv.className="taskdiv";


   let checkBox=document.createElement("input");
   checkBox.type="checkbox";
   checkBox.className="check";
   checkBox.addEventListener("change",
    function(){
      if(checkBox.checked){
                                                                    //  item in the list
      list.style.textDecoration="line-through skyblue";
      taskDiv.style.backgroundColor="rgb(200, 200, 238)";
          
      }
      else{
      list.style.textDecoration="none";
      taskDiv.style.backgroundColor="white";


      }

    }
   )
   
   taskDiv.appendChild(checkBox);
 

    let list=document.createElement("div");
    list.className="list";
    list.innerText=items ;
    taskDiv.appendChild(list);
    console.log(list);


 

  let dButton1=document.createElement("button");
  dButton1.innerHTML=`<i class="fa-solid fa-trash-can" style="color: #111212; font-size:20px;"></i>`;
  dButton1.className="delete";
  taskDiv.appendChild(dButton1);
  dButton1.addEventListener("click",
    function(){
      if(checkBox.checked){
      all.removeChild(taskDiv);
      }
      else{
        alert ("you didn't complete");

      }
    }
    
  );



  }

  else{
  alert( "ENTER ANY VALUE")
  }
  first.value=" ";
}; 
