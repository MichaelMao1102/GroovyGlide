  // Get the image element
  const img = document.querySelector('#clickImage');
  
  // Change image on mouse enter
  img.addEventListener('mouseenter', () => {
    img.src = 'statics/images/click-here.png'; 
  });

  //  Restore original image on mouse leave
  img.addEventListener('mouseleave', () => {
    img.src = 'statics/images/click-here.gif'; 
  });