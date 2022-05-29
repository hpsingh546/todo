let input=document.querySelector(".input-task");
let list=document.querySelector(".list-container");
input.addEventListener("keypress",addList);
function addList(e){
  if(e.key=="Enter"){
      let task=input.value ;
            if(task==""){
              alert("you dont have enter any value"); 
              return;
            }
      input.value="";
      let li=document.createElement("li");
      li.innerText=task;
      list.appendChild(li);
      li.addEventListener("dblclick",deletetask);
      console.log(task);
  }
}
function deletetask(e){
  e.currentTarget.remove();
  console.log(e.currentTarget)
}