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
