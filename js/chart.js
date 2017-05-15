$(document).ready(function(){
    $('.modal').modal();
});


var currentSlide = 0;

var years = [];
var rates = [
    4.87, 4.69, 5.46, 6.36, 6.08, 8.10, 9.06, 9.67,
    9.86, 10.75, 10.36, 9.43, 8.42, 8.01, 7.27, 7.22,
    6.25, 6.02, 5.82, 5.99, 5.56
];

for (var year = 1996; year < 2017; year++) {
  years.push(year);
}



function showArrow(index) {
    $('.arrow').addClass("hide");
    $('.arrow' + '-' + index).removeClass("hide");
}

$('.annotations-arrow-next').click(function(e) {
    e.preventDefault();
    currentSlide = (currentSlide + 1) % 6;
    $('.main-chart-annotations').slick('slickGoTo', currentSlide);
    showArrow(currentSlide + 1);
});

$('.annotations-arrow-prev').click(function(e) {
    e.preventDefault();
    currentSlide = (currentSlide - 1) % 6;
    $('.main-chart-annotations').slick('slickGoTo', currentSlide);
    showArrow(currentSlide + 1);
});

let mainChart = Highcharts.chart("mainChart", {
    chart: {
        type: "line",
        style: {
            "fontFamily": "Roboto, sans-serif"
        },
        backgroundColor: "#36393E",
        events: {
            load: function(){
                this.ctooltip = new Highcharts.Tooltip(this, this.options.tooltip);
            }
        }
    },
    legend: {
          itemStyle: {
            color: "#d3d3d3",
            fontWeight: "500",
        },
        itemHoverStyle: {
             color: '#d3d3d3'
        },
    },
    plotOptions: {
        series: {
            events: {
                legendItemClick: function () {
                    $('.main-chart-annotations').slick('slickGoTo', this.userOptions.id);
                    var current = parseInt(this.userOptions.id) + 1;
                    showArrow(current);
                    currentSlide = current - 1;

                    return false;
                },
                click: function() {
                    $('.main-chart-annotations').slick('slickGoTo', this.userOptions.id);
                    var current = parseInt(this.userOptions.id) + 1;
                    showArrow(current);
                    currentSlide = current - 1;
                }
            },
            states: {
                hover: {
                    enabled: true,
                    lineWidth: 10
                }
            },
            lineWidth: 5
        },
        line: {
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        }
    },
    colors: ["#5f969b", "#d78158", "#5abd70", "#ce7dc1", "#7289DA", "#da7272"],
    credits: {
        text: "Visdat Cihuy",
        href: "http://visdat-cihuy.github.io"
    },
    title: {
        text: ""
    },
    xAxis: {
        lineColor: "#4a4d52",
        tickColor: '#4a4d52',
        title: {
            text: "Year",
            style: {
                color: "#d3d3d3",
            },
        },
        categories: years,
        labels: {
            style: {
                color: "#d3d3d3",
            },
        }
    },
    yAxis: {
        lineColor: "#4a4d52",
        gridLineColor: "#4a4d52",
        title: {
            text: "Rate (%)",
            style: {
                color: "#d3d3d3",
            },

        },
        labels: {
            style: {
                color: "#d3d3d3",
            },
        },
    },
    series: [
        {
            id: "0",
            name: "Monetary Crisis",
            data: rates.slice(0,2).map(function(item, pos){
                    return {
                        x: years[pos],
                        y: item
                    }
                })
        },
        {
            id: "1",
            name: "BJ Habibie",
            data: rates.slice(1,4).map(function(item, pos){
                    return {
                        x: years[pos + 1],
                        y: item
                    }
                })
        },
        {
            id: "2",
            name: "Abdurrahman Wahid",
            data: rates.slice(3,6).map(function(item, pos){
                    return {
                        x: years[pos + 3],
                        y: item
                    }
                })
        },
        {
            id: "3",
            name: "Megawati",
            data: rates.slice(5,9).map(function(item, pos){
                    return {
                        x: years[pos + 5],
                        y: item
                    }
                })
        },
        {
            id: "4",
            name: "SBY",
            data: rates.slice(8,19).map(function(item, pos){
                    return {
                        x: years[pos + 8],
                        y: item
                    }
                })
        },
        {
            id: "5",
            name: "Joko Widodo",
            data: rates.slice(18,21).map(function(item, pos){
                    return {
                        x: years[pos + 18],
                        y: item
                    }
                })
        }
    ],
    tooltip: {
        enabled: false
    }
});


var conclusionChart = Highcharts.chart('conclusionChart', {
    chart: {
        type: 'column',
        backgroundColor: '#36393E',
    },
    title: {
        text: ''
    },
    xAxis: {
        lineColor: "#4a4d52",
        tickColor: '#4a4d52',
        categories: ['Habibie', 'Abdurrahman Wahid', 'Megawati', 'Susilo Bambang Yudhoyono', 'Jokowi'],
        labels: {
            style: {
                color: "#d3d3d3",
            },
        }
    },
    yAxis: {
        gridLineColor: "#4a4d52",
        title: {
            text: 'percentage',
            style: {
                color: "#d3d3d3",
            }
        },
        labels: {
            style: {
                color: "#d3d3d3",
            },
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'percentage',
        showInLegend: false,
        borderWidth: 0,
        data: [
            {y: 0.45, color: '#d15353'},
            {y: 0.58, color: '#d15353'},
            {y: 0.44, color: '#d15353'},
            {y: -0.404, color: '#5ABD70'},
            {y:-0.115, color:'#5ABD70'}]
    }]
});