
// find last year (to calculate CS)
function findCSyear(yr) {
	var d = new Date();
	var n = d.getFullYear() - 1;
	var CSyr = n.toString();
    return yr == CSyr;
}

// transform an array of strings into Int
function toIntArray(arr) {
    for (var i = 0; i < arr.length; i++) { 
        arr[i] = +arr[i]; 
    } 
    return arr;
}

d3.csv('/data/CTOexport.csv', function(error, data) {
//d3.csv('/data/CTOTest.csv', function(error, data) {
	
	var headers = d3.keys(data[0]);
	data.forEach(function(d){ 
		d["Publication Year"] = +d["Publication Year"]; 
		d.ISSN = +d.ISSN;
		d.Issue = +d.Issue;
		d.Volume = +d.Volume;
		d.subtotal = +d.subtotal;
		d.total = +d.total;
	});
	
	console.log(data[5]);
    
/*
This is to decide for which year we should calculate the CS, based on the data available
Based on the curent calendar year, we assume that the most recent complete year it's last year. 
If that's not present we take the most recent year in the header	
*/
	

	//console.log(headers);
	var CSyr = 0;
	
	var lastYr = headers.find(findCSyear);
 
	if(lastYr){
		CSyr = parseInt(lastYr);
	}else{
		var headers_int = toIntArray(headers);
		CSYr = d3.max(headers_int);
	}
	
	console.log("calculating CiteScore for "+CSyr);
	
/*
Make sure that there are articles from the 3 years antecedent the CiteScore year
*/
	var ctrl_1 = 0;
	var ctrl_2 = 0;

	data.forEach(function(d){ 

	if(d["Publication Year"] == (CSyr-1)){ctrl_1 = 1;};
	if(d["Publication Year"] == (CSyr-2)){ctrl_2 = 1;};	
	})
	if (ctrl_1+ctrl_2 == 2){ 
		console.log("We have all the data to calculate the IF!");
	} else {
		console.log(" You're missing some data to calculate the IF, remember to add citations from 2 years prior to "+CSyr);
	}




})
 