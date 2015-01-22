const empty = '/images/emptyhouse.svg'
const mouse = '/images/smallmouse.png'

inside = [
	empty,
	empty,
	empty,
	empty,
	empty,
	empty
]

/*
var red = {obj: $('#red'), house: "/images/redhouse.svg", inner: empty, covered: true}
var blue = {obj: $('#blue'), house: "/images/bluehouse.svg", inner: empty, covered: true}
var orange = {obj: $('#orange'), house: "/images/orangehouse.svg", inner: empty, covered: true}
var green = {obj: $('#green'), house: "/images/greenhouse.svg", inner: empty, covered: true}
var yellow = {obj: $('#yellow'), house: "/images/yellowhouse.svg", inner: empty, covered: true}
var purple = {obj: $('#purple'), house: "/images/purplehouse.svg", inner: empty, covered: true}

houses = [
	red,
	blue,
	orange,
	green,
	yellow,
	purple
]
*/

$( document ).ready(function() {
	/*
	for (var i in houses) {
		h = houses[i]
		console.log(h.house)
		h.obj.click(
			function() {
				console.log(h.house)
				h.obj.attr("src", h.house)
			}
		)
	}
	*/

	$("#red").click(function() {
		$(this).attr("src",inside[0]);
		if (inside[0] == mouse) {
			alert("YOU WIN! Play again.")
			resetGame()
		}
	});

	$("#blue").click(function() {
		$(this).attr("src",inside[1]);
		if (inside[1] == mouse) {
			alert("YOU WIN! Play again.")
			resetGame()
		}
	});

	$("#orange").click(function() {
		$(this).attr("src",inside[2]);
		if (inside[2] == mouse) {
			alert("YOU WIN! Play again.")
			resetGame()
		}
	});

	$("#green").click(function() {
		$(this).attr("src",inside[3]);
		if (inside[3] == mouse) {
			alert("YOU WIN! Play again.")
			resetGame()
		}
	});

	$("#yellow").click(function() {
		$(this).attr("src",inside[4]);
		if (inside[4] == mouse) {
			alert("YOU WIN! Play again.")
			resetGame()
		}
	});

	$("#purple").click(function() {
		$(this).attr("src",inside[5]);
		if (inside[5] == mouse) {
			alert("YOU WIN! Play again.")
			resetGame()
		}
	});
});

function resetGame() {
	resetHouses()
	moveMouse()
}

function resetHouses() {
	$("#red").attr("src", "/images/redhouse.svg")
	$("#blue").attr("src", "/images/bluehouse.svg")
	$("#green").attr("src", "/images/greenhouse.svg")
	$("#yellow").attr("src", "/images/yellowhouse.svg")
	$("#orange").attr("src", "/images/orangehouse.svg")
	$("#purple").attr("src", "/images/purplehouse.svg")
}

function moveMouse() {
	for (var color in inside) {
		inside[color] = empty
	}
	var rand = Math.floor(Math.random() * 6)
	inside[rand] = mouse
}

moveMouse()

