
# TransLink Map
TransLink Map is an interactive web app that was inspired by their static ['Fast and Frequent Transit Network'](http://infomaps.translink.ca/System_Maps/171/Fast_and_Frequent_Transit_Map.pdf) map. It started out as just a simple XY-graph built off of amCharts but is slowly growing in scale as features are added. Inkscape and gimp were two graphic tools I used to modify pre-existing assets as well as built custom ones.

# Technologies
![css](Images/css_badgev1.svg)![js](Images/js_badgev1.svg)![html](Images/html_badgev1.svg)![amcharts](Images/amcharts_dark_long_badgev1.svg)

  

## App Screenshots
- [Station label popup](https://github.com/jswelsh/translinkGraph/blob/master/public/transitScreenShot.png)
- [Station routes hidden](https://github.com/jswelsh/translinkGraph/blob/master/public/transitScreenShot2.png)

## Functionality and Limitations

**TransLink Map** is an interactive web app that was inspired by their static ['Fast and Frequent Transit Network']. Currentlty it allows users to scroll over stations, showning basic information of each station (assuming the data is avaiable). User's can toggle specific routes to be hidden or visible. Specific stations that are key access points for YVR airport or BC ferries are highlighted with pins.

## Project Status
This project was to further explore amCharts library functionality. Lately I've only included amCharts as a small component to a large application, for this application I wanted to see amCharts as the focus for utility. The biggest time sink for this project was initially scrapping the data for stations manually from [transLink](https://new.translink.ca/) and[ transit wiki](https://cptdb.ca/wiki/index.php/TransLink). If I add more stations, routes or data points, I would likely reach out to transLink to get source data if they would release it. Another huge time sink was aliging the coordinates for each station to line up with the original locations from the source material. On the note of data, I would like to move the data from the local JS file into a server.  I plan to add a bit more to this project later on, but as of now it has provided enough and services its basic functionality.
