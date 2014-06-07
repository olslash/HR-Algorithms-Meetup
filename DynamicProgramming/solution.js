var size = 100;

var min = function() {
	var args = Array.prototype.slice.call(arguments);

	args = args.filter(function(val) {
		return !!val;
	});

	return Math.min.apply(null, args);
};

var findMinimumPath = function(input) {
	// Calculate down:
	for (var r = 0; r < size - 1; r++) { // for every row
		for (var c = 0; c < size; c++) { // for every element in that row
			//find its left and right neighbors
			var left = input[r][c - 1];
			var center = input[r][c];
			var right = input[r][c + 1];
			
			// choose the minimum element of those three consecutive elements, 
			// then update the row below with the choice.
			input[r+1][c] += min(left, center, right);
		}
		console.log(input[r].toString());
	}
	console.log(input[size - 1].toString());

	// Calculate back up:

	var result = [];
	var smallest = Infinity;
	var indexOfLowest;

	// Find the lowest value on the last row
	var lastRow = input[size - 1];
	smallest = min.apply(null, lastRow);
	indexOfLowest = lastRow.indexOf(smallest);

	console.log("iol is: " + indexOfLowest);
	result.unshift(indexOfLowest);

	for(r = size - 2; r >= 0; r--) { // for every row, starting one from lowest
		// look up and find lowest neighbor

		var left 	= [input[r][indexOfLowest - 1], indexOfLowest - 1];
		var center 	= [input[r][indexOfLowest], indexOfLowest];
		var right 	= [input[r][indexOfLowest + 1], indexOfLowest + 1];


		var minimum = min(left[0], center[0], right[0]);
		if ( minimum === left[0]) {
			indexOfLowest = left[1];	
		} else if(minimum === center[0]) {
			indexOfLowest = center[1];
		} else if(minimum === right[0]) {
			indexOfLowest = right[1];
		}
		 result.unshift(indexOfLowest);
	}
	console.log(result);
	return result;
};