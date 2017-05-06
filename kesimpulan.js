var bjHabibie = [0.89];
var gusDur = [-0.28,2.02];
var mega = [0.96,0.61,0.19];
var sby = [0.89,-0.39,-0.93,-1.01,-0.41,-0.74,-0.05,-0.97,-0.23,-0.20];
var jokowi = [0.17,-0.43];

Meteor.defer(function(){
  conclusionChart = new Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    yAxis: {
      title: {
        text: 'Rate (%)'
      }
    },
    series: [{
      name: 'B.J. Habibie',
      data: bjHabibie
    }, {
      name: 'K.H. Abdurrahman Wahid',
      data: gusDur
    }, {
      name: 'Megawati Soekarnopoetri',
      data: mega
    }, {
      name: 'Susilo Bambang Yudhoyono',
      data: sby
    }, {
      name: 'Joko Widodo',
      data: jokowi
    }]
  });
});

Template.body.helpers({
  createChart
});
