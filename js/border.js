const heroImage = document.querySelector('.hero__image img')
const images = [
	'../img/tokyo2.jpg.jpg',
	'../img/sensoji_japan.jpg',
	'../img/tokyo1.jpg',
]
let currentImageIndex = 0

function changeImage() {
	heroImage.src = images[currentImageIndex]
	currentImageIndex = (currentImageIndex + 1) % images.length
}

setInterval(changeImage, 2500)
