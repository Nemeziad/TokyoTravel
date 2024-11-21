const heroImage = document.querySelector('.hero__image img')
const images = [
	'../img/tokyo1.jpg',
	'../img/tokyo2.jpg',
	'../img/tokyo_museum.jpg',
]
let currentImageIndex = 0

function changeImage() {
	heroImage.src = images[currentImageIndex]
	currentImageIndex = (currentImageIndex + 1) % images.length
}

setInterval(changeImage, 3500)

const searchInput = document.getElementById('search-input')

searchInput.addEventListener('input', (e) =>
	[...document.querySelectorAll('.card')].forEach((item) => {
		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
		}
	})
)

document
	.getElementById('main__cont_open-btn')
	.addEventListener('click', function () {
		document.getElementById('main__cont_my_modal').classList.add('open')
	})

document
	.getElementById('main__cont_modal_close_my_modal_btn')
	.addEventListener('click', function () {
		document.getElementById('main__cont_my_modal').classList.remove('open')
	})
