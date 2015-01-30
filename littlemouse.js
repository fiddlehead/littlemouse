const empty = 'images/emptyhouse.svg'
const mouse = 'images/mouse.svg'

inside = [
	empty,
	empty,
	empty,
	empty,
	empty,
	empty
]

$( document ).ready(function() {

	$("#red").click(function() {
		$(this).attr("src",inside[0]);
		if (inside[0] == mouse) {
			congrats();
			resetGame()
		}
	});

	$("#blue").click(function() {
		$(this).attr("src",inside[1]);
		if (inside[1] == mouse) {
			congrats();
			resetGame()
		}
	});

	$("#orange").click(function() {
		$(this).attr("src",inside[2]);
		if (inside[2] == mouse) {
			congrats();
			resetGame()
		}
	});

	$("#green").click(function() {
		$(this).attr("src",inside[3]);
		if (inside[3] == mouse) {
			congrats();
			resetGame()
		}
	});

	$("#yellow").click(function() {
		$(this).attr("src",inside[4]);
		if (inside[4] == mouse) {
			congrats();
			resetGame()
		}
	});

	$("#purple").click(function() {
		$(this).attr("src",inside[5]);
		if (inside[5] == mouse) {
			congrats();
			resetGame()
		}
	});
});

function congrats() {
	$.prompt("Congratulations\nYou found the mouse!\nClick OK to hide the mouse again.")
}

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

