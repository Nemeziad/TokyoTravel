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
