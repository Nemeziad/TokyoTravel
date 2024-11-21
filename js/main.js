document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu')
	const nav = document.querySelector('.header__nav')

	burgerMenu.addEventListener('click', () => {
		nav.classList.toggle('active')
		burgerMenu.classList.toggle('active')
	})

	// Existing code
	const api = fetch('https://6731b0237aaf2a9aff119400.mockapi.io/api/v1/lol')
	const heroImage = document.querySelector('.hero__image img')
	const images = [
		'img/tokyo1.jpg',
		'img/imperator_house.jpg',
		'img/tokyo_museum.jpg',
	]
	let currentImageIndex = 0

	// Pagination setup
	const itemsPerPage = 6
	const cards = document.querySelectorAll('.card')
	const paginationContainer = document.createElement('div')
	paginationContainer.className = 'pagination'

	const totalPages = Math.ceil(cards.length / itemsPerPage)
	let currentPage = 1

	function showPage(page) {
		const start = (page - 1) * itemsPerPage
		const end = start + itemsPerPage

		cards.forEach((card, index) => {
			card.style.display = index >= start && index < end ? 'flex' : 'none'
		})
	}

	function createPagination() {
		paginationContainer.innerHTML = ''
		for (let i = 1; i <= totalPages; i++) {
			const button = document.createElement('button')
			button.innerText = i
			button.className = i === currentPage ? 'active' : ''
			button.addEventListener('click', () => {
				currentPage = i
				showPage(currentPage)
				updatePaginationButtons()
			})
			paginationContainer.appendChild(button)
		}
		document.querySelector('.cards').after(paginationContainer)
	}

	function updatePaginationButtons() {
		const buttons = paginationContainer.querySelectorAll('button')
		buttons.forEach((button, index) => {
			button.className = index + 1 === currentPage ? 'active' : ''
		})
	}

	// Initialize pagination
	showPage(currentPage)
	createPagination()

	// Rest of the existing code
	function changeImage() {
		heroImage.src = images[currentImageIndex]
		currentImageIndex = (currentImageIndex + 1) % images.length
	}

	changeImage()
	setInterval(changeImage, 3000)

	const searchInput = document.getElementById('search-input')
	searchInput.addEventListener('input', (e) => {
		;[...document.querySelectorAll('.card')].forEach((item) => {
			if (
				item.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			) {
				item.style.display = 'flex'
			} else {
				item.style.display = 'none'
			}
		})
		// Reset pagination when searching
		if (e.target.value === '') {
			showPage(currentPage)
		}
	})

	const openModalBtn = document.getElementById('main__cont_open-btn')
	openModalBtn.addEventListener('click', function () {
		document.getElementById('main__cont_my_modal').classList.add('open')
	})

	const closeModalBtn = document.getElementById(
		'main__cont_modal_close_my_modal_btn'
	)
	closeModalBtn.addEventListener('click', function () {
		document.getElementById('main__cont_my_modal').classList.remove('open')
	})
})
