const container = document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {

// For loop to generate 20 bars
for (let i = 0; i < num; i += 1) {
	
	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;

	// To create element "div"
	const bar = document.createElement("div");

		// To add class "bar" to "div"
	bar.classList.add("bar");

		// Provide height to the bar
	bar.style.height = `${value * 3}px`;
	
	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;

	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar__id");

// Assign value to "label"
	barLabel.innerHTML = value;

	// Append "Label" to "div"
	bar.appendChild(barLabel);

	
	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}


// Asynchronous function to perform "Gnome Sort"
async function CombSort(delay = 400) {
let bars = document.querySelectorAll(".bar");

var pos = 0;

while (pos < 20) {
	if (pos == 0) {
	pos++;
	}

// Assigning value of posth bar into value1
	var value1 = parseInt(bars[pos].childNodes[0].innerHTML);

	
	var value2 = parseInt(bars[pos - 1].childNodes[0].innerHTML);

	
	if (value1 >= value2) {
	pos++;
	} else {
	
	
	bars[pos].style.backgroundColor = "red";

	
	bars[pos - 1].style.backgroundColor = "red";

	
	var temp1 = bars[pos].style.height;
	var temp2 = bars[pos].childNodes[0].innerText;

	
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	
	bars[pos].style.height = bars[pos - 1].style.height;
	bars[pos].childNodes[0].innerText =
			bars[pos - 1].childNodes[0].innerText;
	bars[pos - 1].style.height = temp1;
	bars[pos - 1].childNodes[0].innerText = temp2;
	pos--;
	}

	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 0.5)
	);

	// Providing skyblue color
	for (var x = 0; x < 20; x++) {
	bars[x].style.backgroundColor = "rgb(255,255,0)";
	}
}

// Providing lightgreen color
for (var x = 0; x < 20; x++) {
	bars[x].style.backgroundColor = "rgb(49, 226, 13)";
}


document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";


document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}


generatebars();


function generate() {
window.location.reload();
}


function disable() {


document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";


document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
