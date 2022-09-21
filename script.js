const li = document.querySelectorAll('li')
const search = document.querySelector('.search')

const searchEngine = e => {
	const txt = e.target.value.toLowerCase()

	li.forEach(el => {
		el.textContent.toLowerCase().indexOf(txt) !== -1 ? (el.style.display = 'block') : (el.style.display = 'none')
	})
}

search.addEventListener('keyup', searchEngine)
