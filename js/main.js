fetch('https://6731b0237aaf2a9aff119400.mockapi.io/api/v1/lolq')
const heroImage = document.querySelector('.hero__image img')
const images = [
	'img/tokyo1.jpg',
	'img/tokyo2.jpg',
	'img/tokyo3.jpg',
]
let currentImageIndex = 0

function changeImage() {
	heroImage.src = images[currentImageIndex]
	currentImageIndex = (currentImageIndex + 1) % images.length
}

changeImage()

setInterval(changeImage, 3000)
const searchInput = document.getElementById('search-input')

// searchInput.addEventListener('input', (e) =>
// 	[...document.querySelectorAll('.card')].forEach((item) => {
// 		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
// 			item.style.display = 'flex'
// 		} else {
// 			item.style.display = 'none'
// 		}
// 	})
// )

// document.getElementById('main__cont_open-btn')
// document.addEventListener('click', function () {
// 	document.getElementById('main__cont_my_modal').classList.add('open')
// })

// document.getElementById('main__cont_modal_close_my_modal_btn')
// document.addEventListener('click', function () {
// 	document.getElementById('main__cont_my_modal').classList.remove('open')
// })

// // heroImage.innerHTML = ''
// // const images = document.createElement('div')
// // images.classList.add('hero__image')
// // images.innerHTML = `
// // <img src="../img/imperator_house.jpg" alt="hero-image-1">
// // `
// // heroImage.appendChild(images)
