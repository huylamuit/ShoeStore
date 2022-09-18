var toggle = document.getElementsByClassName("toggle")
var display = document.getElementsByClassName("nav-tree")


console.log(toggle);



for(let i = 0; i < toggle.length; i++){
  toggle[i].addEventListener('click',()=>{

      toggle[i].classList.toggle("orange")
      if(display[i].style.display == "block")
        display[i].style.display = "none";
      else
        display[i].style.display="block";

  });
}

