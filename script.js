import { routes, connectors, icons  } from './data.js'

am4core.ready(function() {
  /*   am4core.useTheme(am4themes_animated);
 */
  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.padding(0, 0, 0, 0);

  let title = chart.tooltipContainer.createChild(am4core.Label);
  /* title.text = "TransLink"; */
  title.fill = am4core.color("#00254b");
  title.fontSize = 25;
  title.width = am4core.percent(100);
  title.textAlign = "middle";
  title.x = 10;
  title.y = 10;

  function createAxis(list) {
    let axis = list.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.disabled = true;
    axis.renderer.baseGrid.disabled = true;
  }
  createAxis(chart.xAxes);
  createAxis(chart.yAxes);

  function createLine(name, color, data) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth =6;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
  }
  function createPathingLine(name, color, data) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 6;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";
  }
  function createConnector(data) {
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.hiddenInLegend = true;

    // Set up binding to data
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    // Set up appearance
    series.stroke = am4core.color("#999");
    series.strokeWidth = 12;
    series.connect = false;

    // Add bullets (stations)
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 8;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#999");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
  }
  function createIconPin(type, color, data) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color
    series.strokeWidth = 1;
    series.connect = false;

    series.propertyFields.strokeDasharray = "dash";
    let icon = series.bullets.push(new am4plugins_bullets.PinBullet());
    icon.locationX = 1;
    icon.stroke = am4core.color("#fff");
    icon.background.fill = color
    icon.background.radius=12
    icon.background.pointerBaseWidth=10
    icon.background.pointerLength=10
    icon.background.propertyFields.pointerAngle='angle'

    icon.image = new am4core.Image();
    icon.image.propertyFields.href = 'icon'
    icon.image.scale = .7;
    icon.circle.radius = am4core.percent(100);
  }

const buildRoutes = (routes) => {
  routes.forEach(route => {
    /* pathing line is needed for any bend  in the 
    line that doesnt have a station/stop while create
    line is the main route with bullets for stations */
    createPathingLine(route.name, route.color, route.pathing)
    route.main && createLine(route.name, route.color, route.main)
  });
  icons.forEach(icon => {
      createIconPin(icon.type, icon.color, icon.data)
  })
  createConnector(connectors)

}
buildRoutes(routes)

  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";

  var bg = chart.plotContainer.createChild(am4core.Image);
  bg.width = am4core.percent(100);
  bg.height = am4core.percent(100);

  bg.href = 'routetemplate2.png'
 /*  bg.href = 'transitMap.png' */
});