const heroImage = document.querySelector('.hero__image img')
const images = [
	'../img/imperator_house.jpg',
	'../img/sensoji_japan.jpg',
	'../img/tokyo_museum.jpg',
]
let currentImageIndex = 0

function changeImage() {
	heroImage.src = images[currentImageIndex]
	currentImageIndex = (currentImageIndex + 1) % images.length
}

setInterval(changeImage, 3500)
