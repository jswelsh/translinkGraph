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
    </table>
    <hr />`}
    //    <center><input type="button" value="More info" onclick="alert('You clicked on {categoryX}')" /></center>
    export { tooltip }
