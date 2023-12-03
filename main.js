let navbar = document.getElementById("navbar");

let up=document.getElementById("up");

window.onscroll = function () {
  if (this.scrollY >= 50) {
    navbar.classList.add("navbarbg");
  } else {
    navbar.classList.remove("navbarbg");
  }

  if(this.scrollY>200){
    up.classList.add("show");
}else{
    up.classList.remove("show");
}
};



up.onclick=function(){
    window.scrollTo({
        top:0,
    });
}
