let projectIndexes = {
	project1: 1,
	project2: 1,
	project3: 1,
	project4: 1,
	// project5: 1,
	// project6: 1,
	// project7: 1,
}
showDivs("project1", projectIndexes.project1);
showDivs("project2", projectIndexes.project2);
showDivs("project3", projectIndexes.project3);
showDivs("project4", projectIndexes.project4);
//   showDivs("project5", projectIndexes.project5);
// showDivs("project6", projectIndexes.project6);
// showDivs("project7", projectIndexes.project7);

function plusDivs(project, n) {
	showDivs(project, projectIndexes[project] += n);
}

function showDivs(project, index) {
	let i;
	let x = document.getElementById(project).getElementsByClassName("slidess");
	if (index > x.length) { index = 1 }
	if (index < 1) { index = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[index - 1].style.display = "block";
	// document.getElementById(project).getElementsByClassName("pagination")[0].innerText = index + ' / ' + x.length;
	// let text = document.getElementById(project).getElementsByClassName("pagination")[0].innerText = index + ' / ' + x.length;
	projectIndexes[project] = index;
	let elements = document.getElementById(project).querySelector('.imgslide').children;
	let imgNames = [];
	for (let i = 0; i < elements.length; i++) {
		// if (elements[i].src !== undefined) {
		imgNames.push(elements[i].children[0].children[0].alt);
		// document.getElementById(project).getElementsByClassName("img-name")[0].innerText = imgNames[index - 1];
		// }
	}
	// console.log( imgNames[0])
	document.getElementById('mousemove').innerText = imgNames[index - 1]
	document.getElementById(project).onmouseover = function () { mouseOver() }
	document.getElementById(project).onclick = function () { mouseOver() }
	document.getElementById(project).onmouseout = function () { mouseOut() };
	let prjct = document.getElementById(project)
	function mouseOver() {
	}

	function mouseOut() {
	}

}


function Thing(x, y) {
	this.x = x;
	this.y = y;
}

var mousePos = new Thing(0, 0);

mydiv = document.getElementById("body");
mycanvas = document.getElementById("mousemove");

mydiv.addEventListener('mousemove', function (event) {
	mousePos.x = event.clientX;
	mousePos.y = event.clientY;

	mycanvas.style.top = mousePos.y + 1 + "px";
	mycanvas.style.left = mousePos.x + "px";
	// console.log(mycanvas.style.top);
}, false);

// Overlay page

function openNav() {
	document.getElementById("myNav").style.display = "block";
	document.getElementById('mousemove').style.display = 'none'
	document.getElementById("body").style.cursor = 'default'

}

function closeNav() {
	document.getElementById("myNav").style.display = "none";
	document.getElementById('mousemove').style.display = 'block'
	document.getElementById("body").style.cursor = 'none'

}

// Image library 
const customCursor = document.getElementById('mousemove')
const haderName = document.getElementById('header')
const arrowNext = document.getElementById('nextArrow')
const arrowPrev = document.getElementById('prevArrow')
customCursor.innerText = 'Deimante'

haderName.onmouseover =
	hideMouseMove = () => {
		customCursor.style.visibility = 'hidden'
	}
haderName.onmouseout =
	showMouseMove = () => {
		customCursor.style.visibility = 'visible'
	}
arrowNext.onmouseover =
	hideMouseMove = () => {
		customCursor.style.visibility = 'hidden'
	}
arrowNext.onmouseout =
	showMouseMove = () => {
		customCursor.style.visibility = 'visible'
	}
arrowPrev.onmouseover =
	hideMouseMove = () => {
		customCursor.style.visibility = 'hidden'
	}
arrowPrev.onmouseout =
	showMouseMove = () => {
		customCursor.style.visibility = 'visible'
	}

