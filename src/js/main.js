console.log("KR Steakbar -- Designed by Carol Ehreth, Developed by Ashley Pollard and Angelica de Wit")



let content = document.querySelector(".content");
let nav =  document.querySelector("nav");
let menuOpen = document.querySelector(".hamburger-menu");
let menuClose = document.querySelector(".close-svg");
let moreKevin = document.querySelector(".more");
let circles = document.querySelectorAll(".circle");

let moreKevinUl = document.querySelector(".more ul");

let middleGroup = document.querySelector(".middle-group");
let middleLis = document.querySelectorAll(".main-content li")
let liClose = document.querySelectorAll(".main-content li .close-svg")
let footer = document.querySelector("footer");

let kevNameDesktop = document.querySelector(".kev-name");
let krFooterUl = document.querySelector(".kr-footer ul");
let krBorder = document.querySelector(".kr-border");
let krText = document.querySelector(".kr-text");

menuOpen.addEventListener('click', function(e) {
	nav.classList.add('is-active');
	menuOpen.classList.add('is-active');
	footer.classList.add('is-active');
	middleGroup.classList.add('is-active');
	content.classList.add('is-active');
	var tlClose = new TimelineMax();
	tlClose.from(".close-menu", 0.5, {drawSVG: "50% 50%", delay:0.8});
	for (var i = 0; i < circles.length; i++) {
	    circles[i].classList.add('is-active');
	}
})

menuClose.addEventListener('click', function(e) {
	nav.classList.remove('is-active');
	menuOpen.classList.remove('is-active');
	moreKevinUl.classList.remove('is-active');
	footer.classList.remove('is-active');
	middleGroup.classList.remove('is-active');
	content.classList.add('is-active');
	for (var i = 0; i < circles.length; i++) {
	    circles[i].classList.remove('is-active');
	}
})

moreKevin.addEventListener('click', function(e) {
	moreKevinUl.classList.toggle('is-active');
})

kevNameDesktop.addEventListener('click', function(e) {
	krBorder.classList.toggle('is-active');
	krFooterUl.classList.toggle('is-active');
	krText.classList.toggle('is-active');
})


let iconPaths = document.querySelectorAll(".icon-path")


for (var i = 0; i < iconPaths.length; i++) {
    var tlIcons = new TimelineMax();
	tlIcons.from(iconPaths[i], 0.5, {drawSVG: "50% 50%", delay:1});
}




//svgs


// TweenLite.to(circle1, 1, {morphSVG:".circle-l2"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l3"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l4"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l5"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:circle1}, "+=1");

// TweenMax.set(".svgtest #star", {display: "none"})
// TweenMax.set(".svgtest #circle", {display: "none"})


// var tlLarge = new TimelineMax({ repeat:-1, yoyo: true});
// tlLarge.to(circle1Large, 2, {morphSVG: ".circle-l2", ease: Power2.easeInOut})
// .to(".circle-l3", 2, {morphSVG: ".circle-l4", xPercent:-20, ease: Power2.easeInOut},  0)
// .to(".circle-l5", 2, {morphSVG: ".circle-l1", xPercent:-40, yPercent:20, ease: Power2.easeInOut}, 0);
// .to(".circle-l4", 4.5, {morphSVG: ".circle-l5", xPercent:100, yPercent:100}, 0);



var tlLarge = new TimelineMax({ repeat:-1, yoyo: false});
// tlLarge.fromTo(".circle-l1", 1, {drawSVG:"0 5%"}, {drawSVG:"95% 100%"})
// tlLarge.from(".circle-l1", 1, {drawSVG:"50% 50%"})
tlLarge.to(".circle-l1", 2.5, {morphSVG: ".circle-l2"})
tlLarge.to(".circle-l1", 2.5, {morphSVG: ".circle-l3"})
tlLarge.to(".circle-l1", 2.5, {morphSVG: ".circle-l4"})
tlLarge.to(".circle-l1", 2.5, {morphSVG: ".circle-l5"})
tlLarge.to(".circle-l1", 2.5, {morphSVG: ".circle-l1"});
// tlLarge.from(".circle-l1", 1, {drawSVG: "40% 60%"});
// tlLarge.from(".circle-l1", 1, {drawSVG:"50% 50%"});


var tlMd = new TimelineMax({ repeat:-1, yoyo: false});
tlMd.to(".circle-m1", 2, {morphSVG: ".circle-m2"})
tlMd.to(".circle-m1", 2, {morphSVG: ".circle-m3"})
tlMd.to(".circle-m1", 2, {morphSVG: ".circle-m4"})
tlMd.to(".circle-m1", 2, {morphSVG: ".circle-m5"})
tlMd.to(".circle-m1", 2, {morphSVG: ".circle-m1"});


var tlSm = new TimelineMax({ repeat:-1, yoyo: false});
tlSm.to(".circle-sm1", 1.8, {morphSVG: ".circle-sm2"})
tlSm.to(".circle-sm1", 1.8, {morphSVG: ".circle-sm3"})
tlSm.to(".circle-sm1", 1.8, {morphSVG: ".circle-sm4"})
tlSm.to(".circle-sm1", 1.8, {morphSVG: ".circle-sm5"})
tlSm.to(".circle-sm1", 1.8, {morphSVG: ".circle-sm1"});




