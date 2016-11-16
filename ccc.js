var width = 1024;
var height = 768;
var ctrl = d3.select("body").append("svg").attr("width", width).attr("height", height);
d3.csv("https://pecu.github.io/D3/HistoricalQuotes.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){ return d.close; });
		var lines = d3.line().x(function(d,i){return i*(width/ln);})
		                     .y(function(d){return height-d.close*(height/maxy)});
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
	}
);