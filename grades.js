var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

//Create variables for each grade and set them equal to 0
//To be used as a counter for each grade
var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;

//for loop to loop through the array of student grades
for (var i = 0; i < scores.length; i++) {
	//Every score less than 60 in the array will add 1 to the F counter
	if (scores[i] < 60) {
		F += 1;
		//Every score between 61 and 70 in the array will add 1 to the D counter
	} else if (scores[i] < 71 && scores[i] > 60) {
			D += 1;
		//Every score between 71 and 80 in the array will add 1 to the C counter
	} else if (scores[i] < 81 && scores[i] > 70) {
			C += 1;
		//Every score between 81 and 90 in the array will add 1 to the B counter
	} else if (scores[i] < 91 && scores[i] > 80) {
			B += 1;
			//Every score higher than 91 in the array will add 1 to the A counter
	} else {
		A += 1;
	}
};

//Test to see if the counter is correctly counting the grades and assigning them to a letter grade
console.log("A:", A, "B:", B, "C:", C, "D:", D, "F:", F);

//A function to select the highest number in an array stored in a variable
var max = Math.max.apply(null, scores);

//A function to select the lowest number in an array stored in a variable
var min = Math.min.apply(null, scores);

//Test to see if the highest and lowest numbers are being selected from the array
console.log("Highest Score:", max, "Lowest Score:", min);