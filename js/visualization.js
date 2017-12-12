Array.prototype.max = function() {
    return Math.max.apply(null, this);
};


function calculateAverage(data) {
    var sum = 0;
    for (var i=0; i<data.length; i++) {
        sum += data[i];
    }
    var rawAverage = sum/data.length;

    return Math.round(rawAverage * 100) / 100;

}
function drawChart(data, labels, container, title) {
    var average = calculateAverage(data);
    var chart = new Chart(container, {
        type: 'line',
        data : {
            labels:labels,

            datasets: [
                {
                    data: Array.apply(null, new Array(LENGTH_OF_ARRAY)).map(Number.prototype.valueOf,average),
                    fill: false,
                    radius: 2,
                    borderWidth:0,
                    borderColor:"rgba(0,255,0,0.0)",
                    label: "Average",
                    backgroundColor: "rgba(0,255,0,0.2)"
                },
                {
                    data: Array.apply(null, new Array(LENGTH_OF_ARRAY)).map(Number.prototype.valueOf,data[LENGTH_OF_ARRAY-1]),
                    fill: false,
                    radius: 2,
                    borderWidth:0,
                    fillColor:"white",
                    borderColor:"rgba(255,0,0,0)",
                    label: "Trump",
                    backgroundColor: "rgba(225,0,0,0.2)"
                },
                {
                    // label:"",
                    borderWidth: 2,
                    data:data,
                    borderColor:"#cccccc",
                    backgroundColor:"rgba(232,232,232,1)",

                },

            ]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            responsive: false,
            title: {
                fontSize:16,
                display: true,
                text: title
            },
            label: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                        // max: 20,
                        // stepSize: 1
                    },
                    gridLines: {
                        display: false,
                        color:"white"
                    }
                }],

                xAxes: [{
                    display: false
                }]


            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 25,
                    bottom: 0
                }
            }
        }
    });
}

function drawLabelChart(data, labels, container, paddingBottom) {
    var labelChart = new Chart(container, {
        type: 'line',
        data : {
            labels: labels,
            datasets: [
                {
                    data:data,
                    label: "",
                    fill:"red",
                    backgroundColor:"white",
                    borderColor:"white",
                }
            ]
        },
        options: {
            defaultColor: "red",
            defaultFontColor:"red",
            fontColor: 'red',
            legend: {
                labels: {
                    fontColor: 'red' //set your desired color
                }
            },
            responsive: false,
            title: {
                display: false,
                text: 'Year'
            },
            // legend: {
            //     display:false,
            //     labels: {
            //         fontColor: 'red'
            //     }
            // },
            scales: {
                yAxes: [{
                    // ticks: {
                    //     beginAtZero:false
                    // },
                    display:false


                }],

                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        color:"white"
                    },
                    ticks: {
                        color:"white",
                        // autoSkip: false,
                        maxRotation: 90,
                        minRotation: 90
                    }
                }]


            },
            layout: {
                padding: {
                    left: 15,
                    right: 15,
                    top: 0,
                    bottom: paddingBottom
                }
            }

        }
    });
    // Chart.defaults.global.defaultFontColor = 'green';

}


function drawCharts(data, senateMajorityHeight) {
    // var SenateMajorityColorChart = bb.generate({
    //     "data": {
    //         "columns": [
    //             data.SenateMajority.Republican,
    //             data.SenateMajority.Democrat,
    //             data.SenateMajority.Other
    //         ],
    //         "types": {
    //             "republican": "area-step",
    //             "democrat": "area-step",
    //             "other": "area-step"
    //         },
    //         "colors": {
    //             "republican": "red",
    //             "democrat": "blue",
    //             "other": "gray"
    //         }
    //     },
    //     "size": {
    //         "height": senateMajorityHeight,
    //         "width": 1200
    //     },
    //
    //     "axis": {
    //         y: {
    //             show:false,
    //             padding: {
    //                 top: 0,
    //                 bottom: 0
    //             }
    //
    //         },
    //         x: {
    //             tick: {
    //                 outer: false
    //             },
    //             show:false
    //
    //         }
    //     },
    //     "bindto": "#cabinetChart",
    //     "legend": {
    //         "show": false
    //     },
    //     "tooltip": {
    //         "show": false
    //     }
    // });

    var AdminPartyColorChart = bb.generate({
        "data": {
            border: {
                show:false
            },
            "columns": [
                data.AdminParty.Republican,
                data.AdminParty.Democrat,
                data.AdminParty.Other
            ],
            "types": {
                "republican": "area-step",
                "democrat": "area-step",
                "other": "area-step"
            },
            "colors": {
                "republican": "red",
                "democrat": "blue",
                "other": "gray"
            }
        },
        "size": {
            "height": 180,
            "width": 1200
        },

        "axis": {
            y: {
                show:false,
                padding: {
                    top: 0,
                    bottom: 0
                }

            },
            x: {
                tick: {
                    outer: false
                },
                show:false


            }
        },
        "bindto": "#adminPartyChart",
        "legend": {
            "show": false
        },
        "tooltip": {
            "show": false
        }
    });

    $("#avgDaysServedChart").remove();
    if ($('#AvgDaysServed').prop('checked') === true) {
        $("#cabinetCharts").append('<canvas id="avgDaysServedChart" width="1200" height="200"></canvas>');
        drawChart(data.AvgDaysServed, data.Year, $("#avgDaysServedChart"), 'Average Days Served');
    }

    $("#appointmentsChart").remove();
    if ($('#numAppointments').prop('checked') === true) {
        $("#cabinetCharts").append('<canvas id="appointmentsChart" width="1200" height="200"></canvas>');
        drawChart(data.NumAppointments, data.Year,  $("#appointmentsChart"), 'Number of Appointments per Cabinet');
    }

    $("#avgEaseOfConfirmationChart").remove();
    if ($('#avgEaseOfConfirmation').prop('checked') === true) {
        $("#cabinetCharts" ).append('<canvas id="avgEaseOfConfirmationChart" width="1200" height="200"></canvas>');
        drawChart(data.AvgEaseOfConfirmation, data.Year,  $("#avgEaseOfConfirmationChart"), 'Average Ease of Confirmation');
    }

    $("#perMinorityChart").remove();
    if ($('#perMinority').prop('checked') === true) {
        $( "#cabinetCharts" ).append('<canvas id="perMinorityChart" width="1200" height="200"></canvas>');
        drawChart(data.PerMinority, data.Year,  $("#perMinorityChart"), '% Minority');
    }

    $("#perMaleChart").remove();
    if ($('#perMale').prop('checked') === true) {
        $("#cabinetCharts").append('<canvas id="perMaleChart" width="1200" height="200"></canvas>');
        drawChart(data.PerMale, data.Year,  $("#perMaleChart"), '% Male');
    }

    $("#perMilitaryChart").remove();
    if ($('#perMilitary').prop('checked') === true) {
        $("#cabinetCharts").append('<canvas id="perMilitaryChart" width="1200" height="200"></canvas>');
        drawChart(data.PerMilitary, data.Year,  $("#perMilitaryChart"), '% Served in the Military');
    }

    $("#presidentChart").remove();
    $( "#cabinetCharts" ).after('<canvas id="presidentChart" width="1200" height="200"></canvas>');
    drawLabelChart(data.Zero, data.Administration, $("#presidentChart"), 150);

    $("#yearsChart").remove();
    $( "#cabinetCharts" ).after('<canvas id="yearsChart" width="1200" height="100"></canvas>');
    drawLabelChart(data.Zero, data.Year, $("#yearsChart"),0);
}
var FROM_YEAR = 1789;
var TO_YEAR = 2017;
var LENGTH_OF_ARRAY = 229;

$(document).ready(function() {



    $('#AvgDaysServed').change(function() {
        if(this.checked){
            $('#avgDaysServedChart').show();
        }
        else {
            $('#avgDaysServedChart').hide();
        }
        drawChartSliderChange();
    });

  $('#numAppointments').change(function() {
      if(this.checked){
        $('#appointmentsChart').show();
      }
      else {
        $('#appointmentsChart').hide();
      }
      drawChartSliderChange();
  });

  $('#avgEaseOfConfirmation').change(function() {
      if(this.checked){
        $('#avgEaseOfConfirmationChart').show();
      }
      else {
        $('#avgEaseOfConfirmationChart').hide();
      }
      drawChartSliderChange();
  });

  $('#perMinority').change(function() {
      if(this.checked){
        $('#perMinorityChart').show();
      }
      else {
        $('#perMinorityChart').hide();
      }
      drawChartSliderChange();
  });

  $('#perMale').change(function() {
      if(this.checked){
        $('#perMaleChart').show();
      }
      else {
        $('#perMaleChart').hide();
      }
      drawChartSliderChange();
  });

  $('#perMilitary').change(function() {
      if(this.checked){
        $('#perMilitaryChart').show();
      }
      else {
        $('#perMilitaryChart').hide();
      }
      drawChartSliderChange();
  });

  drawChartSliderChange();
  $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 1789,
            max: 2017,
            from: 1789,
            to: 2017,
            step: 1,
            grid: true,
            onChange: function (d) {
              TO_YEAR = d.to;
              FROM_YEAR = d.from;
              drawChartSliderChange();
    }

        });

    function drawChartSliderChange() {
        $.getJSON("data/american-cabinet.json", function(jsonArray) {

        var clonedArray = JSON.parse(JSON.stringify(jsonArray));

        var data = {
            NumAppointments: [],
            Year: [],
            AvgDaysServed: [],
            SenateMajorityA: [],
            SenateMajorityB: [],
            Zero: [],
            Administration: [],
            PerMale: [],
            PerMinority: [],
            PerMilitary: [],
            PerDegrees:[],
            AvgEaseOfConfirmation:[],
            SenateMajority: {
                "Republican": ["republican"],
                "Democrat": ["democrat"],
                "Other": ["other"]
            },
            AdminParty: {
                "Republican": ["republican"],
                "Democrat": ["democrat"],
                "Other": ["other"]
            }
        };
        var previousAdministration = "none";
        LENGTH_OF_ARRAY = 0;
        for (var index=0; index < clonedArray.length; index++) {
            var row = clonedArray[index];
            if ((row.Year >= FROM_YEAR) && (row.Year <=TO_YEAR)) {
              LENGTH_OF_ARRAY = LENGTH_OF_ARRAY + 1;
            data.NumAppointments.push(row.NumAppointments);
            data.AvgDaysServed.push(row.AvgDaysServed);
            data.AvgEaseOfConfirmation.push(row.AvgEaseOfConfirmation);
            data.PerMilitary.push(row.PerMilitary);
            data.PerDegrees.push(row.PerDegrees);
            data.PerMinority.push(row.PerMinority);
            data.PerMale.push(row.PerMale);
            data.Zero.push(0);

            var newAdministration = row.Administration;
            if (previousAdministration === row.Administration) {
                data.Administration.push("");
                data.Year.push("");

            } else {
                // var administrationTokens = newAdministration.split(" ");
                data.Administration.push(newAdministration);
                data.Year.push(row.Year);
                previousAdministration = newAdministration;
            }

            if (row.SenateMajority === "Republican") {
                data.SenateMajority.Republican.push(1);
                data.SenateMajority.Democrat.push(0);
                data.SenateMajority.Other.push(0);
            } else if (row.SenateMajority === "Democrat") {
                data.SenateMajority.Republican.push(0);
                data.SenateMajority.Democrat.push(1);
                data.SenateMajority.Other.push(0);
            } else {
                data.SenateMajority.Republican.push(0);
                data.SenateMajority.Democrat.push(0);
                data.SenateMajority.Other.push(1);
            }

            if (row.AdminParty === "Republican") {
                data.AdminParty.Republican.push(1);
                data.AdminParty.Democrat.push(0);
                data.AdminParty.Other.push(0);
            } else if (row.AdminParty === "Democrat") {
                data.AdminParty.Republican.push(0);
                data.AdminParty.Democrat.push(1);
                data.AdminParty.Other.push(0);
            } else {
                data.AdminParty.Republican.push(0);
                data.AdminParty.Democrat.push(0);
                data.AdminParty.Other.push(1);
            }
          }
        }

        var checkboxArray = ['#perMinority', '#avgEaseOfConfirmation', '#numAppointments', '#AvgDaysServed', '#perMale', '#perMilitary'];
        var checkCounter = 0;
        for (var c = 0; c < checkboxArray.length; c++) {
          if ($(checkboxArray[c]).prop('checked') === true){
            checkCounter++;
          }
        }
        var senateMajorityHeight =(200 * checkCounter) + 100;
        $("#adminPartyChartContainer").css("top", senateMajorityHeight);
        $("#controls").css("top", senateMajorityHeight + 200);
        drawCharts(data, senateMajorityHeight);


    });
  };
});
