
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
	
/*
This is to decide for which year we should calculate the CS, based on the data available
Based on the curent calendar year, we assume that the most recent complete year it's last year. 
If that's not present we take the most recent year in the header	
*/
	
	var headers = d3.keys(data[0]);
	console.log(headers);
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
	
	
    
})
 