document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu')
	const nav = document.querySelector('.header__nav')

	burgerMenu.addEventListener('click', () => {
		nav.classList.toggle('active')
		burgerMenu.classList.toggle('active')
	})
})
