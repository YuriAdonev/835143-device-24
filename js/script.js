var linkContact = document.querySelector(".contacts-link");
var linkMap = document.querySelector(".map-link");

var popupContact = document.querySelector(".modal-contact-us");
var popupMap = document.querySelector(".modal-map");

var closeContact = popupContact.querySelector(".modal-contact-us-close");
var closeMap = popupMap.querySelector(".modal-map-close");

var form = popupContact.querySelector(".contact-us");
var userName = popupContact.querySelector("[name=name]");
var email = popupContact.querySelector("[name=email]");
var message = popupContact.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
	storageName = localStorage.getItem("userName");
	storageEmail = localStorage.getItem("email");
}
catch (err) {
	isStorageSupport = false;
}

linkContact.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupContact.classList.add("modal-show");
	if (storageName || storageEmail) {
		name.value = storageName;
		email.value = storageEmail;
		message.focus();
	}
	else {
		userName.focus();
	}
});

linkMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});

closeContact.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupContact.classList.remove("modal-show");
	popupContact.classList.remove("modal-error");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
	popupMap.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popupContact.classList.remove("modal-error");
		popupContact.offsetWidth = popupContact.offsetWidth;
		popupContact.classList.add("modal-error");
	}
	else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("email", email.value);
		}
	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupContact.classList.contains("modal-show")) {
			popupContact.classList.remove("modal-show");
			popupContact.classList.remove("modal-error");
		}
		if (popupMap.classList.contains("modal-show")) {
			popupMap.classList.remove("modal-show");
			popupMap.classList.remove("modal-error");
		}
	}
});

//
//slider
//

let slideIndex = 1,
		slides = document.querySelectorAll('.main-slider-item'),
		dotsWrap = document.querySelector('.main-slider-nav'),
		dots = document.querySelectorAll('.main-slider-dot');

showSlides(slideIndex);

function showSlides() {
	slides.forEach((item) => item.classList.remove("active"));
	dots.forEach((item) => item.classList.remove("active"));
	slides[slideIndex - 1].classList.add("active");
	dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('main-slider-dot') && event.target == dots[i-1]) {
			currentSlide(i);
		}
	}
});

//
//Tab
//

let tabsIndex = 1,
		tabs = document.querySelectorAll('.services-item'),
		buttonsWrap = document.querySelector('.services-tabs'),
		buttons = document.querySelectorAll('.services-tabs-btn');

showTabs(tabsIndex);

function showTabs() {
	tabs.forEach((item) => item.classList.remove("active"));
	buttons.forEach((item) => item.classList.remove("active"));
	tabs[slideIndex - 1].classList.add("active");
	buttons[slideIndex - 1].classList.add("active");
}

function currentTab(n) {
	showTabs(slideIndex = n);
}

buttonsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < buttons.length + 1; i++) {
		if (event.target.classList.contains('services-tabs-btn') && event.target == buttons[i-1]) {
			currentTab(i);
		}
	}
});
