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
	for (let i = 0; i < projectDivs.length; i++) {
		if (projectDivs[i].id === currentProject) {
			return
		} else {
			showDivs(projectDivs[i].id, 1)
		}
	}
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
		imgNames.push(elements[i].children[0].children[0].alt);
		let mousemoveText = document.getElementById('mousemove').innerText;
		console.log(mousemoveText)
		if (index == elements.length) {
			document.getElementById('mousemove').innerText = 'Scroll down'
		}
		else {
			// document.getElementById('mousemove').innerText = imgNames[index - 1]
		}
		// document.getElementById(project).getElementsByClassName("img-name")[0].innerText = imgNames[index - 1];
		// }
	}
	// document.getElementById('mousemove').innerText = imgNames[index - 1]

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

const customCursor = document.getElementById('mousemove')
const headerName = document.getElementById('header')
const arrowNext = document.getElementById('nextArrow')
const arrowPrev = document.getElementById('prevArrow')
const overlayPage = document.getElementById("myNav")
const mainBody = document.getElementById("body")

customCursor.innerText = 'Lou&Charlene'

function openNav() {
	overlayPage.style.display = "block"
	customCursor.style.display = 'none'
	mainBody.style.cursor = 'default'
}

function closeNav() {
	overlayPage.style.display = "none"
	customCursor.style.display = 'block'
	mainBody.style.cursor = 'none'
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

