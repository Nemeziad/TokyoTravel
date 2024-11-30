let card = []
let currentPage = 1
const cardsPerPage = 4

fetch('https://6731b0237aaf2a9aff119400.mockapi.io/api/v1/lol')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Error occurred!')
		}
		return response.json()
	})
	.then((data) => {
		console.log(data)
		card = data
		displayCards(card, currentPage)
		setupPagination(card)
	})
	.catch((err) => {
		console.log(err)
	})

function displayCards(cards, page) {
	const CardsDiv = document.getElementById('cards')
	CardsDiv.innerHTML = ''

	const start = (page - 1) * cardsPerPage
	const end = start + cardsPerPage
	const paginatedCards = cards.slice(start, end)

	paginatedCards.forEach((item) => {
		const card = document.createElement('div')
		card.classList.add('card')
		card.addEventListener('click', () => showModal(item))

		const title = document.createElement('h1')
		title.textContent = item.title
		card.appendChild(title)

		const description = document.createElement('p')
		description.textContent = item.description
		card.appendChild(description)

		const img = document.createElement('img')
		img.src = item.imageUrl
		img.alt = item.title
		card.appendChild(img)

		CardsDiv.appendChild(card)
	})
}

function showModal(item) {
	const modal = document.getElementById('attraction-modal')
	const modalTitle = document.getElementById('modal-title')
	const modalImage = document.getElementById('modal-image')
	const modalDescription = document.getElementById('modal-description')

	modalTitle.textContent = item.title
	modalImage.src = item.imageUrl
	modalImage.alt = item.title
	modalDescription.textContent = item.description

	modal.style.display = 'block'

	const closeBtn = document.querySelector('.close-modal')
	closeBtn.onclick = () => (modal.style.display = 'none')

	window.onclick = (event) => {
		if (event.target === modal) {
			modal.style.display = 'none'
		}
	}
}
function filterCards(cards, query) {
	return cards.filter((item) => {
		return (
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase())
		)
	})
}

const searchInput = document.getElementById('search-input')
searchInput.addEventListener('input', (e) => {
	const query = e.target.value
	const filteredCards = filterCards(card, query)
	currentPage = 1
	displayCards(filteredCards, currentPage)
	setupPagination(filteredCards)
})
