let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

// let sidebar = document.querySelector(".sidebar");
// let sidebarBtn = document.querySelector(".checkbox").checked;
// console.log(sidebarBtn);
// sidebarBtn.addEventListener("click", ()=>{
//   sidebar.classList.toggle("close");
// });
function check(){
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".checkbox").checked
  if (sidebarBtn){
    sidebar.classList.toggle("close");
  }else{
    sidebar.classList.toggle("close");
  }
}

function tick(){
  let sidebarBtn = document.querySelector(".checkbox").checked
  if (sidebarBtn){
    document.getElementById("checkbox").checked=false;
    check()
  }else{
    document.getElementById("checkbox").checked=true;
    check()
  }
}


const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click" , () =>{
  body.classList.toggle("dark");
  
  if(body.classList.contains("dark")){
      modeText.innerText = "Light mode";
  }else{
      modeText.innerText = "Dark mode";
      
  }
});
