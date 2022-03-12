const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav__link')
const allNavItemsMobile = document.querySelectorAll('.nav__link-mobile')
const body = document.querySelector('body')

const handleNav = () => {
	// navBtn.classList.toggle('is-active') // pierwotny plan 1
	navMobile.classList.toggle('nav-mobile--active')

	handleNavItemsAnimation() // działa <3
	disableScroll()
}

navBtn.addEventListener('click', handleNav)

// allNavItems.forEach(item => item.addEventListener('click', () => navMobile.classList.remove('nav-mobile--active'))) // pierwotny plan 1

// allNavItems.forEach(items => items.addEventListener('click', () => navBtn.classList.remove('is-active'))) // pierwotny plan 1

const handleNavBtn = () => {
	if (navMobile.classList.contains('nav-mobile--active')) {
		navBtn.classList.add('is-active')
	} else {
		navBtn.classList.remove('is-active')
	}
}
navBtn.addEventListener('click', handleNavBtn)

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItemsMobile.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}


const disableScroll = () => {
	if (navMobile.classList.contains('nav-mobile--active')) {
		body.classList.add('scroll-hide')
	} else {
		body.classList.remove('scroll-hide')
	}
}



allNavItemsMobile.forEach(item =>
	item.addEventListener('click', () => navMobile.classList.remove('nav-mobile--active'))
)
allNavItemsMobile.forEach(item => item.addEventListener('click', () => navBtn.classList.remove('is-active')))

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
