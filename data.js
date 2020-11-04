import { stationData } from './stationData.js'

const routes = [{
  name: 'R1 King George Blvd.....',
  icon: 'busR.png',
  color: am4core.color('#149e42ff'),
  main:[ 
    { station: 'Guildford Exchange', x: 88.35, y: 30.95 },
    { station: '148th St–104th Ave', x: 85.35, y: 30.95 },
    { station: '144th St–104th Ave', x: 82.4, y: 30.95 },
    { station: '140th St–104th Ave', x: 79.45, y: 30.95 },
    { station: 'Whalley Blvd–104th Ave', x: 76.45, y: 30.95 },
    {},
    { station: 'Surrey Central', x: 72.5, y: 29.9 },
    { station: 'King George', x: 72.5, y: 23.15 },
    { station: '96th Ave–King George Blvd', x: 72.5, y: 18.35 },
    { station: '88th Ave–King George Blvd', x: 72.5, y: 14.35 },
    { station: '80th Ave–King George Blvd', x: 72.5, y: 10.4 },
    { station: '76th Ave–King George Blvd', x: 72.5, y: 6.45 },
    { station: 'Newton Exchange', x: 72.5, y: 2.45 }],
  pathing:[
    { station: 'Whalley Blvd–104th Ave', x: 76.45, y: 30.95 },
    { station: '1', x: 72.5, y: 30.95 },
    { station: 'Surrey Central', x: 72.5, y: 29.9 }],
  connectors:[
    { station: 'Newton Exchange', x: 72.5, y: 2.45, ...stationData.NWT },{},
    { station: 'Guildford Exchange', x: 88.35, y: 30.95, ...stationData.GLF },{},
    { station: 'King George', x: 72.225, y: 23.15, ...stationData.KG },{},
    { station: 'Surrey Central', x: 72.225, y: 29.9, ...stationData.SC },{}],
    label:{
      size:25,
      data: [{ x: 74.45, y: 30.95 }],
      angle: 0,
      align: ['middle', 'bottom'],
      //this is the same as r4square.svg but converted
      icon:'r1Square.svg'
    },
  },{ 
  name: 'R2 Marine Dr',
  icon: 'busR.png',
  color: am4core.color('#149e42ff'),
  main: [
    { station: 'Park Royal', x: 14.4, y: 94.65 },
    { station: 'Capilano Rd–Marine Dr', x: 17.25, y: 94.65 },
    { station: 'Pemberton Ave–Marine Dr', x: 20.1, y: 94.65 },
    { station: 'Hamilton Ave–Marine Dr', x: 22.94, y: 94.65 },
    { station: 'Bewicke Ave–Marine Dr', x: 25.75, y: 94.65 },
    {},
    { station: 'Lonsdale Quay', x: 30, y: 92.55 },
    { station: '3rd St–Lonsdale Ave', x: 32.63, y: 92.55 },
    { station: 'Ridgeway Ave–E 3rd St', x: 35.47, y: 92.55 },
    { station: 'Brooksbank Ave–Main St', x: 38.3, y: 92.55 },
    { station: 'Phibbs Exchange', x: 41.53, y: 92.55 },],
  pathing:[
    { station: '1', x: 25.75, y: 94.65 },
    { station: '2', x: 27.4, y: 94.65 },
    { station: '3', x: 29, y: 92.55 },
    { station: '4', x: 32.63, y: 92.55 }],
  connectors:[
    { station: 'Park Royal', x: 14.4, y: 94.65, ...stationData.PRK },{},
    { station: 'Lonsdale Quay', x: 30, y: 92.55, ...stationData.LQL },
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6, ...stationData.LQB },{},
    { station: 'Phibbs Exchange', x: 41.53, y: 92.55, ...stationData.PHI }],
  icons: [{
    type: 'horseshoeFerry',
    color: am4core.color('#C562E3'),
    data: [
      { icon: 'ferry.png', angle: 45, station: 'Park Royal', x: 13.7, y: 95.3 }],
    radius: 12
  }],
    label:{
      size:25,
      data: [ { x: 39.75, y: 92.55 }],
      angle: 0,
      align: ['middle', 'bottom'],
      //this is the same as r4square.svg but converted
      icon:'r2Square.svg'
    },
  },{
  name: 'R3 Lougheed Hwy',
  icon: 'busR.png',
  color: am4core.color('#149e42ff'),
  main: [
    { station: 'Coquitlam Central', x: 80.5, y: 78 },
    { station: 'Westwood St–Lougheed Hwy', x: 82.15, y: 75.8 },
    { station: 'Shaughnessy St–Lougheed Hwy', x: 83.775, y: 73.6 },
    { station: 'Ottawa St–Lougheed Hwy', x: 85.45, y: 71.375 },
    { station: 'Harris Rd–Lougheed Hwy', x: 89.925, y: 65.4 },
    {},
    { station: '203 St–Lougheed Hwy', x: 93.2, y: 62.925 },
    { station: 'Laity St–Lougheed Hwy', x: 95.3, y: 62.925 },
    { station: 'Haney Place', x: 97.525, y: 62.925 }],
  pathing: [
    { station: '1', x: 89.925, y: 65.4 },
    { station: '2', x: 91.82, y: 62.925 },
    { station: '3', x: 93.7, y: 62.925 }],    
  connectors: [
    { station: 'Coquitlam Central', x: 80.5, y: 78, ...stationData.CC },{},
    { station: 'Haney Place', x: 97.525, y: 62.925, ...stationData.HNY },{}],
  icons: [{
    type: 'trainIcon',
    color: am4core.color('#701c8aff'),
    data: [
      { icon: 'train.png', angle: 160, station: 'Coquitlam Central', x: 81.25, y: 78. }],
    radius: 12}],
    label:{
      size:25,
      data: [{x:	86.6382, y:	69.7662 }],
      angle: 45,
      align: ['middle', 'bottom'],
      //this is the same as r4square.svg but converted
      icon:'r3Square.svg'
    },
  },{
  name: 'R4 41st Ave',
  icon: 'busR.png',
  color: am4core.color('#149e42ff'),
  main: [
    { station: 'UBC Exchange', x: 2.75, y: 61.8, ...stationData.UBC},
    {},
    { station: 'Agronomy Rd–Wesbrook Mall', x: 4.1, y: 58.519},
    { station: 'W 16th Ave–Wesbrook Mall', x: 5.6, y: 56.5 },
    {},
    { station: 'Dunbar Loop', x: 9.85, y: 48.625 },
    { station: 'Carnarvon St–W 41st Ave', x: 12.56, y: 48.625 },
    { station: 'East Blvd–W 41st Ave', x: 15.3, y: 48.625 },
    { station: 'Granville St–W 41st Ave', x: 17.7, y: 48.625 },
    { station: 'Oak St–W 41st Ave', x: 20.7, y: 48.625 },
    { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625},
    { station: 'Main St–E 41st Ave', x: 25.2, y: 48.625 },
    { station: 'Fraser St–E 41st Ave', x: 27.2, y: 48.625 },
    { station: 'Knight St–E 41st Ave', x: 29.35, y: 48.625 },
    { station: 'Victoria Dr–E 41st Ave', x: 31.6, y: 48.625 },
    { station: 'Clarendon St–E 41st Ave', x: 33.7, y: 48.625 },
    { station: 'Rupert St–E 41st Ave', x: 35.9, y: 48.625 },
    { station: 'Kingsway–Joyce St', x: 38.1, y: 48.625 },
    { station: 'Joyce–Collingwood', x: 39.9, y: 48.625 }],
  pathing: [
    { station: '1', x: 2.75, y: 61.8},
    { station: '2', x: 2.75, y: 60.3361},
    { station: '3', x: 4.1, y: 58.519},
    { station: '4', x: 5.6, y: 56.5 },
    { station: '5', x: 6.9, y: 54.75 },
    { station: '6', x: 6.9, y: 48.625 },
    { station: '7', x: 9.85, y: 48.625 }],
  connectors:[
    { station: 'Joyce–Collingwood', x: 39.9, y: 48.625, ...stationData.JY },{},
    { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625, ...stationData.OK},{},
    { station: 'UBC Exchange', x: 2.75, y: 61.8, ...stationData.UBC},{},
    { station: 'Dunbar Loop', x: 9.85, y: 48.625, ...stationData.DUN}],
  label:{
    size:25,
    data: [{x: 8, y: 48.625 }],
    angle: 0,
    align: ['middle', 'bottom'],
    icon:'r4Square.svg'
    }
  },{
  name: 'R5 Hastings St',
  icon: 'busR.png',
  color: am4core.color('#149e42ff'),
  main: [
    { station: 'Burrard', x: 21.46833, y: 84.25 },
    { station: 'Granville St–W Hastings St', x: 23.55, y: 81.75 }, 
    { station: 'Abbott St–W Hastings St', x: 26.65, y: 81.75 }, 
    { station: 'Main St–E Hastings St', x: 29.45, y: 81.75 }, 
    { station: 'Commercial Dr–E Hastings St', x: 32.3, y: 81.75 }, 
    { station: 'Nanaimo St–E Hastings St', x: 35.15, y: 81.75 }, 
    { station: 'Renfrew St–E Hastings St', x: 38, y: 81.75 }, 
    { station: 'Kootenay Loop', x: 40.65, y: 81.75 }, 
    { station: 'Gilmore Ave–Hastings St', x: 43.7, y: 81.75 }, 
    { station: 'Willingdon Ave–Hastings St', x: 46.4, y: 81.75 }, 
    { station: 'Hythe Ave–Hastings St', x: 49.15, y: 81.75 }, 
    { station: 'Holdom Ave–Hastings St', x: 52, y: 81.75 }, 
    { station: 'Kensington Ave–Hastings St', x: 54.85, y: 81.75 }, 
    { station: 'Duthie Ave–Hastings St', x: 57.7, y: 81.75 }, 
    { station: 'SFU Transportation Centre', x: 60.9, y: 81.75 }, 
    { station: 'SFU Exchange', x: 63.2, y: 81.75 }],

  connectors:[
    { station: 'Burrard', x: 21.46833, y: 84.25, ...stationData.BU },{},
    { station: 'Kootenay Loop', x: 40.65, y: 81.75, ...stationData.KOO },{},
    { station: 'SFU Exchange', x: 63.2, y: 81.75, ...stationData.SFU },{}],
  label:{
    size:25,
    data: [{ x: 42.28, y: 81.75 }],
    angle: 0,
    align: ['middle', 'bottom'], 
    icon:'r5Square.svg'
    },
  },{
  name: "99 B-Line",
  icon: 'bus99.png',
  color: am4core.color('#f36617ff'),
  main: [
    { station: 'UBC Exchange', x: 2.75, y: 61.8, ...stationData.UBC},
    { station: 'Allison Rd–University Blvd', x: 5.1, y: 61.8},
    { station: 'Sasamat St–W 10th Ave', x: 7.5, y: 61.8},
    { station: 'Alma St–W Broadway', x: 9.85, y: 61.8},
    { station: 'Macdonald St–W Broadway', x: 12.6, y: 61.8},
    { station: 'Arbutus St–W Broadway', x: 15.3, y: 61.8},
    { station: 'Granville St–W Broadway', x: 17.7, y: 61.8},
    { station: 'Willow St–W Broadway', x: 20.7, y: 61.8},
    { station: 'Main St–E Broadway', x: 25.175, y: 61.8},
    { station: 'Fraser St–E Broadway', x: 27.95, y: 61.8},
    { station: 'Clark Dr–E Broadway', x: 30.6, y: 61.8},
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8}],
  connectors: [
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83, ...stationData.CM },
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8, ...stationData.BW },{},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755, ...stationData.BC},{},
    { station: 'UBC Exchange', x: 2.75, y: 61.8, ...stationData.UBC},{}],
  label:{
    size:25,
    //data: [{x: 85.45, y: 71.375 }],
    data: [{ x: 26.55, y: 61.755 }],
    angle: 0,
    align: ['middle', 'bottom'],
    //this is the same as r4square.svg but converted
    icon:'99Square.svg'
  },
  },{
  name: "Sea Bus",
  icon: 'seaBus.png',
  color: am4core.color('#7f685cff'),
  main: [
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6 },
    { station: 'Waterfront', x: 23.75, y: 84.25}],
  connectors:[
    { station: 'Lonsdale Quay', x: 30, y: 92.55, ...stationData.LQL },
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6, ...stationData.LQB },{},
    { station: 'Waterfront', x: 23.75, y: 84.25, ...stationData.WF}],
  },{
  name: "Expo Line",
  icon: 'skyTrainExpo.png',
  color: am4core.color('#1c59ae'),
  main: [
    { station: 'Waterfront', x: 23.75, y: 84.25,...stationData.WF },
    { station: 'bend in route'},
    { station: 'Burrard', x: 21.46833, y: 84.25, ...stationData.BU },
    { station: 'bend in route'},
    { dash: "3,3", station: 'Granville', x: 23.8125, y: 78.25, ...stationData.GR },
    { station: 'Vancouver City Centre', x: 19.35, y: 78.25, ...stationData.VS },{},
    { station: 'Granville', x: 23.8125, y: 78.25, ...stationData.GR }, 
    { station: 'Stadium-Chinatown', x: 26.25, y: 75, ...stationData.ST }, 
    { station: 'Main Street–Science World', x: 28.5, y: 72, ...stationData.MN }, 
    { station: 'bend in route'},
    { station: 'Commercial-Broadway', x: 32.4, y: 61.8, ...stationData.BW },
    { station: 'bend in route'},
    { station: 'Nanaimo', x: 34.25, y: 56, ...stationData.NA },  //35,55 base
    { station: '29th Avenue', x: 36.65, y: 52.8, ...stationData.TN }, 
    { station: 'Joyce–Collingwood', x: 39.875, y: 48.5, ...stationData.JY }, 
    { station: 'Patterson', x: 42.35, y: 45.2, ...stationData.PT }, 
    { station: 'Metrotown', x: 44.75,  y: 42, ...stationData.MT }, 
    { station: 'Royal Oak', x: 47.1875, y: 38.75, ...stationData.RO }, 
    { station: 'Edmonds', x: 49.6625, y: 35.45, ...stationData.ED }, 
    { station: 'bend in route'},
    { station: '22nd Street', x: 52.6625, y: 34.45, ...stationData.TS },
    { station: 'bend in route'}, 
    { station: 'New Westminster', x: 58.91235 , y:40, ...stationData.NW }, 
    { station: 'Columbia', x: 62.66235, y: 45, ...stationData.CO }, 
    { station: 'Sapperton', x: 68.13735, y: 52.3, ...stationData.SA}, 
    { station: 'bend in route'},
    { station: 'Braid', x: 70.7 ,y: 57.2, ...stationData.BD },
    { station: 'bend in route'},
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.2, ...stationData.LH },
    { station: 'Production Way–University', x: 63.2, y: 63.2, ...stationData.PW },{}, 
    { station: 'Scott Road', x: 69.025, y:42.3, ...stationData.SR },{},
    { station: 'Gateway', x: 71.95, y: 36.15, ...stationData.GW },
    { station: 'Surrey Central', x: 71.95, y: 29.9, ...stationData.SC },
    { station: 'King George', x: 71.95, y: 23.15, ...stationData.KG },],
  pathing: [
    /* { station: 'Granville', x: 21.5, y: 84.66667 },  */
    {station: '1', x: 23.75, y: 84.25 },//Waterfront 
    {station: '2', x: 22.65, y: 85.8255 }, 
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
    {station: '28', x: 71.95, y: 36.15 }],//Gateway 
  connectors:[
    { station: 'King George', x: 72.225, y: 23.15, ...stationData.KG },{},
    { station: 'Surrey Central', x: 72.225, y: 29.9, ...stationData.SC },{},
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83, ...stationData.CM},
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8, ...stationData.BW},{},
    { station: 'Production Way–University', x: 63.2, y: 63.515, ...stationData.PW },{},
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.515, ...stationData.LH },{},
    { station: 'Joyce–Collingwood', x: 39.9, y: 48.625, ...stationData.JY },{},
    { station: 'Waterfront', x: 23.75, y: 84.25, ...stationData.WF},{},
    { station: 'Burrard', x: 21.46833, y: 84.25, ...stationData.BU },{},],
  icons: [{
    type: 'horseshoeFerry',
    color: am4core.color('#C562E3'),
    data: [
      { icon: 'ferry.png', angle: 0, station: 'Burrard',  x: 20.1, y: 82.73333 }, {},
      { icon: 'ferry.png', angle: 180, station: 'Granville',  x: 24.25, y: 78.5 }, {}],
    radius: 12},{
    type: 'walkingIcon',
    color: am4core.color('#999'),
    data: [
      { icon: 'walking.png', angle: -90, station: 'Vancouver City Centre/Granville ', x: 21.625, y: 77.75}],
    radius: 12},{
    type: 'trainIcon',
    color: am4core.color('#701c8aff'),
    data: [
      { icon: 'train.png', angle: 180, station: 'Waterfront', x: 24.5, y: 84.25}],
    radius: 12
    }],
    label:{
      size:25,
      data: [ { x: 37.85, y: 51.2 } ],
      angle: 45,
      align: ['middle', 'bottom'],
      //this is the same as r4square.svg but converted
      icon:'expSquare.svg'
    },
  },{
  name: "Canada Line",
  icon: 'skyTrainCanada.png',
  color: am4core.color('#0097c7'),
  main:[
    { station: 'Richmond-Brighhouse', x: 22.625, y: 9.15, ...stationData.RB },
    { station: 'Lansdowne', x: 22.625, y: 15.75, ...stationData.LD }, 
    { station: 'Aberdeen', x: 22.625, y: 22.3, ...stationData.AB },
    { station: 'Bridgeport', x: 22.625, y: 28.9, ...stationData.BR }, 
    { station: 'Marine Drive', x: 22.625, y: 35.45, ...stationData.MD},
    { station: 'Langara–49th Avenue', x: 22.625, y: 42, ...stationData.LG},
    /*{ station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625}, */
    { station: 'King Edward', x: 22.625, y: 55.2,...stationData.KE},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755,...stationData.BC},
    { station: 'Olympic Village', x: 22.625, y: 66.5,...stationData.OV},
    { station: 'bend in route'},
    { station: 'Yaletown–Roundhouse', x: 20.25, y: 72.645,...stationData.YT},
    { station: 'bend in route'},
    { station: 'Vancouver City Centre', x: 19.35, y: 78.25,...stationData.VS},
    { station: 'Waterfront', x: 23.75, y: 84.25,...stationData.WF}],
  pathing:[
    { station: '1', x: 22.625, y: 66.5}, //'Olympic Village'
    { station: '2', x: 22.625, y: 69.40}, //bend in route
    { station: '3', x: 20.25, y: 72.645}, //Yaletown–Roundhouse 
    { station: '4', x: 17.75, y: 76.1}, //Yaletown–Roundhouse 
    { station: '5', x: 19.35, y: 78.25}], //bend in route
  connectors:[
    { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625,...stationData.OK},{}, 
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755, ...stationData.BC},{},
    { station: 'Waterfront', x: 23.75, y: 84.25, ...stationData.WF},{},
    { station: 'Bridgeport', x: 22.625, y: 28.9, ...stationData.BR },{},],
  icons: [{
    type: 'horseshoeFerry',
    color: am4core.color('#C562E3'),
    data: [
        { icon: 'ferry.png', angle: 0, station: 'Vancouver City Centre', x: 19, y: 78.5}, {}],
    radius: 12},
    {
    type: 'Tsawwassen Ferry',
    color: am4core.color('#7556E3'),
    data: [
      { icon: 'ferry.png', angle: 45,  station:'Bridgeport' , x: 21.9, y:  29.45 }, {}],
    radius: 12,

    }],
  },{
  name: 'Canada Line-YVR',
  icon: 'skyTrainCanada.png',
  color: am4core.color('#0097c7'),
  main:[
    { station:'YVR Airport' , x: 8.7, y: 26.8 },
    { station: 'Sea Island Centre', x: 12.4, y: 26.8 },
    { station: 'Templeton', x: 16.15, y: 26.8 }],
  pathing:[
    { station: '1', x: 16.15, y: 26.8 },
    { station: '2', x: 22.65, y: 26.8 },
    { station: '3', x: 22.65, y: 28.9 }],
  connectors:[
    { station: 'Bridgeport', x: 22.625, y: 28.9, ...stationData.BR }],
  icons: [{
    type: 'Tsawwassen Ferry',
    color: am4core.color('#7556E3'),
    data: [
      { icon: 'ferry.png', angle: 45,  station:'Bridgeport' , x: 21.9, y:  29.45 }, {}],
    radius: 12},{
    type: 'planeIcon',
    color: am4core.color('#709abd'),
    data: [
      { icon: 'plane.png', angle: 45,  station:'YVR Airport' , x: 8.35, y:  27.25 }],
    radius: 20}],
    label:{
      size:25,
      data: [ { x: 16.94, y: 26.8 } ],
      angle: 0,
      align: ['left', 'bottom'],
      //this is the same as r4square.svg but converted
      icon:'canSquare.svg'
    },
  },{
  name: 'Millennium Line',
  icon: 'skyTrainMillenium.png',
  color: am4core.color("#facf05ff"), 
  main: [
    { station: 'VCC–Clark', x: 29.85, y: 66.55, ...stationData.VC },{},
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83, ...stationData.CM },
    { station: 'Renfrew', x: 37.5, y: 63.83, ...stationData.RE },
    { station: 'Rupert', x: 41.15, y: 63.83, ...stationData.RU },
    { station: 'Gilmore', x: 44.75, y: 63.83, ...stationData.GM },
    { station: 'Brentwood Town Centre', x: 48.2, y: 63.83, ...stationData.BR },
    { station: 'Holdom', x: 51.9, y: 63.83, ...stationData.HO },
    { station: 'Sperling–Burnaby Lake', x: 55.65, y: 63.83, ...stationData.SP },
    { station: 'Lake City Way', x: 59.4, y: 63.83, ...stationData.LC },
    { station: 'Production Way–University', x: 63.2, y: 63.83, ...stationData.PW },
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.83, ...stationData.LH },{},
    { station: 'Burquitlam', x: 70.75, y: 70.55, ...stationData.BQ },{},
    { station: 'Moody Centre', x: 73.64, y: 77.05, ...stationData.MC },
    { station: 'Inlet Centre', x: 77.15, y: 77.05, ...stationData.IC },{},
    { station: 'Coquitlam Central', x: 80.5, y: 78, ...stationData.CC },{},
    { station: 'Lincoln', x: 81, y: 83.65, ...stationData.LN },
    { station: 'Lafarge Lake–Douglas', x: 81, y: 90.3, ...stationData.LL }],
  pathing:[
    { station: '1', x: 29.85, y: 66.55 },
    { station: '2', x: 30.96, y: 66.55 },
    { station: '3', x: 33, y: 63.83 },
    { station: '4', x: 33.8, y: 63.83 },
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83 },
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
    { station: '14', x: 81, y: 83.65}],
  connectors:[
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83, ...stationData.CM },
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8, ...stationData.BW },{},
    { station: 'Production Way–University', x: 63.2, y: 63.515, ...stationData.PW },{},
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.515, ...stationData.LH },{},
    { station: 'VCC–Clark', x: 29.85, y: 66.55, ...stationData.VC },{},
    { station: 'Moody Centre', x: 73.64, y: 77.05, ...stationData.MC },{},
    { station: 'Coquitlam Central', x: 80.5, y: 78, ...stationData.CC },{},],
  icons:[{
    type: 'trainIcon',
    color: am4core.color('#701c8aff'),
    data: [
      { icon: 'train.png', angle: 90, station: 'Moody Centre', x: 73.64, y: 78.05},{},
      { icon: 'train.png', angle: 160, station: 'Coquitlam Central', x: 81.25, y: 78. },{}],
    radius: 12}],
  label:{
    size:25,
    data: [{ x: 39.35, y: 63.83 }],
    angle: 0,
    align: ['middle', 'bottom'],
    //this is the same as r4square.svg but converted  
    icon: 'milSquare.svg'
  }
  },/* {
  name: 'Accesibility',
  icon: 'accessible.svg',
  color: am4core.color("#052e51ff"), 
  main:[
    { station: 'VCC–Clark', x: 29.85, y: 66.55 },{},
    { station: 'VCC–Clark', x: 29.85, y: 66.55 },{},

  ]
  } */
]
const icons = [{
  type: 'zoneIcon',
  color: am4core.color('#00000000'),
  data: [
    { icon: 'zoneQuay.png', angle: 0, x: 24.5, y: 88.4},{},
    { icon: 'zoneLougheed.png', angle: 45, x: 68.2, y: 66.75 }, {},
    { icon: 'zoneColumbia.png', angle: 135, x: 67.5, y: 48.05 }, {},
    { icon: 'zoneBridgeport.png', angle: 0, x: 20.26, y: 33.1 }, {},
    { icon: 'zoneJoyce.png', angle: 135, x: 42.45, y: 48.55}, {},
    { icon: 'zoneRupert.png', angle: 90, x: 43.1, y: 66/* .83 */}
  ],
  radius: 21
  }
]
const zones = [{
  name:'Waterfront/Lonsdale Quay',
  color:  am4core.color('#808080'),
 /*  color:  am4core.color('#fff'), */
  data:[
    { x: 24, y: 88.4, dash: "1,2" },
    { x: 30, y: 88.4 }, {},

    { x: 71.7, y: 62, dash: "1,4" },
    { x: 67.7, y: 67.4 }, {}, //need to fix

    { x: 64.4, y:43.9, dash: "1,2"}, 
    { x: 68, y: 48.7}, {},

    { x: 19.625, y: 33.1, dash: "1,2" },
    { x: 25.625, y: 33.1},{},
    
    { x: 43.1, y: 60.83, dash: "1,2" },
    { x: 43.1, y: 66.83 },{},
    
    { x: 39.35, y: 44.4, dash: "1,2" },
    { x: 42.95, y: 49.2 },{},
  ],
  },{

  }
]

export { routes, icons, zones  }