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
}())