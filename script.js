import { routes, icons, zones  } from './data.js'
import { tooltip } from './tooltip.mjs'

am4core.ready(function() {
    am4core.useTheme(am4themes_animated);

  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.padding(0, 0, 0, 0);
  chart.background.fill = am4core.color("#dee3eeff");

  let title = chart.tooltipContainer.createChild(am4core.Label);
/*   title.text = "TransLink"; */
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

  function createLine(name, color, main, icon) {

    let series = chart.series.push(new am4charts.LineSeries());
    series.data = main;
    series.name = name;
    series.color = color;
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.dummyData = {
      icon : icon
    }
    series.strokeWidth =6;
    series.connect = false;
    series.stroke = color;
    
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.autoTextColor = false;
    series.tooltip.fontFamily = 'Arial '
    series.tooltip.fontWeight = 'bold'
    series.tooltip.dy = -7.5
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#052e51ff");//background border
    series.tooltip.background.stroke = am4core.color("#052e51ff");//background border
    series.tooltip.label.fill = am4core.color("#fff");//text
    
    series.propertyFields.strokeDasharray = "dash";

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    bullet.circle.fill = color
    /* bullet.circle.fill = am4core.color("#052e51ff"); */
    bullet.circle.stroke = am4core.color("#fff");
    bullet.circle.strokeWidth = 2;

    /* need to check if there is data for tooltip to render */
    if(series.data[0] && series.data[0].stationCode !== undefined){
    /* need to set both tooltiptext and tooltiphtml,
    the tooltiphtml isnt compatable with older browsers
    so tooltiptext is fallback  */
      bullet.circle.tooltipText = tooltip.text; 
      bullet.tooltipHTML = tooltip.html
    } else {
      bullet.circle.tooltipText = '{station}'
    }
  
    bullet.circle.strokeOpacity = .8;
    return series
  }
  function createPathingLine(name, color, data) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = name;
    series.hiddenInLegend = true;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth = 6;
    series.connect = false;
    
    series.propertyFields.strokeDasharray = "dash";
    return series
  }
  function createZoneLine(color, data) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.data = data;
    series.hiddenInLegend = true;

    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.stroke = color;
    series.strokeWidth =6;
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
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.autoTextColor = false;
    series.tooltip.fontFamily = 'Arial '
    series.tooltip.fontWeight = 'bold'
    series.tooltip.dy = -7.5
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#052e51ff");//background border
    series.tooltip.background.stroke = am4core.color("#052e51ff");//background border
    series.tooltip.label.fill = am4core.color("#fff");//text

    /* need to check if there is data for tooltip to render */
    if(series.data[0] && series.data[0].stationCode !== undefined){
    /* need to set both tooltiptext and tooltiphtml,
    the tooltiphtml isnt compatable with older browsers
    so tooltiptext is fallback  */
      bullet.circle.tooltipText = tooltip.text; 
      bullet.tooltipHTML = tooltip.html
    } else {
      bullet.circle.tooltipText = '{station}'
    }
  
    bullet.circle.strokeOpacity = .8;
    return series
  }
  function createIconPin(color, data, radius) {
    let series = chart.series.push(new am4charts.LineSeries());

    series.data = data;
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.hiddenInLegend = true;

    series.stroke = color
    series.strokeWidth = 1;
    series.connect = false;

    series.propertyFields.strokeDasharray = "dash";

    let icon = series.bullets.push(new am4plugins_bullets.PinBullet());
    icon.locationX = 1;
/*     icon.stroke = am4core.color('#fff'); */
    icon.stroke = am4core.color('#00000000');
    icon.background.fill = color
    icon.background.radius = radius
    icon.background.pointerBaseWidth = 10
    icon.background.pointerLength = 10
    icon.background.propertyFields.pointerAngle='angle'

    icon.image = new am4core.Image();
    icon.image.propertyFields.href = 'icon'
    icon.image.scale = .7;
    icon.circle.radius = am4core.percent(100);
    return series
  }
  function createBullet(label){

    let series = chart.series.push(new am4charts.LineSeries());
    let { size,  data, angle, align, icon } = {...label}
    let [horizontal, vertical] = [align[0], align[1]]
    series.data = data;
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.hiddenInLegend = true;

    let bullet = series.bullets.push(new am4charts.Bullet());
    let routeLabel = bullet.createChild(am4core.Image);

    routeLabel.width = size;
    routeLabel.height = size;
    routeLabel.horizontalCenter = horizontal;
    routeLabel.verticalCenter = vertical;
    routeLabel.rotation = angle;
    routeLabel.href = icon;

    return series
  }

const buildRoutes = (routes) => {
  
  let seriesMap = {};
  let masterSeries = createLine('Toggle All', null, null, 'cycle.png')
  routes.forEach(route => {
    const [name, color, main, icon, pathing, connectors, icons, label] = [
      route.name, 
      route.color, 
      route.main, 
      route.icon, 
      route.pathing,
      route.connectors,
      route.icons,
      route.label]

  seriesMap[name] = []
    /* pathing line is needed for any bend  in the 
    line that doesnt have a station/stop while create
    line is the main route with bullets for stations */

    /* pairing the pathing line with the main route so that 
    the user can toggle both lines from a single button in the 
    legend */
   // label !== undefined &&  seriesMap[name].push(createBullet( label.size, label.data, label.angle, label.icon))
    
  
    
    seriesMap[name].push(createLine(name, color, main, icon))
    seriesMap[name].push(createPathingLine(name, color, pathing))

    label !== undefined && seriesMap[name].push(createBullet( label))
    connectors !== undefined && seriesMap[name].push(createConnector(connectors))
    icons !== undefined && icons.forEach(icon => { seriesMap[name].push(createIconPin( icon.color, icon.data, icon.radius)) })
    //create a master toggle button
    masterSeries.events.on('hidden', () => {
      seriesMap[name][0].hide();
    })
    masterSeries.events.on('shown', () => {
      seriesMap[name][0].show();
    })
    //merge functionality for each route with all pathing and icons
    seriesMap[name][0].events.on('hidden', () => {
      seriesMap[name].forEach(series => {
        series.hide()
      });
    });
    seriesMap[name][0].events.on('shown', () => {
      seriesMap[name].forEach(series => {
        series.show()
      });
    });
  });

  icons.forEach(icon => {
    icon
    createIconPin( icon.color, icon.data, icon.radius)
  })
  zones.forEach(zone => {
    createZoneLine(zone.color, zone.data)
  })
/*   createConnector(connectors) */
}
buildRoutes(routes)

  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";
  chart.legend.useDefaultMarker = true;
  chart.legend.labels.template.text = "[bold ]{name}[/]";//{color}
  chart.legend.background.fill = am4core.color("#dee3eeff");
  let marker = chart.legend.markers.template;
  marker.disposeChildren();
  marker.width = 20;
  marker.height = 20;
  
  let icon = marker.createChild(am4core.Image);
  icon.width = 20;
  icon.height = 20;

  icon.adapter.add("href", function(href, target) {
  if (
    target.dataItem && 
    target.dataItem.dataContext && 
    target.dataItem.dataContext.dummyData) {
      return target.dataItem.dataContext.dummyData.icon;
  }
  else {
    return href;
  }
});

  let bg = chart.plotContainer.createChild(am4core.Image);
  bg.width = am4core.percent(100);
  bg.height = am4core.percent(100);
  bg.href = 'transitMapCleaned2.svg'
}); 