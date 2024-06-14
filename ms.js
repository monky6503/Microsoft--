let topButton = document.querySelector(".go-top");

topButton.style.display = "none";
topButton.addEventListener("click",goTop)


window.onscroll = scrollFunction;


function scrollFunction(){
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    topButton.style.display = "block";
  }else{
    topButton.style.display = "none";
  }
};

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

