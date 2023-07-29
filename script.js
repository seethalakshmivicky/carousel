/*let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  //setTimeout(displayImages, 2000); 
}*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  const slide = document.getElementsByClassName("myslide");
  if (n > slide.length)
	  {
		  slideIndex = 1
	  }
  if (n < 1)
	  { 
          slideIndex =slide.length
	  }
  for (i = 0; i < slide.length; i++)
	  {
          slide[i].style.display = "none";
      }
       slide[slideIndex-1].style.display = "block";
}
