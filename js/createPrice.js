function createPrice(type) {
	let container = document.querySelector(`.card-rows`);
	let background = document.querySelector(`.background`);
	let head = document.querySelector(`.mainTitle`);
	let sechead = document.querySelector(`.secondayTitle`);
	head.innerHTML = type;
	sechead.innerHTML = ``;
	if (type == "Педикюр") {
		sechead.innerHTML = `В Педикюре работаем только с эстетикой!
		Медицинский педикюр не предоставляем,
		если в ходе работы будут выявлены противопоказания,
		то в услуге может быть отказано!`
	}

	let list = price[type];
	for (let i = 0; i < list.length; i++) {
		let item = list[i];

		let title = item.title;
		let cost = item.cost;
		let time = item.time;
		let variants = item.variants;
		let secondary = item.secondary;
		let first = item.first;
		let second = item.second;

		if (first && second) {
			container.innerHTML += `			
				<div class="card">
				<a href="form.html?text=${title}&type=${type}">
					<div class="card-container">
						<h5 class="title">${title}</h5>					
					</div>	
					<div>
						<div class="text">
								<div class="cost">1 сеанс: ${first}<span class="red-text">₽</span></div>
								<div class="cost">5 сеансов: ${second}<span class="red-text">₽</span></div>
						</div>					
						<div class="button">Записаться</div>
					</div>	
				</a>					
				</div>			
			`
		} else {
			if (variants) {
				container.innerHTML += `
						<div class="card">
						<a href="form.html?text=${title}&type=${type}">
							<div class="card-container">
								<h5 class="title">${title}</h5>								
							</div>	
								<div>
								<div class="text">
									<div class="time">${variants[0].time} <span class="red-text">минут</span></div>
									<div class="cost">${variants[0].cost}<span class="red-text">₽</span></div>
								</div>
								<div class="text">
									<div class="time">${variants[1].time} <span class="red-text">минут</span></div>
									<div class="cost">${variants[1].cost}<span class="red-text">₽</span></div>
								</div>					
								<div class="button">Записаться</div>	
							</div>
						</a>					
						</div>			
				`
			} else if (secondary) {
				if (variants) {
					container.innerHTML += `			
					<div class="card">
					<a href="form.html?text=${title}&type=${type}">
						<div class="card-container">
							<div class="title-container">
								<h5 class="title">${title}</h5>
								<h6 class="sub-title">${secondary}</h6>
							</div>													
						</div>	
						<div>
							<div class="text">
								<div class="time">${variants[0].time} <span class="red-text">минут</span></div>
								<div class="cost">${variants[0].cost}₽</div>
							</div>
							<div class="text">
								<div class="time">${variants[1].time} <span class="red-text">минут</span></div>
								<div class="cost">${variants[1].cost}<span class="red-text">₽</span></div>
							</div>			
							<div class="button">Записаться</div>
						</div>
					</a>				
					</div>		
			`
				} else if (!time) {
					container.innerHTML += `
					<div class="card">
					<a href="form.html?text=${title}&type=${type}">
						<div class="card-container">
						<div class="title-container">
							<h5 class="title">${title}</h5>
							<h6 class="sub-title">${secondary}</h6>
						</div>						
						</div>	
						<div>
							<div class="text">
								<div class="cost">${cost}<span class="red-text">₽</span></div>
							</div>				
							<div class="button">Записаться</div>	
						</div>
					</a>			
					</div>		
			`
				}
				else {
					container.innerHTML += `			
						<div class="card">
						<a href="form.html?text=${title}&type=${type}">
							<div class="card-container">
								<div class="title-container">
									<h5 class="title">${title}</h5>
									<h6 class="sub-title">${secondary}</h6>
								</div>													
							</div>	
							<div>
								<div class="text">
									<div class="time">${time} <span class="red-text">минут</span></div>
									<div class="cost">${cost}<span class="red-text">₽</span></div>
								</div>					
								<div class="button">Записаться</div>	
							</div>
						</a>				
						</div>
				`
				}

			}
			else {
				if (time) {
					container.innerHTML += `
						<div class="card">
						<a href="form.html?text=${title}&type=${type}">
							<div class="card-container">
								<h5 class="title">${title}</h5>								
							</div>	
							<div>
								<div class="text">
									<div class="time">${time} <span class="red-text">минут</span></div>
									<div class="cost">${cost}<span class="red-text">₽</span></div>
								</div>			
								<div class="button">Записаться</div>
							</div>	
						</a>						
						</div>
				`
				} else {
					container.innerHTML += `			
						<div class="card">
						<a href="form.html?text=${title}&type=${type}">
							<div class="card-container">
								<h5 class="title">${title}</h5>													
							</div>	
							<div>
								<div class="text">
									<div class="cost">${cost}<span class="red-text">₽</span></div>
								</div>													
								<div class="button">Записаться</div>
							</div>	
						</a>					
						</div>			
				`
				}

			}
		}
	}
	const screenWidth = window.screen.width;
	if (screenWidth >= 1024) {
		background.src = `assets/price-background/${type}.jpg`;
		if (type == `Ручной массаж` || type == `Лазерная эпиляция` || type == `Педикюр`) {
			if (type == `Ручной массаж`) {
				background.classList.add(`background-rm`);
			} else if (type == `Лазерная эпиляция`) {
				background.classList.add(`background-las`);
			} else if (type == `Педикюр`) {
				background.classList.add(`background-ped`);
			}
		}
	} else {
		background.src = `assets/price-background/phone.jpg`;
	}
}