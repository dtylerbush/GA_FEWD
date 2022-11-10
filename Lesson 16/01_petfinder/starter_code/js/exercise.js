function selectPet(petType){

    // Get the specific pet data set

    const thePet = petData[petType];

    console.log(thePet);

    // Set the title

document.querySelector('.petDisplayName').innerText = thePet['displayName'];

    // Empty the specification data
    let specs = "";

    // Add the space required, size, weight
    specs += "<dt>Weight</dt><dd>"+ thePet['weight'] +"</dd>";
    specs += "<dt>Size</dt><dd>"+ thePet['size'] +"</dd>";
    specs += "<dt>Space Required</dt><dd>"+ thePet['spaceRequired'] +"</dd>";

 
    // Add logic to add the trainability and lap size images
    if(thePet['trainability'] == true){
        specs += "<dt>Trainable</dt><dd><img src=\"./img/200px-Gnome-emblem-default.svg.png\" alt=\"Yes\" class=\"checkmark\"/></dd>"
    }
    if(thePet['fitsOnLap'] == true){
        specs += "<dt>Fits on Lap</dt><dd><img src=\"./img/200px-Gnome-emblem-default.svg.png\" alt=\"Yes\" class=\"checkmark\"/></dd>";
    }else{
    specs += "<dt>Fits on Lap</dt><dd><img src=\"./img/200px-Gnome-emblem-unreadable.svg.png\" alt=\"No\" class=\"checkmark\"/></dd>";
}

    // Add the foods (may require loop)
    specs += "<dt>Foods</dt><dd><ul>";

    for(let i=0; i<thePet['foods'].length; i++ ){
        specs += "<li>" + thePet.foods[i] + "</li>"
    }

    specs += "</ul></dd>";


    console.log(specs);
    document.querySelector('.petsDataSpecs').innerHTML = specs;

    // Update the images

    // Set the big picture to the first picture
    document.querySelector('.photoHaus .photoLarge').setAttribute('src',thePet.images[0]['img']);
    document.querySelector('.photoHaus .photoLarge').setAttribute('alt',thePet.images[0]['alt']);

    //  Set the thumnails Images
    let petThumbs = "";

    // Loop through images

    for(let i=0; i<thePet['images'].length; i++ ){
        let theImageObject = thePet['images'][i];

        petThumbs = petThumbs + '<a href="' + theImageObject['img'] + '"><img class="photoThumb" alt="' + theImageObject['alt'] + '" src="' + theImageObject['thumb'] + '"/></a>';
    }

    document.querySelector('.thumbHaus').innerHTML = petThumbs;
    // Create new thumnnail string

    


    // Add a click event to thumbnails
    let thumbSet = document.querySelectorAll('.thumbHaus > a');

    for(let i=0; i < thumbSet.length; i++){
        thumbSet[i].addEventListener('click', function(e){
            e.preventDefault();

            let alt = this.querySelector('img').getAttribute('href');
            let imgSrc = this.getAttribute('href');

            document.querySelector('.photoHaus .photoLarge').setAttribute('src',imgSrc);
            document.querySelector('.photoHaus .photoLarge').setAttribute('alt',alt);

        })
    }

    // Get the link value of the thumb I clicked on and set the big picture
  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        let selectedPet = this.value;
        console.log("I selected" + selectedPet);
        selectPet(selectedPet);
    });
});






