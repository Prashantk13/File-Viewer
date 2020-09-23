// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    $('#headline').hide();
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  // DELETE FUNCTION
  
  function deleteModal1(){
  var result = confirm( "Do you want to delete this?" );
  if ( result ) {
    var imageone = document.getElementById('one');
    imageone.parentNode.removeChild(imageone);
    $('#name1').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }
  
  function deleteModal2(){
  var result = confirm( "Do you want to delete this?" );
  if ( result ) {
    var imagetwo = document.getElementById('two');
    imagetwo.parentNode.removeChild(imagetwo);
    $('#name2').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }

  function deleteModal3(){
    var result = confirm( "Do you want to delete this?" );
    if ( result ) {
    var imagethree = document.getElementById('three');
    imagethree.parentNode.removeChild(imagethree);
    $('#name3').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }

  function deleteModal4(){
    var result = confirm( "Do you want to delete this?" );
    if ( result ) {
    var imagefour = document.getElementById('four');
    imagefour.parentNode.removeChild(imagefour);
    $('#name4').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }

  function deleteModal5(){
    var result = confirm( "Do you want to delete this?" );
    if ( result ) {
    var imagefive = document.getElementById('five');
    imagefive.parentNode.removeChild(imagefive);
    $('#name5').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }
  
  function deleteModal6(){
    var result = confirm( "Do you want to delete this?" );
    if ( result ) {
    var imagesix = document.getElementById('six');
    imagesix.parentNode.removeChild(imagesix);
    $('#name6').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }

  function deleteModal7(){
    var result = confirm( "Do you want to delete this?" );
    if ( result ) {
    var imageseven = document.getElementById('seven');
    imageseven.parentNode.removeChild(imageseven);
    $('#name7').attr('alt', 'Deleted');
    return "error"; 
  } else {return "";}
  }