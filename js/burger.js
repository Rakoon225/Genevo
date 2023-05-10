let burgerButton = document.querySelector(`.burger-icon`);
burgerButton.addEventListener(`click`, function () {
	document
		.querySelector(`.burger`)
		.classList.toggle(`_active`);
})

let burgerSubs = document.querySelectorAll(`.burger-sub`);
for (let i = 0; i < burgerSubs.length; i++) {
	let burgerSub = burgerSubs[i];
	burgerSub.addEventListener(`click`, function (evt) {
		let item = evt.target.closest(`.burger-sub`);
		let sub = item.querySelector(`.sub`);
		let container = sub.closest(`.burger-sub`);
		container = container.querySelector(`.burger-spanArrow`);
		let arrow = container.querySelector(`.burger-arrow`);
		let text = container.querySelector(`.burger-span`);
		if (sub.classList.contains(`_active`)) {
			sub.classList.remove(`_active`);
			arrow.src = `assets/icons/arrow-white.png`;
			arrow.classList.remove(`_active`);
			text.classList.remove(`_active`);
		} else {
			sub.classList.add(`_active`);
			arrow.src = `assets/icons/arrow-red.png`;
			arrow.classList.add(`_active`);
			text.classList.add(`_active`);
		}

	})
}

