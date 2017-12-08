Array.prototype.max = function() {
    return Math.max.apply(null, this);
};


$(document).ready(function() {





    function drawCharts(data) {
        var colorChart = bb.generate({
            "data": {
                "columns": [
                    ["data1", 0, 0, 0, 5, 5, 5],
                    ["data2", 5, 5, 5, 0, 0, 0]
                ],
                "types": {
                    "data1": "area-step",
                    "data2": "area-step"
                },
                "colors": {
                    "data1": "red",
                    "data2": "blue"
                }
            },
            "size": {
                "height": 550,
                "width": 1200
            },

            "axis": {
                y: {
                    show:false
                },
                x: {
                    show:false
                }
            },
            "bindto": "#cabinetChart",
            "legend": {
                "show": false
            },
            "tooltip": {
                "show": false
            }
        });

        var avgDaysServedChart = new Chart($("#avgDaysServedChart"), {
            type: 'line',
            data : {
                labels:data.Year,

                datasets: [
                    {
                        borderWidth: 1,
                        data:data.AvgDaysServed,
                        borderColor:"gray",
                        backgroundColor:"lightgray",

                    }
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
                    display: false,
                },
                responsive: false,
                title: {
                    fontSize:16,
                    display: true,
                    text: 'Average Days Served'
                },
                label: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            // max: 20,
                            // stepSize: 1
                        },
                        gridLines: {
                            display: false,
                            color:"white"
                        },


                    }],

                    xAxes: [{
                        display: false
                    }]


                }
            }
        });

        var appointmentsChart = new Chart($("#appointmentsChart"), {
            type: 'line',

            data : {
                labels: data.Year,

                datasets: [
                    {
                        borderWidth: 1,
                        data:data.NumAppointments,
                        // fill: 'false',
                        borderColor:"gray",
                        backgroundColor:"lightgray"

                    }
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
                    display: false,
                },
                responsive: false,
                title: {
                    fontSize:16,
                    display: true,
                    text: 'Number of Appointments per Cabinet'
                },
                label: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            // max: 20,
                            // stepSize: 1
                        },
                        gridLines: {
                            display: false,
                            color:"white"
                        },


                    }],

                    xAxes: [{
                        display: false
                    }]


                }
            }
        });

        var appointmentsChart2 = new Chart($("#2appointmentsChart"), {
            type: 'line',

            data : {
                labels: data.Year,

                datasets: [
                    {
                        borderWidth: 1,
                        data:data.NumAppointments,
                        // fill: 'false',
                        borderColor:"gray",
                        backgroundColor:"lightgray"

                    }
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
                    display: false,
                },
                responsive: false,
                title: {
                    fontSize:16,
                    display: true,
                    text: 'Number of Appointments per Cabinet'
                },
                label: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            // max: 20,
                            // stepSize: 1
                        },
                        gridLines: {
                            display: false,
                            color:"white"
                        },


                    }],

                    xAxes: [{
                        display: false
                    }]


                }
            }
        });



        var yearsChart = new Chart($("#yearsChart"), {
            type: 'line',
            data : {
                labels: data.Year,
                datasets: [
                    {
                        data:data.Zero,
                        label: "",
                        fill:"white",
                        backgroundColor:"white",
                        borderColor:"white"


                    }
                ]
            },
            options: {
                responsive: false,
                title: {
                    display: false,
                    text: 'President'
                },
                legend: {
                    display:false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        },
                        display:false


                    }],

                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            color:"white"
                        }

                    }]


                }

            }
        });

        var presidentChart = new Chart($("#presidentChart"), {
            type: 'line',
            data : {
                labels: data.Administration,
                datasets: [
                    {
                        data:data.Zero,
                        label: "",
                        fill:"white",
                        backgroundColor:"white",
                        borderColor:"white"

                    }
                ]
            },
            options: {
                responsive: false,
                title: {
                    display: false,
                    text: 'President'
                },
                legend: {
                    display:false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:false
                        },
                        display:false


                    }],

                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            color:"white"
                        },
                        ticks: {
                            color:"white"
                        }
                    }]


                }

            }
        });
    }

    $.getJSON("data/american-cabinet.json", function(jsonArray) {
        var clonedArray = JSON.parse(JSON.stringify(jsonArray));

        var data = {
            NumAppointments: [],
            Year: [],
            AvgDaysServed: [],
            SenateMajorityA: [],
            SenateMajorityB: [],
            Zero: [],
            Administration: []
        };

        for (var index=0; index < clonedArray.length; index++) {
            var row = jsonArray[index];
            data.NumAppointments.push(row.NumAppointments);
            data.Year.push(row.Year);
            data.AvgDaysServed.push(row.AvgDaysServed);
            data.Zero.push(0);
            data.Administration.push(row.Administration);

        }

        drawCharts(data);





        console.log(jsonArray[226]);
    });
});