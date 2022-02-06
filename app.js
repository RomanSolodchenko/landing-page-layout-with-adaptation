// *******nav*******
document.addEventListener('DOMContentLoaded', () => {
	const navLine = document.querySelector('.nav__line'),
				navItem = document.querySelectorAll('.nav__item');

	navLine.style.width = `${navItem[0].offsetWidth}px`;

	navItem.forEach(el => {
		el.addEventListener('mouseenter', (e) => {
			navLine.style.width = `${e.currentTarget.offsetWidth}px`;
			navLine.style.left = `${e.currentTarget.offsetLeft}px`;
		});

		el.addEventListener('mouseleave', () => {
			navLine.style.width = `${navItem[0].offsetWidth}px`;
			navLine.style.left = `0px`;
		});
	});
});

// ******btn-scroll*****
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// *******form**********

const btns = document.querySelectorAll('.btnIn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});