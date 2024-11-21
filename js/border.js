const heroImage = document.querySelector('.hero__image img')
const images = ['../img/tokyo1.jpg', '../img/tokyo2.jpg', '../img/tokyo3.jpg']
let currentImageIndex = 0

function changeImage() {
	heroImage.src = images[currentImageIndex]
	currentImageIndex = (currentImageIndex + 1) % images.length
}

setInterval(changeImage, 3500)
