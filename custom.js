let projectIndexes = {
	project1: 1,
	project2: 1,
	project3: 1,
	project4: 1,
	project5: 1,
	project6: 1,
	project7: 1,
	project8: 1,
}
showDivs("project1", projectIndexes.project1);
showDivs("project2", projectIndexes.project2);
showDivs("project3", projectIndexes.project3);
showDivs("project4", projectIndexes.project4);
showDivs("project5", projectIndexes.project5);
showDivs("project6", projectIndexes.project6);
showDivs("project7", projectIndexes.project7);
showDivs("project8", projectIndexes.project8);

function plusDivs(project, n) {
	showDivs(project, projectIndexes[project] += n);
}
function resetPriorGalleries(currentProject) {
	let projectDivs = document.getElementsByClassName("projects");
	setTimeout(() => {
		for (let i = 0; i < projectDivs.length; i++) {
			if (projectDivs[i].id === currentProject) { return }
			else { showDivs(projectDivs[i].id, 1) }
		}
	}, 800);
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
	projectIndexes[project] = index;
	let elements = document.getElementById(project).querySelector('.imgslide').children;
	let imgNames = [];
	for (let i = 0; i < elements.length; i++) {
		if (index == elements.length) {
			document.getElementById('mousemove').style.display = 'none';
			document.getElementById('mousemove-2').style.display = 'block';
		}
		else {
			document.getElementById('mousemove').style.display = 'block';
			document.getElementById('mousemove-2').style.display = 'none';
		}
	}

}


function Thing(x, y) {
	this.x = x;
	this.y = y;
}

var mousePos = new Thing(0, 0);

mydiv = document.getElementById("body");
mycanvas = document.getElementById("mousemove");
mycanvas2 = document.getElementById("mousemove-2");

mydiv.addEventListener('mousemove', function (event) {
	mousePos.x = event.clientX;
	mousePos.y = event.clientY;

	mycanvas.style.top = mousePos.y + 1 + "px";
	mycanvas.style.left = mousePos.x + "px";
	mycanvas2.style.top = mousePos.y + 1 + "px";
	mycanvas2.style.left = mousePos.x + "px";
}, false);

// Overlay page

const customCursor = document.getElementById('mousemove')
const headerName = document.getElementById('header')
const overlayHeaderName = document.getElementById('header-2')
const arrowNext = document.getElementById('nextArrow')
const arrowPrev = document.getElementById('prevArrow')
const overlayPage = document.getElementById("myNav")
const mainBody = document.getElementById("body")

customCursor.innerText = 'Lou&Charlene'

document.getElementById('myNav').addEventListener("click", closeNav);
document.getElementById('contact1').addEventListener("click", ignoreParentClick);
document.getElementById('contact2').addEventListener("click", ignoreParentClick);
document.getElementById('contact3').addEventListener("click", ignoreParentClick);
document.getElementById('contact4').addEventListener("click", ignoreParentClick);
document.getElementById('contact5').addEventListener("click", ignoreParentClick);
document.getElementById('contact6').addEventListener("click", ignoreParentClick);
document.getElementById('contact7').addEventListener("click", ignoreParentClick);

function ignoreParentClick(event) {
	event.stopPropagation();
  }
function openNav() {
	overlayPage.style.display = "block"
	customCursor.style.display = 'none'
	mainBody.style.cursor = 'default'
	headerName.style.display = 'none'
	overlayHeaderName.style.display = 'block'
}
function closeNav() {
	overlayPage.style.display = "none"
	customCursor.style.display = 'block'
	mainBody.style.cursor = 'none'
	headerName.style.display = 'block'
	overlayHeaderName.style.display = 'none'
}

// Image library 

headerName.onmouseover =
	hideMouseMove = () => {
		customCursor.style.visibility = 'hidden'
	}
headerName.onmouseout =
	showMouseMove = () => {
		customCursor.style.visibility = 'visible'
	}
// arrowNext.onmouseover =
// 	hideMouseMove = () => {
// 		customCursor.style.visibility = 'hidden'
// 	}
// arrowNext.onmouseout =
// 	showMouseMove = () => {
// 		customCursor.style.visibility = 'visible'
// 	}
// arrowPrev.onmouseover =
// 	hideMouseMove = () => {
// 		customCursor.style.visibility = 'hidden'
// 	}
// arrowPrev.onmouseout =
// 	showMouseMove = () => {
// 		customCursor.style.visibility = 'visible'
// 	}

