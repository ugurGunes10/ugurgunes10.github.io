

const profileNavbarCloseButton = document.querySelector("#profile-navbar-close-button")
const profileNavbarOpenButton = document.querySelector("#profile-navbar-open-button")
const profileNavbar = document.querySelector(".profile-navbar-container")

profileNavbarOpenButton.addEventListener('click', () => {
	profileNavbar.classList.add('active')
});

profileNavbarCloseButton.addEventListener('click', () => {
	profileNavbar.classList.remove('active')
});
   
    