google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 8],
        ['Eat', 2],
        ['TV', 4],
        ['Gym', 2],
        ['Sleep', 8]
    ]);

    var options = {
        'title': 'My Average Day',
        'width': 600,
        'height': 400,
        colors: ['#DB2763', '#E04277', '#E45D8A', '#ED93B1', '#F6C9D8'],
        is3D: true
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}