$(document).ready(function() {

    var colorChart = bb.generate({
        "data": {
            "columns": [
                ["data1", 0, 0, 0, 5, 5, 5],
                ["data2", 5, 5, 5, 0, 0, 0]
            ],
            "types": {
                "data1": "area-step",
                "data2": "area-stepg"
            },
            "colors": {
                "data1": "red",
                "data2": "blue"
            }
        },
        "size": {
                    "height": 550,
                    "width": 800
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


    var appointmentsChart = new Chart($("#appointmentsChart"), {
        type: 'line',

        data : {
            labels: ["2015","2016","2017"],

            datasets: [
                {
                    data:[21,15,18],
                    // fill: 'false',
                    borderColor:"gray",
                    backgroundColor:"lightgray"

                }
            ]
        },
        options: {
            legend: {
                display: false,
            },
            responsive: false,
            title: {
                fontSize:18,
                display: true,
                text: 'Number of Appointments per Cabinet'
            },
            label: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:false
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

    var somethingElseChart = new Chart($("#somethingElseChart"), {
        type: 'line',
        data : {
            labels: ["2015","2016","2017"],

            datasets: [
                {
                    data:[5,2,18],
                    borderColor:"gray",
                    backgroundColor:"lightgray",

                }
            ]
        },
        options: {
            legend: {
                display: false,
                position:"top"
            },
            responsive: false,
            title: {
                fontSize:18,
                display: true,
                text: 'Something Else Chart'
            },
            label: {
                display: true,
                labels: {
                    boxWidth: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:false
                    },
                    gridLines: {
                        display: false,
                        color:"white"
                    },

                }],

                xAxes: [{
                    gridLines: {
                        display:true
                    },
                    display: false
                }]


            }
        }
    });

    var yearsChart = new Chart($("#yearsChart"), {
        type: 'line',
        data : {
            labels: ["2015","2016","2017"],
            datasets: [
                {
                    data:[0,0,0],
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
            labels: ["Obama","","Trump"],
            datasets: [
                {
                    data:[0,0,0],
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


    $.getJSON("data/american-cabinet.json", function(json) {
        console.log(json[226]);
        console.log(json[227]);
        console.log(json[228]);

    });
});