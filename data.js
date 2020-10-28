const routes = [{
  name: 'R1 King George Blvd',
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
  pathing: [   
    { station: 'Whalley Blvd–104th Ave', x: 76.45, y: 30.95 },
    { station: '1', x: 72.5, y: 30.95 },
    { station: 'Surrey Central', x: 72.5, y: 29.9 }]
  },{ 
  name: 'R2 Marine Dr',
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
  pathing: [
    { station: '1', x: 25.75, y: 94.65 },
    { station: '2', x: 27.4, y: 94.65 },
    { station: '3', x: 29, y: 92.55 },
    { station: '4', x: 32.63, y: 92.55 }
  ]
  },{
  name: 'R3 Lougheed Hwy',
  color: am4core.color('#149e42ff'),
  main: [
    { station: 'Coquitlam Central', x: 80.5, y: 78 },
    { station: 'Westwood St–Lougheed Hwy', x: 82.15, y: 75.8 },
    { station: 'Shaughnessy St–Lougheed Hwy', x: 83.775, y: 73.6 },
    { station: 'Ottawa St–Lougheed Hwy', x: 85.45, y: 71.375 },
    { station: 'Harris Rd–Lougheed Hwy', x: 89.925, y: 65.4 },
    {},
    { station: '203 St–Lougheed Hwy', x: 93.7, y: 62.925 },
    { station: 'Laity St–Lougheed Hwy', x: 96.1, y: 62.925 },
    { station: 'Haney Place', x: 98.525, y: 62.925 }],
  pathing: [
    { station: '1', x: 89.925, y: 65.4 },
    { station: '2', x: 91.82, y: 62.925 },
    { station: '3', x: 93.7, y: 62.925 }]
  },{
  name: "R4 41st Ave",
  color: am4core.color('#149e42ff'),
  main: [
    { station: 'UBC Exchange', x: 2.75, y: 61.8},
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
    { station: '7', x: 9.85, y: 48.625 }]
  },{
  name: "R5 Hastings St",
  color: am4core.color('#f36617ff'),
  main: [
    { station: 'Burrard', x: 21.46833, y: 84.25 },
    { station: 'Granville St–W Hastings St', x: 23.55, y: 81.75 }, 
    { station: 'Abbott St–W Hastings St', x: 26.65, y: 81.75 }, 
    { station: 'Main St–E Hastings St', x: 29.45, y: 81.75 }, 
    { station: 'Commercial Dr–E Hastings St', x: 32.3, y: 81.75 }, 
    { station: 'Nanaimo St–E Hastings St', x: 35.15, y: 81.75 }, 
    { station: 'Renfrew St–E Hastings St', x: 38, y: 81.75 }, 
    { station: 'Kootenay Loop', x: 40.65, y: 81.75 }, 
    { station: 'Gilmore Ave–Hastings St', x: 43.65, y: 81.75 }, 
    { station: 'Willingdon Ave–Hastings St', x: 46.4, y: 81.75 }, 
    { station: 'Hythe Ave–Hastings St', x: 49.15, y: 81.75 }, 
    { station: 'Holdom Ave–Hastings St', x: 52, y: 81.75 }, 
    { station: 'Kensington Ave–Hastings St', x: 54.85, y: 81.75 }, 
    { station: 'Duthie Ave–Hastings St', x: 57.7, y: 81.75 }, 
    { station: 'SFU Transportation Centre', x: 60.9, y: 81.75 }, 
    { station: 'SFU Exchange', x: 63.2, y: 81.75 }],
  pathing: null
  },{
  name: "99 B-Line",
  color: am4core.color('#f36617ff'),
  main: [
    { station: 'UBC Exchange', x: 2.75, y: 61.8},
    { station: 'Allison Rd–University Blvd', x: 5.1, y: 61.8},
    { station: 'Sasamat St–W 10th Ave', x: 7.5, y: 61.8},
    { station: 'Alma St–W Broadway', x: 9.85, y: 61.8},
    { station: 'Macdonald St–W Broadway', x: 12.6, y: 61.8},
    { station: 'Arbutus St–W Broadway', x: 15.3, y: 61.8},
    { station: 'Granville St–W Broadway', x: 17.7, y: 61.8},
    { station: 'Willow St–W Broadway', x: 20.7, y: 61.8},
  /*     { station: 'Broadway–City Hall', x: 22.625, y: 61.755}, */
    { station: 'Main St–E Broadway', x: 25.175, y: 61.8},
    { station: 'Fraser St–E Broadway', x: 27.95, y: 61.8},
    { station: 'Clark Dr–E Broadway', x: 30.6, y: 61.8},
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8}],
  pathing: null
  },{
  name: "Sea Bus",
  color: am4core.color('#7f685cff'),
  main: [
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6 },
    { station: 'Waterfront', x: 23.75, y: 84.25}],
  pathing: null
  },{
