const openModalBtn = document.getElementById('main__cont_open-btn')
openModalBtn.addEventListener('click', function () {
	document.getElementById('main__cont_my_modal').classList.add('open')
})

const closeModalBtn = document.getElementById('main__cont_modal_close_my_modal_btn')
closeModalBtn.addEventListener('click', function () {
	document.getElementById('main__cont_my_modal').classList.remove('open')
})
