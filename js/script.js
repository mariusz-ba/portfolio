(function(){
  // Scrolling to anchor
  const links = document.querySelectorAll('[data-js=menu-item]')
  console.log(links);
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      
      const node = document.getElementById(event.target.hash.slice(1));

      window.scroll({
        top: node.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    })
  })

  // On scroll fade
  const elements = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', event => {
    const offset = window.scrollY;
    // If offset is greater than position of element + height of the screen
    // remove fade-in class.
    elements.forEach(element => {
      if(offset + window.innerHeight >= element.offsetTop) {
        element.classList.remove('fade-in');
      }
    })
  })
}())