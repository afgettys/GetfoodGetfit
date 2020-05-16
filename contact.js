const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('top-bar-right')[0];
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function sConsole(event) {
    event.preventDefault();
    var data = document.getElementById("firstname");
    console.log(data.value);
    
  }