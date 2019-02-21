function classToggle() {
	const navs = document.querySelectorAll('.menu')
	// body...
	navs.forEach(nav => nav.classList.toggle('nav_ToggleShow'));
}
document.querySelector('.toggle_icon')
	.addEventListener('click', classToggle);