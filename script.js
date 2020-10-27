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

    console.log(data)
    if(name.station !== 'Olympic Village') {
      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.radius = 6;
      bullet.circle.fill = am4core.color("#fff");
      bullet.circle.stroke = am4core.color("#000");
      bullet.circle.strokeWidth = 2;
      bullet.circle.tooltipText = "{station}";
    }
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


/*       let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.radius = 6;
      bullet.circle.fill = am4core.color("#fff");
      bullet.circle.stroke = am4core.color("#000");
      bullet.circle.strokeWidth = 2;
      bullet.circle.tooltipText = "{station}"; */
    
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
  bullet.circle.radius = 6;
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

/*   lineConstructor('x')
  lineConstructor('y')  */

  createLine(
  "Canada Line-YVR 22222222222",
  am4core.color('#2382be'),[
  ]
);
createLineBreak(
 // "Canada Line-YVR 22222222222",
  am4core.color('#2382be'),[
    { x: 22.625, y: 66.65}, //'Olympic Village'
    { x: 22.625, y: 69.40}, //bend in route
    { x: 20.25, y: 72.645}, //Yaletown–Roundhouse 
    { x: 17.75, y: 76.1}, //Yaletown–Roundhouse 
    { x: 19.35, y: 78.25}, //bend in route

  ]
  )
createLine(
  "Canada Line-YVR",
  am4core.color('#2382be'),[
    { station: 'Richmond-Brighhouse', x: 22.625, y: 9.15 }, 
    { station: 'Lansdowne', x: 22.625, y: 15.865 }, 
    { station: 'Aberdeen', x: 22.625, y: 22.575 },
    { station: 'Bridgeport', x: 22.625, y: 29 }, 
    { station: 'Marine Drive', x: 22.625, y: 35.595},
    { station: 'Langara–49th Avenue', x: 22.625, y: 42.12},
    { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.6},
    { station: 'King Edward', x: 22.625, y: 55.275},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755},
    { station: 'Olympic Village', x: 22.625, y: 66.65},
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
  am4core.color('#2382be'),[
    { station:'YVR Airport' , x: 8.75, y: 26.8 },
    { station: 'Sea Island Centre', x: 12.30, y: 26.8 },
    { station: 'Templeton', x: 16.30, y: 26.8 },

]);
createLineBreak(
  //"Canada Line-YVR",
  am4core.color('#2382be'),[
    { station: 'Templeton', x: 16.30, y: 26.8 },
    { station: 'Bridgeport', x: 22.65, y: 26.8 },
  ]
  )

  createLine(
  "Canada Line-YVR",
  am4core.color('#2382be'),[
    { station: 'Granville', x: 24, y: 78 }, 
    { station: 'Stadium-Chinatown', x: 26.25, y: 75 }, 
    { station: 'Main Street–Science World', x: 28.5, y: 72 }, 
    { station: 'bend in route'},//slope 2.2
    { station: 'Nanaimo', x: 34.25, y: 56 },  //35,55 base
    { station: '29th Avenue', x: 36.65, y: 52.8}, 
    { station: 'Joyce–Collingwood', x:42.35, y: 45.2 }, /*  x: 39.425, y: 58.7 */
    { station: 'Patterson', x:42.35, y: 45.2 }, 
    { station: 'Metrotown', x: 36.65, y: 52.8 }, 
    { station: 'Royal Oak', x: 36.65, y: 52.8 }, 
    { station: 'Edmonds', x: 36.65, y: 52.8 }, 
    {},
    { station: 'Nanaimo', x: 50, y: 35 }, 
   /*  { station: '22nd Street', x: 36.65, y: 52.8} */, 
    
    
    




  ]
  )
/*   [{ station: 'Lonsdale Quay', x: 30, y: 92.5}] */

/*     { station: 'Lansdowne', x: 22.75, y: 29 }, 
    { station: 'Aberdeen', x: 22.75, y: 34.75 },
    { station: 'Bridgeport', x: 22.75, y: 40.50 }, 
    { station: 'olympic', x: 22.75, y: 46 }, 
    { station: 'olympic', x: 22.75, y: 51.5 }, 
    { station: 'olympic', x: 22.75, y: 57.1 }, 
    { station: 'olympic', x: 22.75, y: 62.75 }, 
    { station: 'olympic', x: 22.75, y: 68.5 }, 
    { station: 'olympic', x: 22.75, y: 72.55 } */
/* 
createLine(
  "Canada Line-YVR 22222222222",
  am4core.color("#ed6ea7"),[
    { station:'YVR Airport' , x: 8.75, y: 39 },
    { station: 'Sea Island Centre', x: 12.30, y: 39 },
    { station: 'Templeton', x: 16.30, y: 39 },
    { station: 'Bridgeport', x: 22.75, y: 40.50 },
]);
createLine(
  "Millennium Line",
  am4core.color("#ed6ea7"),[
    { station: 'Waterfront', x: 40.75, y: 59 },
]);
createLine(
  "Evergreen Extension Line",
  am4core.color("#ed6ea7"),[
    { station: 'Waterfront', x: 40.75, y: 59 },
]);
createLine(
  "Millennium Line",
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

});