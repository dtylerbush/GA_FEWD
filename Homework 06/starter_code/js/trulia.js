

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

  document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let navToggle = document.querySelectorAll(".trulia-nav > nav ul");

    for(let n=0;n<navToggle.length;n++){
      navToggle[n].classList.toggle('trulia-nav-mobilehide');
    }
  });

// Toggle the navigation






// Loop through all the cards

for (var i = 0; i < truliaCards.length; i++){

  truliaCards[i].addEventListener('click', function(){

    for (var t = 0; t < truliaCards.length; t++){
      truliaCards[t].classList.remove('trulia-featured-grid-item');
    }

    this.classList.add('trulia-featured-grid-item');
  })
}
    
  // Add a click listener on each card
      
      // Remove the featured class


      // Add the featured class on the one clicked on



  });  



