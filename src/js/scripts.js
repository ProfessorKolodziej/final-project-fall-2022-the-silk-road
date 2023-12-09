// From https://lottiefiles.com/animations/tracking-O5i1unLPtE

const scrollbar = Scrollbar.init(document.querySelector(".container"), {
	renderByPixels: false
});

function getScrollPercent(scrollThreshold) {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
	console.log(h[st] || b[st], scrollThreshold, h[sh] || b[sh] - h.clientHeight)
	return ((h[st] || b[st]) - scrollThreshold) / ((h[sh] || b[sh]) - h.clientHeight - scrollThreshold) * 100;
	// return (h[st]||b[st] ) / ((h[sh]||b[sh]) - h.clientHeight ) * 100;
}

let lottieProgress = lottie.loadAnimation({
	container: document.querySelector(".lottie-progress"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "https://lottie.host/2e87ad22-97d4-4a03-8a3d-b20946034adc/Thu2gZT6Pf.json"
});

document.addEventListener('DOMContentLoaded', function () {
	const leftImageDiv = document.getElementsByClassName('fixed-map')[0];
	const leftImage = document.getElementsByClassName('lottie-progress')[0];
	const imageGrid = document.getElementsByClassName('city-content')[0];
	const scrollThreshold = document.getElementsByClassName('down')[0].getBoundingClientRect().bottom

	window.addEventListener('scroll', function () {
		const scrollPosition = window.scrollY;


		console.log(scrollPosition);

		if (scrollPosition > scrollThreshold) {
			leftImageDiv.style.left = '-250px';
			newMargin = (leftImage.getBoundingClientRect().left + leftImage.getBoundingClientRect().width).toString() + 'px'

			imageGrid.style.setProperty('margin-left', newMargin);




		} else {
			leftImageDiv.style.left = '-1000px';
			imageGrid.style.setProperty('margin-left', '150px');
		}


		const scrollPercentage = getScrollPercent(scrollThreshold);
		console.log(scrollPercentage);
		lottieProgress.goToAndStop(
			(scrollPercentage * lottieProgress.totalFrames) / 100,
			true
		);
	});
});
