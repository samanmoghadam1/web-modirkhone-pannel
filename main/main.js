function darkLight() {
  document.querySelector("body").classList.toggle("dark-mode");
  const icon = document.querySelector(".navbar-item-icon");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
// main row col-3
function closeTab() {
  let scrollBar = document.querySelector(".main .row .col-3-main");
  let suppurtBar = document.querySelector(".main .row .filters-and-result");
  const elements = document.querySelectorAll(".accordion .row .support");
  const elementsIcon = document.querySelectorAll(".accordion .row .col-4"); 
  let accordingDiv = document.querySelector(".accordion") ; 
  if (accordingDiv.classList.contains("tab-close")) { 
    accordingDiv.classList.remove("tab-close") ;
    elementsIcon.forEach((icon) => {
      icon.classList.remove("col-4");
    });
    elements.forEach((element) => {
      element.classList.remove("col-8");
      element.style.display = "none";
    });

    scrollBar.classList.replace("col-3", "col-1");
    suppurtBar.classList.replace("col-9", "col-11");
  } else{
    // start 
    accordingDiv.classList.add("tab-close");
    elementsIcon.forEach((icon) => {
      icon.classList.add("col-4");
    });
    elements.forEach((element) => {
      element.classList.add("col-8");
      element.style.display = "block";
    });
    scrollBar.classList.replace( "col-1" , "col-3" );
    suppurtBar.classList.replace( "col-11" , "col-9"); 
    console.log(elements)
    // end
  }
}

//  accordion row col-8
