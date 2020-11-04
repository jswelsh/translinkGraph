   const tooltip = {
     text:
    `{station} 
    disabled Access: {disabledAccess},
    parking: {parking},
    bicycle Facilities: {bicycleFacilities},
    fare Zone: {fareZone},
    volume rank: {rank}
    station Code: {stationCode},
    `,
    html:
    `<center><strong> {station}</strong></center>
    <hr />
    <table>
      <tr>
        <th style='color:#fff;' align="left"> disability Access: </th>
        <td style='color:#fff;'>{disabledAccess}</td>
      </tr>
      <tr>
        <th style='color:#fff;' align="left">bicycle Lockers:</th>
        <td style='color:#fff;'>{bicycleFacilities}</td>
      </tr>
      <tr>
        <th style='color:#fff;' align="left">Fare Zone:</th>
        <td style='color:#fff;'>{fareZone}</td>
      </tr>
      <tr>
        <th style='color:#fff;' align="left">structure Type: </th>
        <td style='color:#fff;'>{structureType}</td>
      </tr>
      <tr>
        <th style='color:#fff;' align="left">per Annum Volume: </th>
        <td style='color:#fff;'>{perAnnumVolume}</td>
      </tr>
    </table>
    <hr />`}
    //    <center><input type="button" value="More info" onclick="alert('You clicked on {categoryX}')" /></center>
    export { tooltip }
/*       bays: 7,

      stationCode: "DUN",
      fareZone: 1,
      opened: "1950-05-22T07:00:00.000Z",
      perAnnumVolume: "Unknown",
      rank: "Unknown" */