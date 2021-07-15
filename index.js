let header=document.getElementById("header")

window.addEventListener('scroll', scroller)

function scroller(){
	if(pageYOffset>50){
		header.style.background="black"
	}
	else{
		header.style.background="none"
	}
}