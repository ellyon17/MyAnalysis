d3.text("../data/CTOexport.csv", function(data) {
    input = d3.csvParseRows(data).map(function(row) {
        return row.map(function(value, index) {
			if(index == 1 || index == 2 || index == 4){
				return value;
			} else {
				return +value;
			}
        });
    });
	    // do stuff here
	
	console.log("il mio csv:");	
	console.log(input[1]);	
		
		
});

