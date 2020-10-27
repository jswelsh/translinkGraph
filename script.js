am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

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
    var series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 2;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";


    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
  }
function createStepLine(name, color, data) {
    var series = chart.series.push(new am4charts.StepLineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 2;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";


    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
  }

    function createLineBreak(name, color, data) {
    var series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = name;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 2;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";


    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.stroke = am4core.color("#000");
    bullet.circle.strokeWidth = 2;
    bullet.circle.tooltipText = "{station}";
    
  }





  function createStepLine(name, color, data) {

  var series = chart.series.push(new am4charts.StepLineSeries());
  series.data = data;
  series.name = name;

  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  series.stroke = color;
  series.strokeWidth = 2;
  series.connect = false;

  series.propertyFields.strokeDasharray = "dash";

  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 1;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;
  bullet.circle.tooltipText = "{station}";
}

const lineConstructor = (axis) => {
  for (let index = 0; index < 100; index++) {
    let color = (index % 5 === 0 ) ? '#ad7400': '#0023ad'
    createLine(
      'indexssssssssssssssssssssssssssssssssss',
      am4core.color(color),
      [{
        station: index,
        x: (axis === 'x') ? index :0,
        y: (axis === 'y') ? index :0 
      }, {
        station: index,
        x: (axis === 'x') ? index :100,
        y: (axis === 'y') ? index :100 
      }]
    );
    
  }
}
/*   
lineConstructor('x')
lineConstructor('y')  */

createLine(
  'Millennium Line',
  am4core.color("#536"),[
  { station: 'VCC–Clark', x: 29.85, y: 66.55 },
  {},
  { station: 'Commercial–Broadway', x: 33.8, y: 63.83 },
  { station: 'Renfrew', x: 37.5, y: 63.83 },
  { station: 'Rupert', x: 41.15, y: 63.83 },
  { station: 'Gilmore', x: 44.75, y: 63.83 },
  { station: 'Brentwood Town Centre', x: 48.2, y: 63.83 },
  { station: 'Holdom', x: 51.9, y: 63.83 },
  { station: 'Sperling–Burnaby Lake', x: 55.65, y: 63.83 },
  { station: 'Lake City Way', x: 59.4, y: 63.83 },
  { station: 'Production Way–University', x: 63.2, y: 63.83 },
  { station: 'Lougheed Town Centre', x: 66.85, y: 63.83 },
  {},
  { station: 'Burquitlam', x: 70.75, y: 70.55 },
  {},
  { station: 'Moody Centre', x: 73.64, y: 77.05},
  { station: 'Inlet Centre', x: 77.15, y: 77.05},
  {},
  { station: 'Coquitlam Central', x: 80.5, y: 78},
  {},
  { station: 'Lincoln', x: 81, y: 83.65},
  { station: 'Lafarge Lake–Douglas', x: 81, y: 90.3},

  
]);
  createLineBreak(
  'Millennium Line',
  am4core.color('#4fe'),[
    { station: '1', x: 29.85, y: 66.55 },
    { station: '2', x: 30.96, y: 66.55 },
    { station: '3', x: 33, y: 63.83 },
    { station: '4', x: 33.8, y: 63.83 },
    {},
    { station: '5', x: 66.85, y: 63.83 },
    { station: '6', x: 69, y: 63.83 },
    { station: '7', x: 70.75, y: 66.1633333 },
    { station: '8', x: 70.75, y: 70.55 },
    { station: '9', x: 70.75, y: 75 },
    { station: '10', x: 72.2, y: 77.05},
    { station: '11', x: 73.64, y: 77.05},
    { station: '12', x: 77.15, y: 77.05},
    { station: '13', x: 79.5, y: 77.05},
    { station: '14', x: 80.5, y: 78.05},
    { station: '14', x: 81, y: 78.55},
    { station: '14', x: 81, y: 83.65},


  ])
  createLine(
  "99 B-Line",
  am4core.color('#f36617ff'),[
    { station: 'UBC Exchange', x: 2.75, y: 61.8},
    { station: 'Allison Rd–University Blvd', x: 5.1, y: 61.8},
    { station: 'Sasamat St–W 10th Ave', x: 7.5, y: 61.8},
    { station: 'Alma St–W Broadway', x: 9.85, y: 61.8},
    { station: 'Macdonald St–W Broadway', x: 12.6, y: 61.8},
    { station: 'Arbutus St–W Broadway', x: 15.3, y: 61.8},
    { station: 'Granville St–W Broadway', x: 17.7, y: 61.8},
    { station: 'Willow St–W Broadway', x: 20.7, y: 61.8},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755},
    { station: 'Main St–E Broadway', x: 25.175, y: 61.8},
    { station: 'Fraser St–E Broadway', x: 27.95, y: 61.8},
    { station: 'Clark Dr–E Broadway', x: 30.6, y: 61.8},
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8},
  ])
  createLine(
  "99 B-Line",
  am4core.color('#f36617ff'),[
    { station: 'Burrard', x: 21.6, y: 84.35 },
    { station: 'Granville St–W Hastings St', x: 23.55, y: 81.75 }, 
    { station: 'Abbott St–W Hastings St', x: 26.65, y: 81.75 }, 
    { station: 'Main St–E Hastings St', x: 29.45, y: 81.75 }, 
    { station: 'Commercial Dr–E Hastings St', x: 32.3, y: 81.75 }, 
    { station: 'Nanaimo St–E Hastings St', x: 35.15, y: 81.75 }, 
    { station: 'Renfrew St–E Hastings St', x: 38, y: 81.75 }, 
    { station: 'KootenayLoop', x: 40.65, y: 81.75 }, 
    { station: 'Gilmore Ave–Hastings St', x: 43.65, y: 81.75 }, 
    { station: 'Willingdon Ave–Hastings St', x: 46.4, y: 81.75 }, 
    { station: 'Hythe Ave–Hastings St', x: 49.15, y: 81.75 }, 
    { station: 'Holdom Ave–Hastings St', x: 52, y: 81.75 }, 
    { station: 'Kensington Ave–Hastings St', x: 54.85, y: 81.75 }, 
    { station: 'Duthie Ave–Hastings St', x: 57.7, y: 81.75 }, 
    { station: 'SFUTransportationCentre', x: 60.9, y: 81.75 }, 
    { station: 'SFUExchange', x: 63.2, y: 81.75 }, 
  ])
  createStepLine(
  'R1 King George Blvd',
  am4core.color('#149e42ff'),[
    { station: 'Guildford Exchange', x: 88.35, y: 30.95 },
    { station: '148th St–104th Ave', x: 85.35, y: 30.95 },
    { station: '144th St–104th Ave', x: 82.4, y: 30.95 },
    { station: '140th St–104th Ave', x: 79.45, y: 30.95 },
    { station: 'Whalley Blvd–104th Ave', x: 76.45, y: 30.95 },
    { station: 'Surrey Central', x: 72.9, y: 29.9 },
    { station: 'King George', x: 72.9, y: 23.15 },
    { station: '96th Ave–King George Blvd', x: 72.9, y: 18.35 },
    { station: '88th Ave–King George Blvd', x: 72.9, y: 14.35 },
    { station: '80th Ave–King George Blvd', x: 72.9, y: 10.4 },
    { station: '76th Ave–King George Blvd', x: 72.9, y: 6.45 },
    { station: 'Newton Exchange', x: 72.9, y: 2.45 },
  ])
/* createLine(
  "Expo Line",
  am4core.color('#1c59ae'),[
    { station: 'Waterfront', x: 23.75, y: 84.25},
    { station: 'bend in route'},
    { station: 'Burrard', x: 21.46833, y: 84.25 },
    { station: 'bend in route'},
    { station: 'Granville', x: 24, y: 78 }, 
    { station: 'Stadium-Chinatown', x: 26.25, y: 75 }, 
    { station: 'Main Street–Science World', x: 28.5, y: 72 }, 
    { station: 'bend in route'},
    { station: 'Commercial-Broadway', x: 32.4, y: 61.8},
    { station: 'bend in route'},
    { station: 'Nanaimo', x: 34.25, y: 56 },  //35,55 base
    { station: '29th Avenue', x: 36.65, y: 52.8}, 
    { station: 'Joyce–Collingwood', x: 39.875, y: 48.5 }, 
    { station: 'Patterson', x: 42.35, y: 45.2 }, 
    { station: 'Metrotown', x: 44.75,  y: 42 }, 
    { station: 'Royal Oak', x: 47.1875, y: 38.75 }, 
    { station: 'Edmonds', x: 49.6625, y: 35.45 }, 
    { station: 'bend in route'},
    { station: '22nd Street', x: 52.6625, y: 34.45 },
    { station: 'bend in route'}, 
    { station: 'New Westminster', x: 58.91235 , y:40  }, 
    { station: 'Columbia', x: 62.66235, y: 45 }, 
    { station: 'Sapperton', x: 68.13735, y: 52.3 }, 
    { station: 'bend in route'},
    { station: 'Braid', x: 70.7 ,y: 57.2 },
    { station: 'bend in route'},
    { station: 'Production Way–University', x: 63.2, y: 63.2 }, 
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.2 }, 
    {},
    { station: 'Scott Road', x: 69.025, y:42.3},
    {},
    { station: 'Gateway', x: 71.95, y: 36.15 },
    { station: 'Surrey Central', x: 71.95, y: 29.9 },
    { station: 'King George', x: 71.95, y: 23.15 },
  ]
  ) */
  createLineBreak(
  'Expo Line',
  am4core.color('#4fe'),[
    /* { station: 'Granville', x: 21.5, y: 84.66667 },  */
    {station: '1', x: 23.75, y: 84.25},//Waterfront 
    {station: '2', x: 22.65, y: 85.8255 }, 
    {station: '3', x: 22.65, y: 85.8255 }, 
   // {station: '4', x: 21.46833, y: 84.25 },
    {station: '5', x: 20.45, y: 82.73333 },
    {station: '6', x: 24, y: 78 },//Granville
    {station: '7',},
    {station: '8', x: 28.5, y: 72 },//Main Street–Science World
    {station: '9', x: 32.4, y: 66.8 },
    {station: '10', x: 32.4, y: 58.46667 }, 
    {station: '11', x: 34.25, y: 56 },//Nanaimo
    {station: '12',},
    {station: '13', x: 49.6625, y: 35.45 },
    {station: '14', x: 50.4125, y: 34.45 },
    //22nd street
    {station: '15', x: 54.75, y: 34.45 },
    {station: '16', x: 58.91235, y:40 },//New Westminster
    {station: '17',},
    {station: '18', x: 68.13735, y: 52.3 },//Sapperton
    {station: '19', x: 70.7, y: 55.716866667 },
    {station: '20', x: 70.7, y: 57.2 },
    {station: '21', x: 70.7, y: 61 },
    {station: '22', x: 69.05, y: 63.2 },
    {station: '23', x: 66.85, y: 63.2 },//Lougheed Town Centre
    {station: '24',}, //diverge at Columbia
    {station: '25', x: 63.63735, y: 46.3 },
    {station: '26', x: 66.2, y: 46.3 },
    {station: '27', x: 71.95, y: 38.4 },//bend after scottcRoad
    {station: '28', x: 71.95, y: 36.15 },//Gateway 

  ]
  )
createLine(
  "Canada Line-YVR 22222222222",
  am4core.color('#2382be'),[
  ]
);
createLineBreak(
  "Canada Line",
  am4core.color('#e37'),[
    { station: '1', x: 22.625, y: 66.5}, //'Olympic Village'
    { station: '2', x: 22.625, y: 69.40}, //bend in route
    { station: '3', x: 20.25, y: 72.645}, //Yaletown–Roundhouse 
    { station: '4', x: 17.75, y: 76.1}, //Yaletown–Roundhouse 
    { station: '5', x: 19.35, y: 78.25}, //bend in route

  ]
  )
createLine(
  "Canada Line",
  am4core.color('#0097c7'),[
    { station: 'Richmond-Brighhouse', x: 22.625, y: 9.15 }, 
    { station: 'Lansdowne', x: 22.625, y: 15.75 }, 
    { station: 'Aberdeen', x: 22.625, y: 22.3 },
    { station: 'Bridgeport', x: 22.625, y: 28.9 }, 
    { station: 'Marine Drive', x: 22.625, y: 35.45},
    { station: 'Langara–49th Avenue', x: 22.625, y: 42.},
    { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.6},
    { station: 'King Edward', x: 22.625, y: 55.2},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755},
    { station: 'Olympic Village', x: 22.625, y: 66.5},
    { station: 'bend in route'},
    { station: 'Yaletown–Roundhouse', x: 20.25, y: 72.645},
    { station: 'bend in route'},
    { station: 'Vancouver City Centre', x: 19.35, y: 78.25},
    { station: 'Waterfront', x: 23.75, y: 84.25}
    /*  { station: 'Yaletown–Roundhouse', x: 20.25, y: 72.645},
    { station: 'Vancouver City Centre', x: 19.25, y: 78.25},
    { station: 'Waterfront', x: 23.9, y: 84.25}, */
  ]
);
createLine(
  "Canada Line-YVR",
  am4core.color('#e2f'),[
    { station:'YVR Airport' , x: 8.7, y: 26.8 },
    { station: 'Sea Island Centre', x: 12.4, y: 26.8 },
    { station: 'Templeton', x: 16.15, y: 26.8 },

]);
createLineBreak(
  "Canada Line-YVR",
  am4core.color('#ee3'),[
    { station: '1', x: 16.15, y: 26.8 },
    { station: '2', x: 22.65, y: 26.8 },
  ]
)


/*   [{ station: 'Lonsdale Quay', x: 30, y: 92.5}] */
/* 


createLine(
  "Evergreen Extension Line",
  am4core.color("#ed6ea7"),[
    { station: 'Waterfront', x: 40.75, y: 59 },
]);

createLine(
  "West Coast Express",
  am4core.color("#ed6ea7"),[
    { station:'Waterfront' , x: 40.75, y: 59 },
]);
createLine(
  "R1 King George Blvd",
  am4core.color("#ed6ea7"),[
    { station:'Waterfront' , x: 40.75, y: 59 },
]);
createLine(
  "R2 Marine Dr",
  am4core.color("#ed6ea7"),[
    { station:'Waterfront' , x: 40.75, y: 59 },
]);
createLine(
  "R3 Lougheed Hwy",
  am4core.color("#ed6ea7"),[
    { station:'Waterfront' , x: 40.75, y: 59 },
]);

createLine(
  "R4 41st Ave",
  am4core.color("#ed6ea7"),[
    { station:'Waterfront' , x: 40.75, y: 59 },
]);
 */
  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";

  var bg = chart.plotContainer.createChild(am4core.Image);
  bg.width = am4core.percent(100);
  bg.height = am4core.percent(100);

  bg.href = 'routetemplate.png'
/*   bg.href = 'map.png' */

});