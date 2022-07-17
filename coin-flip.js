function flip(guess) {
    let result = Math.floor(Math.random() * 2) + 1;
	
	let message = document.getElementById("message");
	
	if (result == 1) {
		if (guess == "heads") {
			message.innerHTML = "Good guess!";
		}
		else { 
			message.innerHTML = "Try Again!";
		}
	}
	else {
		if (guess == "tails") {
			message.innerHTML = "Good guess!";
		}
		else {
			message.innerHTML = "Try Again!";
		}
	}
}