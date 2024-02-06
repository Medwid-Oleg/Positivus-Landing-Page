let form = document.querySelector("form");	

form.addEventListener("submit", function(event){
	event.preventDefault();
});


let processCards = document.querySelectorAll('.process-card');

Array.from(processCards, elem => elem.addEventListener("click", function(){
	elem.classList.toggle('open-card');
}));

processCards.forEach(function(element){
	let icon = element.querySelector('.process-card-icon');
	
	element.addEventListener('click', function(){
		let currentState = element.getAttribute('data-state');

		if (currentState === 'collapsed') {
			element.setAttribute('data-state', 'expanded');
			icon.src = 'img/MinusIcon.svg';
			icon.style.transform = 'rotate(180deg)';
		} else {
			element.setAttribute('data-state', 'collapsed');
			icon.src = 'img/PlusIcon.svg';
			icon.style.transform = 'rotate(-90deg)';
		}
	})
});

let teamBtn = document.querySelector('.team-btn');
let teamCards = document.querySelectorAll('.team-card');
let lastTwoTeamCards = Array.prototype.slice.call(teamCards, -2);

teamBtn.addEventListener('click', function(){
	lastTwoTeamCards.forEach(function(el){
		el.classList.toggle("hidden");
	});
	if(teamBtn.innerHTML === "See all team"){
		teamBtn.innerHTML = "Hide";
	} else {
		teamBtn.innerHTML = "See all team";
	}
})


let testimonialsContainer = document.querySelector('.testimonials-container');
let stars = document.querySelectorAll('.testimonials-nav-star');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let position = 0;
let i = 0;

function changeArrowsSrc(pos){
	if(window.innerWidth > 780){
		if(pos > -2624){
			nextBtn.src = 'img/ArrowRightWhite.svg';
		} else {
			nextBtn.src = 'img/ArrowRightGrey.svg';
		}
	} else if(window.innerWidth < 780 && window.innerWidth > 400){
		if(pos > -1520){
			nextBtn.src = 'img/ArrowRightWhite.svg';
		} else {
			nextBtn.src = 'img/ArrowRightGrey.svg';
		}
	} else {
		if(pos > -1180){
			nextBtn.src = 'img/ArrowRightWhite.svg';
		} else {
			nextBtn.src = 'img/ArrowRightGrey.svg';
		}
	}

	if(pos < 0){
		prevBtn.src = 'img/ArrowLeftWhite.svg';
	} else {
		prevBtn.src = 'img/ArrowLeftGrey.svg';
	}
}

function changeStarSrc(iterator){
	let activeElements = document.querySelectorAll('.active');

	activeElements.forEach(function(el){
		el.classList.remove('active');
		el.src = 'img/whiteStar.svg';
	});

	stars[iterator].classList.add('active');
	stars[iterator].src = 'img/greenStar.svg';
}

stars.forEach(function(element){
	element.addEventListener('click', function(){
		let currentState = +element.getAttribute('data-state');
		i = currentState-1;

		if(window.innerWidth > 780){
			position = -656 * currentState + 656;
		} else if(window.innerWidth < 780 && window.innerWidth > 400){
			position = -380 * currentState + 380;
		} else {
			position = -295 * currentState + 295;
		}

		testimonialsContainer.style.transform = `translateX(${position}px)`;
		changeArrowsSrc(position);

		let activeElements = document.querySelectorAll('.active');

		activeElements.forEach(function(el){
			el.classList.remove('active');
			el.src = 'img/whiteStar.svg';
		});
		element.classList.add('active');
		element.src = 'img/greenStar.svg';
	});
});

nextBtn.addEventListener('click', function(){
	if(window.innerWidth > 780){
		if(position != -2624){
			position -= 656;
		}
	} else if(window.innerWidth < 780 && window.innerWidth > 400){
		if(position != -1520){
			position -= 380;
		}
	} else {
		if(position != -1180){
			position -= 295;
		}
	}
	testimonialsContainer.style.transform = `translateX(${position}px)`;
	changeArrowsSrc(position);
	if(i!=4){
		i++;
		changeStarSrc(i);
	}
});

prevBtn.addEventListener('click', function(){
	if(position != 0){
		if(window.innerWidth > 780){
			position += 656;
		} else if(window.innerWidth < 780 && window.innerWidth > 400){
			position += 380;
		} else {
			position += 295;
		}
		testimonialsContainer.style.transform = `translateX(${position}px)`;
		changeArrowsSrc(position);
		if(i!=0){
			i--;
			changeStarSrc(i);
		}
	}
});


let subscriptionForm = document.querySelector("#subscription-form");

subscriptionForm.addEventListener("submit", function(event){
	event.preventDefault();
})