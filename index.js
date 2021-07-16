let header=document.getElementById("header")
let section3=document.getElementById('section3')
let section4=document.getElementById('section4')
let section5=document.getElementById('section5')
let section6=document.getElementById('section6')
let section7=document.getElementById('section7')
let section8=document.getElementById('section8')
let section9=document.getElementById('section9')

window.addEventListener('scroll', scroller)

function scroller(){
	if(pageYOffset>50){
		header.style.background="black"
	}
	else{
		header.style.background="none"
	}
	if (pageYOffset>getOffsetSum(section3).top-200) {
		section3.style.opacity="1"
	}else{
		section3.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section4).top-200) {
		section4.style.opacity="1"
	}else{
		section4.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section5).top-200) {
		section5.style.opacity="1"
	}else{
		section5.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section6).top-200) {
		section6.style.opacity="1"
	}else{
		section6.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section7).top-200) {
		section7.style.opacity="1"
	}else{
		section7.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section8).top-200) {
		section8.style.opacity="1"
	}else{
		section8.style.opacity="0"
	}
	if (pageYOffset>4700) {
		section9.style.opacity="1"
	}else{
		section9.style.opacity="0"
	}
}

function getOffsetSum(elem) {
		var top=0, left=0
		while(elem) {
			top = top + parseFloat(elem.offsetTop)
			left = left + parseFloat(elem.offsetLeft)
			elem = elem.offsetParent
		}
		 
		return {top: Math.round(top), left: Math.round(left)}
}
console.log(getOffsetSum(section9).top)