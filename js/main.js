// Menu show/hide.
(function() {
	var btn = document.querySelector('.navbar .navbar__toggle'),
		nav = document.querySelector('.navbar .navbar__nav');

	function toggleClass(element, className) {
		var classList = element.className.split(' '),
			index = classList.indexOf(className),
			result = '';

		if (index > -1) { 
			classList[index] = ''; 
		} else { 
			classList.push(className);
		}

		for (var i = 0, length = classList.length; i < length; i++) {
			result += ((classList[i] === '' || i == 0)? '' : ' ') + classList[i];
		}

		element.className = result;
	}

	if (!(btn === null && nav === null)) {
		btn.addEventListener('click', function() {
			toggleClass(btn, 'navbar__toggle--active');
			toggleClass(nav, 'show');
		});
	}
})();

// Percent circle - set.
(function() {
	var circles = document.querySelectorAll('.percent-circle');
	
	function setProgress(element) {
		var text = element.querySelector('.percent-circle__percent'),
			circle = element.querySelector('.percent-circle__progress'),
			radius = element.querySelector('svg').clientWidth * 0.455,
			percent = element.dataset.pct,
			PI2 = 6.28318530718,
			result = PI2 * radius * (percent / 100);

		text.innerHTML = percent;
		circle.setAttribute('stroke-dasharray', result + ' 1000%');
	}

	if (circles.length > 0) { 
		for (var i = circles.length - 1; i >= 0; i--) {
			setProgress(circles[i]);
		}
	}
})();
