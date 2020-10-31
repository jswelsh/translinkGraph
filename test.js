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
    series.strokeWidth = 0;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";


    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 1 //4;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
  }
/* function createStepLine(name, color, data) {
    let series = chart.series.push(new am4charts.StepLineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 6;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";


    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 1 //4;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
  } */

/* function createLineBreak(name, color, data) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 6;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";

/* 
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
     */
  }
 */
/* function createStepLine(name, color, data) {

  let series = chart.series.push(new am4charts.StepLineSeries());
  series.data = data;
  series.name = name;

  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  series.stroke = color;
  series.strokeWidth = 6;
  series.connect = false;

  series.propertyFields.strokeDasharray = "dash";

  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;
  bullet.circle.tooltipText = "{station}";
} */

function createIconPin(/* mode */ data) {
  let series = chart.series.push(new am4charts.LineSeries());
  series.data = data;
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  series.stroke = am4core.color("#1c59ae");
  series.strokeWidth = 1;
  series.connect = false;

  series.propertyFields.strokeDasharray = "dash";
  let icon = series.bullets.push(new am4plugins_bullets.PinBullet());
  icon.locationX = 1;
  icon.stroke = am4core.color("#fff");
  icon.background.fill =  am4core.color("#1c59ae");
  icon.background.radius=10
  icon.background.pointerBaseWidth=10
  icon.background.pointerLength=10
  icon.background.propertyFields.pointerAngle='angle'

  icon.image = new am4core.Image();
  icon.image.propertyFields.href = 'icon'
  icon.image.scale = .7;
  icon.circle.radius = am4core.percent(100);
}
/*   if(mode === 'y'){
    icon.dy = -5
  } else if(mode === 'x'){
    icon.dx = - 5
  } */



/*   
lineConstructor('x')
lineConstructor('y')  */
/* createConnector([
  { x: 33.8, y: 63.83}, 
  { x: 32.4, y: 61.8 }]
); */

createIconPin([
    { icon: 'seaBus1.png', angle: 45, offset: 'x', station: 'Vancouver City Centre', x: 19, y: 78.5},
    {},
    { icon: 'seaBus1.png', angle: 45, station: 'Park Royal', x: 13.7, y: 95.3 },
    {},
    { icon: 'plane.png', angle: 45,  station:'YVR Airport' , x: 8.7, y: 26.8 },
    {},
    { icon: 'seaBus1.png', angle: 0, station: 'Burrard',  x: 20.1, y: 82.73333 },
    {},
    { icon: 'seaBus1.png', angle: 135, station: 'Granville',  x: 24.25, y: 78.5 },

]);
/*  */
)









/* 
  { station: 'Production Way–University', x: 63.2, y: 63.83 },
  { station: 'Lougheed Town Centre', x: 66.85, y: 63.83 },
*/
createConnector([
  { station: 'Commercial–Broadway', x: 33.8, y: 63.83}, 
  { station: 'Commercial–Broadway', x: 32.4, y: 61.8 },
  {},
  { station: 'Production Way–University', x: 63.2, y: 63.515 },
  {},
  { station: 'Lougheed Town Centre', x: 66.85, y: 63.515 },
  {},
  { station: 'King George', x: 72.225, y: 23.15 },
  {},
  { station: 'Surrey Central', x: 72.225, y: 29.9 },
  {},
  { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625},
  {},
  { station: 'Broadway–City Hall', x: 22.625, y: 61.755},
  {},
  { station: 'UBC Exchange', x: 2.75, y: 61.8},
  {},
  { station: 'Waterfront', x: 23.75, y: 84.25},
  {},
  { station: 'Burrard', x: 21.46833, y: 84.25 },
  {},
  { station: 'Dunbar Loop', x: 9.85, y: 48.625 },
  {},
  { station: 'Kootenay Loop', x: 40.65, y: 81.75 },
  {},
  { station: 'VCC–Clark', x: 29.85, y: 66.55 },
  {},
  { station: 'Moody Centre', x: 73.64, y: 77.05},
  {},
  { station: 'SFU Exchange', x: 63.2, y: 81.75 },
  {}, 
  { station: 'Bridgeport', x: 22.625, y: 28.9 },
  {}, 
  { station: 'Newton Exchange', x: 72.5, y: 2.45 },
  {},
  { station: 'Guildford Exchange', x: 88.35, y: 30.95 },
  {},
  { station: 'Coquitlam Central', x: 80.5, y: 78 },
  {},
  { station: 'Haney Place', x: 98.525, y: 62.925 },
  {},
  { station: 'Park Royal', x: 14.4, y: 94.65 },
  {},
  { station: 'Lonsdale Quay', x: 30, y: 92.55 },
  { station: 'Lonsdale Quay', x: 28.6, y: 90.6 },

  {},
  { station: 'Phibbs Exchange', x: 41.53, y: 92.55 },
]
);
