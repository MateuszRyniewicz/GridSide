const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	document.body.classList.toggle('sticky-body');
};

navBtn.addEventListener('click', handleNav);

const handleCurretYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurretYear();
