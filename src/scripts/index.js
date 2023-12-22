const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
	menu.classList.toggle('active')
})

const links = menu.querySelectorAll('a')
links.forEach((element) => {
	element.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
});

const tabsBtn = document.querySelectorAll('.tabs__item-button');
const tabsItems = document.querySelectorAll('.tabs__bottom-item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.tabs__item-button').click();

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
  navigation: {
		nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
});