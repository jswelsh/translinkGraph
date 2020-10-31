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
  pathing: [   
    { station: 'Whalley Blvd–104th Ave', x: 76.45, y: 30.95 },
    { station: '1', x: 72.5, y: 30.95 },
    { station: 'Surrey Central', x: 72.5, y: 29.9 }],
  connectors:[
    { station: 'Newton Exchange', x: 72.5, y: 2.45 },{},
    { station: 'Guildford Exchange', x: 88.35, y: 30.95 },{},
    { station: 'King George', x: 72.225, y: 23.15 },{},
    { station: 'Surrey Central', x: 72.225, y: 29.9 },{}],
    icons:null,
    label:null,
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
  pathing: [
    { station: '1', x: 25.75, y: 94.65 },
    { station: '2', x: 27.4, y: 94.65 },
    { station: '3', x: 29, y: 92.55 },
    { station: '4', x: 32.63, y: 92.55 }],
  connectors:[
    { station: 'Park Royal', x: 14.4, y: 94.65 },{},
    { station: 'Lonsdale Quay', x: 30, y: 92.55 },
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6 },{},
    { station: 'Phibbs Exchange', x: 41.53, y: 92.55 }],
  icons: [{
    type: 'horseshoeFerry',
    color: am4core.color('#C562E3'),
    data: [
      { icon: 'ferry.png', angle: 45, station: 'Park Royal', x: 13.7, y: 95.3 }],
    radius: 12
  }],
    label:null,
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
      { station: 'Coquitlam Central', x: 80.5, y: 78 },{},
      { station: 'Haney Place', x: 97.525, y: 62.925 },{}],
    icons: [{
    type: 'trainIcon',
    color: am4core.color('#701c8aff'),
    data: [
      { icon: 'train.png', angle: 160, station: 'Coquitlam Central', x: 81.25, y: 78. }],
    radius: 12}],
    label:null,
  },{
  name: "R4 41st Ave",
  icon: 'busR.png',
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
    { station: '7', x: 9.85, y: 48.625 }],
    connectors:[
      { station: 'Joyce–Collingwood', x: 39.9, y: 48.625 },{},
      { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625},{},
      { station: 'UBC Exchange', x: 2.75, y: 61.8},{},
      { station: 'Dunbar Loop', x: 9.85, y: 48.625 },{},],
    icons:null,
    label:{
      size:25,
      //this is the same as r4square.svg but converted
      element:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjE5MiIKICAgaGVpZ2h0PSIxOTIiCiAgIHZpZXdCb3g9IjAgMCAxOTIgMTkyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmczMDM1NyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjEgKDA3NjdmODMwMmEsIDIwMjAtMTAtMTcpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJyNFNxdWFyZS5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iL2hvbWUvb2R5Ny9QaWN0dXJlcy9kZXNpZ24vZGV2ZWxvcG1lbnQvcjRTcXVhcmUucG5nIgogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMjAxIgogICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMjAxIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzAzNTEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjIuNzAzOTI4OSIKICAgICBpbmtzY2FwZTpjeD0iNDIuNDQwMzc2IgogICAgIGlua3NjYXBlOmN5PSIxNDkuNTA3OCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0icHgiCiAgICAgd2lkdGg9IjQ5cHgiCiAgICAgc2NhbGUteD0iMSIKICAgICB2aWV3Ym94LXdpZHRoPSIxOTIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDI4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjEyMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjciCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGEzMDM1NCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMxNDllNDI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjUuMjUzNTMiCiAgICAgICBkPSJtIDcuOTUxNzQ3NywyMTUuODU2NzQgYyA1MS41Mjk3NjczLDAgOTMuMjcwNjgyMyw0MS43NDA4NyA5My4yNzA2ODIzLDkzLjI3MDY1IDAsNTEuNTA5MjggLTQxLjc0MDkxNSw5My4yNzA2NSAtOTMuMjcwNjgyMyw5My4yNzA2NSAtNTEuNTI5NzI2NywwIC05My4yNzA2NTM3LC00MS43NjEzNyAtOTMuMjcwNjUzNywtOTMuMjcwNjUgMCwtNTEuNTI5NzggNDEuNzQwOTI3LC05My4yNzA2NSA5My4yNzA2NTM3LC05My4yNzA2NSIKICAgICAgIGlkPSJwYXRoMTMxNzUiIC8+CiAgICA8cmVjdAogICAgICAgc3R5bGU9ImZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOm5vcm1hbDtvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6IzE0OWU0MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzE0OWU0MjtzdHJva2Utd2lkdGg6MC45NDczMDI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsO3N0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0MjMxOTgiCiAgICAgICB3aWR0aD0iMTkxLjA1MjciCiAgICAgICBoZWlnaHQ9IjE5MS4wNTI3IgogICAgICAgeD0iMC40NzM2NTA5OSIKICAgICAgIHk9IjAuNDczNjUwOTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteGRwaT0iOTYiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiIC8+CiAgICA8ZwogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIKICAgICAgIGlkPSJnNTg1NSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDcuODM3Nzk2NCwwLDAsNy44Mzc3OTY0LC0yMDIyLjg3OTIsLTExMzI4LjA3NSkiPgogICAgICA8ZwogICAgICAgICBpZD0idXNlNTg0OSIKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU5LjMwMzUsMTQ2My44MjQ4KSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBzdHlsZT0ic3Ryb2tlOm5vbmUiCiAgICAgICAgICAgZD0ibSAxMC40MjE4NzUsMCAtMS45MDYyNSwtMy4xMDkzNzUgYyAtMC42NzE4NzUsLTEuMDc4MTI1IC0xLjUzMTI1LC0yLjMyODEyNSAtMiwtMi41NzgxMjUgMi4wMzEyNSwwIDMuMjE4NzUsLTEuNjg3NSAzLjIxODc1LC0zLjU0Njg3NSAwLC0yLjAxNTYyNSAtMS4zMTI1LC0zLjcwMzEyNSAtNC4yMDMxMjUsLTMuNzAzMTI1IEggMS41OTM3NSBWIDAgaCAyLjEwOTM3NSB2IC01LjU5Mzc1IGMgMC40MDYyNSwwLjAzMTI1IDAuNTkzNzUsMC4xNTYyNSAwLjg0Mzc1LDAuNDA2MjUgQyA1LjI1LC00LjQ4NDM3NSA1Ljg0Mzc1LC0zLjU5Mzc1IDYuNzUsLTIgTCA3Ljg3NSwwIFogTSA3LjUsLTkuMjE4NzUgQyA3LjUsLTguNTQ2ODc1IDcuMjY1NjI1LC04IDYuOTIxODc1LC03LjY0MDYyNSBjIC0wLjQwNjI1LDAuMzkwNjI1IC0xLDAuNTQ2ODc1IC0yLjEyNSwwLjU0Njg3NSBIIDMuNzAzMTI1IFYgLTExLjE4NzUgSCA0Ljg3NSBjIDEuOTA2MjUsMCAyLjYyNSwwLjY3MTg3NSAyLjYyNSwxLjk2ODc1IHogbSAwLDAiCiAgICAgICAgICAgaWQ9InBhdGgyMzE3NiIgLz4KICAgICAgPC9nPgogICAgICA8ZwogICAgICAgICBpZD0idXNlNTg1MSIKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcwLjIwMDY1LDE0NjMuODI0OCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgc3R5bGU9InN0cm9rZTpub25lIgogICAgICAgICAgIGQ9Ik0gOS43MTg3NSwtMi4zMjgxMjUgViAtNC4wNjI1IEggOC43OTY4NzUgYyAtMC4xNDA2MjUsMCAtMC40MjE4NzUsMC4wNDY4NzUgLTAuNSwwLjA0Njg3NSAwLC0wLjA3ODEyNSAwLjAxNTYyNSwtMC4zNzUgMC4wMTU2MjUsLTAuNDUzMTI1IFYgLTkuMzc1IGwgLTEuNjA5Mzc1LDAuNDA2MjUgLTAuMjE4NzUsMi42NzE4NzUgYyAtMC4wNjI1LDAuNjg3NSAtMC4wOTM3NSwxLjQwNjI1IC0wLjA5Mzc1LDEuODQzNzUgMCwwLjA3ODEyNSAwLjAxNTYyNSwwLjM1OTM3NSAwLjAxNTYyNSwwLjQyMTg3NSAtMC4wMzEyNSwwIC0wLjIxODc1LC0wLjAzMTI1IC0wLjQyMTg3NSwtMC4wMzEyNSBoIC0yLjQ2ODc1IGMgLTAuMjM0Mzc1LDAgLTAuNDY4NzUsMC4wNDY4NzUgLTAuNTMxMjUsMC4wNDY4NzUgQyAzLjA3ODEyNSwtNC4xODc1IDMuNTE1NjI1LC00LjkyMTg3NSAzLjc4MTI1LC01LjUgbCAzLjE3MTg3NSwtNi44OTA2MjUgSCA0Ljc4MTI1IGwgLTMuOTUzMTI1LDguNTkzNzUgdiAxLjQ2ODc1IEggNS43MTg3NSBjIDAuMzU5Mzc1LDAgMC41OTM3NSwtMC4wNDY4NzUgMC42NTYyNSwtMC4wNDY4NzUgMCwwLjA3ODEyNSAtMC4wMTU2MjUsMC4zNTkzNzUgLTAuMDE1NjI1LDAuNTc4MTI1IHYgMi40Mzc1IEwgOC4zMTI1LDAuMjgxMjUgdiAtMS45Mzc1IGMgMCwtMC4zNzUgLTAuMDMxMjUsLTAuNjU2MjUgLTAuMDQ2ODc1LC0wLjcxODc1IDAuMDMxMjUsMCAwLjI1LDAuMDQ2ODc1IDAuNTMxMjUsMC4wNDY4NzUgeiBtIDAsMCIKICAgICAgICAgICBpZD0icGF0aDIzMTcyIiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIGlkPSJ1c2U1ODUzIgogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODAuODU0OCwxNDYzLjgyNDgpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJzdHJva2U6bm9uZSIKICAgICAgICAgICBkPSIiCiAgICAgICAgICAgaWQ9InBhdGgyMzE2OCIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==',
      data: [{x: 8, y: 48.625 }],
    }
  },{
  name: "R5 Hastings St",
  icon: 'bus99.png',
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
  pathing: null,
  connectors:[
    { station: 'Burrard', x: 21.46833, y: 84.25 },{},
    { station: 'Kootenay Loop', x: 40.65, y: 81.75 },{},
    { station: 'SFU Exchange', x: 63.2, y: 81.75 },{}],
    icons:null,
    label:null,
  },{
  name: "99 B-Line",
  icon: 'bus99.png',
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
  pathing: null,
  connectors: [
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8 },{},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755},{},
    { station: 'UBC Exchange', x: 2.75, y: 61.8},{}],
    icons:null,
    label:null,
  },{
  name: "Sea Bus",
  icon: 'seaBus.png',
  color: am4core.color('#7f685cff'),
  main: [
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6 },
    { station: 'Waterfront', x: 23.75, y: 84.25}],
  pathing: null,
  connectors:[
    { station: 'Lonsdale Quay', x: 30, y: 92.55 },{},
    { station: 'Lonsdale Quay', x: 28.6, y: 90.6 },{},
    { station: 'Waterfront', x: 23.75, y: 84.25}],
    icons:null,
    label:null,
  },{
  name: "Expo Line",
  icon: 'skyTrainExpo.png',
  color: am4core.color('#1c59ae'),
  main: [
    { station: 'Waterfront', x: 23.75, y: 84.25},
    { station: 'bend in route'},
    { station: 'Burrard', x: 21.46833, y: 84.25 },
    { station: 'bend in route'},
    { dash: "3,3", station: 'Granville', x: 23.8125, y: 78.25 },
    { station: 'Vancouver City Centre', x: 19.35, y: 78.25},{},
    { station: 'Granville', x: 23.8125, y: 78.25 }, 
    { station: 'Stadium-Chinatown', x: 26.25, y: 75 }, 
    { station: 'Main Street–Science World', x: 28.5, y: 72 }, 
    { station: 'bend in route'},
    /*     { station: 'Commercial-Broadway', x: 32.4, y: 61.8}, */
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
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.2 }, {},
    { station: 'Scott Road', x: 69.025, y:42.3},{},
    { station: 'Gateway', x: 71.95, y: 36.15 },
    { station: 'Surrey Central', x: 71.95, y: 29.9 },
    { station: 'King George', x: 71.95, y: 23.15 },],
  pathing: [
    /* { station: 'Granville', x: 21.5, y: 84.66667 },  */
    {station: '1', x: 23.75, y: 84.25},//Waterfront 
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
    { station: 'King George', x: 72.225, y: 23.15 },{},
    { station: 'Surrey Central', x: 72.225, y: 29.9 },{},
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83},
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8 },{},
    { station: 'Production Way–University', x: 63.2, y: 63.515 },{},
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.515 },{},
    { station: 'Joyce–Collingwood', x: 39.9, y: 48.625 },{},
    { station: 'Waterfront', x: 23.75, y: 84.25},{},
    { station: 'Burrard', x: 21.46833, y: 84.25 },{},],
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
    label:null,
  },{
  name: "Canada Line",
  icon: 'skyTrainCanada.png',
  color: am4core.color('#0097c7'),
  main:[
    { station: 'Richmond-Brighhouse', x: 22.625, y: 9.15 }, 
    { station: 'Lansdowne', x: 22.625, y: 15.75 }, 
    { station: 'Aberdeen', x: 22.625, y: 22.3 },
    { station: 'Bridgeport', x: 22.625, y: 28.9 }, 
    { station: 'Marine Drive', x: 22.625, y: 35.45},
    { station: 'Langara–49th Avenue', x: 22.625, y: 42.},
    /*{ station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625}, */
    { station: 'King Edward', x: 22.625, y: 55.2},
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755},
    { station: 'Olympic Village', x: 22.625, y: 66.5},
    { station: 'bend in route'},
    { station: 'Yaletown–Roundhouse', x: 20.25, y: 72.645},
    { station: 'bend in route'},
    { station: 'Vancouver City Centre', x: 19.35, y: 78.25},
    { station: 'Waterfront', x: 23.75, y: 84.25}],
  pathing:[
    { station: '1', x: 22.625, y: 66.5}, //'Olympic Village'
    { station: '2', x: 22.625, y: 69.40}, //bend in route
    { station: '3', x: 20.25, y: 72.645}, //Yaletown–Roundhouse 
    { station: '4', x: 17.75, y: 76.1}, //Yaletown–Roundhouse 
    { station: '5', x: 19.35, y: 78.25}], //bend in route
  connectors:[
    { station: 'Oakridge–41st Avenue', x: 22.625, y: 48.625},{}, 
    { station: 'Broadway–City Hall', x: 22.625, y: 61.755},{},
    { station: 'Waterfront', x: 23.75, y: 84.25},{},
    { station: 'Bridgeport', x: 22.625, y: 28.9 },{},],
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
    radius: 12
    }],
    label:null,
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
    { station: 'Bridgeport', x: 22.625, y: 28.9 }],
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
    label:null,
  },{
  name: 'Millennium Line',
  icon: 'skyTrainMillenium.png',
  color: am4core.color("#facf05ff"), 
  main: [
    { station: 'VCC–Clark', x: 29.85, y: 66.55 },{},
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83 },
    { station: 'Renfrew', x: 37.5, y: 63.83 },
    { station: 'Rupert', x: 41.15, y: 63.83 },
    { station: 'Gilmore', x: 44.75, y: 63.83 },
    { station: 'Brentwood Town Centre', x: 48.2, y: 63.83 },
    { station: 'Holdom', x: 51.9, y: 63.83 },
    { station: 'Sperling–Burnaby Lake', x: 55.65, y: 63.83 },
    { station: 'Lake City Way', x: 59.4, y: 63.83 },
    { station: 'Production Way–University', x: 63.2, y: 63.83 },
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.83 },{},
    { station: 'Burquitlam', x: 70.75, y: 70.55 },{},
    { station: 'Moody Centre', x: 73.64, y: 77.05},
    { station: 'Inlet Centre', x: 77.15, y: 77.05},{},
    { station: 'Coquitlam Central', x: 80.5, y: 78},{},
    { station: 'Lincoln', x: 81, y: 83.65},
    { station: 'Lafarge Lake–Douglas', x: 81, y: 90.3}],
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
    { station: 'Commercial–Broadway', x: 33.8, y: 63.83},
    { station: 'Commercial–Broadway', x: 32.4, y: 61.8 },{},
    { station: 'Production Way–University', x: 63.2, y: 63.515 },{},
    { station: 'Lougheed Town Centre', x: 66.85, y: 63.515 },{},
    { station: 'VCC–Clark', x: 29.85, y: 66.55 },{},
    { station: 'Moody Centre', x: 73.64, y: 77.05},{},
    { station: 'Coquitlam Central', x: 80.5, y: 78 },{},],
  icons:[{
    type: 'trainIcon',
    color: am4core.color('#701c8aff'),
    data: [
      { icon: 'train.png', angle: 90, station: 'Moody Centre', x: 73.64, y: 78.05},{},
      { icon: 'train.png', angle: 160, station: 'Coquitlam Central', x: 81.25, y: 78. },{}],
    radius: 12}],
    label:null,
  }
]

const icons = [{
  type: 'zoneIcon',
  color: am4core.color('#00000000'),
  data: [
    { icon: 'zoneQuay.png', angle: 0, x: 24.5, y: 88.4},{},
    { icon: 'zoneLougheed.png', angle: 45, x: 68.2, y: 66.75 }, {},
    { icon: 'zoneColumbia.png', angle: 135, x: 67.5, y: 48.05 }, {},
    { icon: 'zoneBridgeport.png', angle: 0, x: 20.26, y: 33.6 }, {},
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

    { x: 71.7, y: 62, dash: "1,2" },
    { x: 67.7, y: 67.4 }, {}, //need to fix

/*     { dash: "1,2", x: 67.7, y: 48.5 }, */
    { x: 64.4, y:43.9, dash: "1,2"}, 
    { x: 68, y: 48.7}, {},

/*     { x: 39.875, y: 48.5 },
    { x: 39.875, y: 48.5 },{}, */

    { x: 19.625, y: 33.65, dash: "1,2" },
    { x: 25.625, y: 33.65},{},
    
    { x: 43.1, y: 60.83, dash: "1,2" },
    { x: 43.1, y: 66.83 },{},
    
    { x: 39.35, y: 44.4, dash: "1,2" },
    { x: 42.95, y: 49.2 },{},
  ],
  },{

  }
]

export { routes, icons, zones  }