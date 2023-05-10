function mobileVersion() {
	let number_container = document.querySelector(`.mobile-number`);
	let video_container = document.querySelector(`.video-container`);
	const screenWidth = window.screen.width;

	if (screenWidth <= 576) {
		number_container.innerHTML = `
			<a href="tel:89243194448" target="_blank">
				<li class="photo-links">Телефон: 8-924-319-44-48</li>
			</a>
		`;
		video_container.innerHTML = `
		<img src='assets/content/video/videoPK-mobile.gif' alt='video'>
		`;
	} else {
		number_container.innerHTML = `
			<li class="photo-text">Телефон: 8-924-319-44-48</li>
		`;
		video_container.innerHTML = `
			<video src="assets/content/video/videoPK.webm" video autoplay loop muted playsinline webkit-playinginline
			class="col video"></video>
		`;
	}
}
