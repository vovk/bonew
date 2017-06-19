$(document).ready(function($){
    function showTooltip(x, y, contents){
        $('<div id="tooltip">' + contents + '</div>').css( {position: 'absolute', display: 'none', top: y, left: x-200, padding: '10px'} ).appendTo("body").fadeIn(200);
    }



    var data, data1, data2, data3, options, chart1;

    data1 = [ [0, 700], [503.5, 1700], [1000.5, 1422], [1300, 1731], [1442, 2334], [1700, 2534], [1900, 2734] ];
    data = [{ data:data1, label: "random", lines: { show: true, fill: true /*фон под графиком*/, lineWidth: 5 }, xaxis:{ max: 2000 }, yaxis:{ max: 3000 }, 
                points: { show: true, fill: true, fillColor: "#3772F2", radius: 7  }, bars: { horizontal: true } }];

    options = {  xaxis:{ show: false }, grid: { clickable: true, hoverable: true, color: ["#989DAC"], /*margin: { left: 10 },*/ borderColor: { bottom: "#ccc", left: "#ccc", top: "#fff", right: "#fff" }, labelMargin: 20},
                series: { points: { show: true, fill: true, fillColor: "#3772F2", radius: 7  },  bars: { horizontal: true }}, colors: [["#3772F2"]] };


    // $("#placeholder-1").bind("plotclick", function (event, pos, item) {        
    //     if (item){
    //         chart1.highlight(item.series, item.datapoint);
    //     }
    // });
    
    $("#placeholder-1").bind("plothover", function (event, pos, item) {
        $("#tooltip").remove();
        if (item){
            var x = item.datapoint[0].toFixed(2);
            var y = item.datapoint[1].toFixed(2);

            // showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
            showTooltip(item.pageX, item.pageY, "<p class='graph-date'>3. June 2016</p>" + "<span class='graph-total'>Total sales</span>  " + "<a href='#' class='graph-value'>" + x + "</a>" + '<br>' + "<span class='graph-total'>Total earnings</span> " + "<a href='#' class='graph-value'>" + '$ ' + y + "</a>");
        }
    });

    chart1 = $.plot($("#placeholder-1"), data, options);
////////////////////////////////////////////////////////////////////////////////// 

    var data, data1, data2, data3, options, chart1;

    data1 = [ [0, 700], [503.5, 1700], [1000.5, 1422], [1300, 1731], [1442, 2334], [1700, 2534], [1900, 2734] ];
    data = [{ data:data1, label: "random", lines: { show: true, fill: true /*фон под графиком*/, lineWidth: 5 }, xaxis:{ max: 2000 }, yaxis:{ max: 3000 }, 
                points: { show: true, fill: true, fillColor: "#3772F2", radius: 7  }, bars: { horizontal: true } }];

    options = {  xaxis:{ show: false }, grid: { clickable: true, hoverable: true, color: ["#989DAC"], /*margin: { left: 10 },*/ borderColor: { bottom: "#ccc", left: "#ccc", top: "#fff", right: "#fff" }, labelMargin: 20},
                series: { points: { show: true, fill: true, fillColor: "#3772F2", radius: 7  },  bars: { horizontal: true }}, colors: [["#3772F2"]] };
    
    $("#placeholder-2").bind("plothover", function (event, pos, item) {
        $("#tooltip").remove();
        if (item){
            var x = item.datapoint[0].toFixed(2);
            var y = item.datapoint[1].toFixed(2);

            // showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
            showTooltip(item.pageX, item.pageY, "<p class='graph-date'>3. June 2016</p>" + "<span class='graph-total'>Total sales</span>  " + "<a href='#' class='graph-value'>" + x + "</a>" + '<br>' + "<span class='graph-total'>Total earnings</span> " + "<a href='#' class='graph-value'>" + '$ ' + y + "</a>");
        }
    });

    chart1 = $.plot($("#placeholder-2"), data, options);
//////////////////////////////////////////////////////////////////////////////////
    var data, data1, data2, data3, options, chart1;

    data1 = [ [0, 200], [503.5, 1250], [1000.5, 1422], [1300, 1731], [1442, 2222], [1700, 2534], [1784, 2734] ];
    data = [{ data:data1, label: "random", lines: { show: true, fill: true /*фон под графиком*/, lineWidth: 5 }, xaxis:{ max: 2000 }, yaxis:{ max: 3000 }, 
                points: { show: true, fill: true, fillColor: "#3772F2", radius: 7  }, bars: { horizontal: true } }];

    options = {  xaxis:{ show: false }, grid: { clickable: true, hoverable: true, color: ["#989DAC"], /*margin: { left: 10 },*/ borderColor: { bottom: "#ccc", left: "#ccc", top: "#fff", right: "#fff" }, labelMargin: 20},
                series: { points: { show: true, fill: true, fillColor: "#3772F2", radius: 7  },  bars: { horizontal: true }}, colors: [["#3772F2"]] };

    $("#placeholder-3").bind("plothover", function (event, pos, item) {
            $("#tooltip").remove();
            if (item){
                var x = item.datapoint[0].toFixed(2);
                var y = item.datapoint[1].toFixed(2);

                // showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                showTooltip(item.pageX, item.pageY, "<p class='graph-date'>3. June 2016</p>" + "<span class='graph-total'>Total sales</span>  " + "<a href='#' class='graph-value'>" + x + "</a>" + '<br>' + "<span class='graph-total'>Total earnings</span> " + "<a href='#' class='graph-value'>" + '$ ' + y + "</a>");
            }
        });

        chart1 = $.plot($("#placeholder-3"), data, options);

});





