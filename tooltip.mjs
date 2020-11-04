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
    html:`
<div class="label-content">
  <div class="label-header" style=' background-color: {color}';>
    <center><h2><strong> {station}</strong></h2></center>
  </div>
  <div class="label-body">
<hr />
    <table>
      <tr>
        <th style='color:#052e51ff;' align="left"> disability Access: </th>
        <td style='color:#052e51ff;'>{disabledAccess}</td>
      </tr>
      <tr>
        <th style='color:#052e51ff;' align="left">bicycle Lockers:</th>
        <td style='color:#052e51ff;'>{bicycleFacilities}</td>
      </tr>
      <tr>
        <th style='color:#052e51ff;' align="left">structure Type: </th>
        <td style='color:#052e51ff;'>{structureType}</td>
      </tr>
      <tr>
        <th style='color:#052e51ff;' align="left">per Annum Volume: </th>
        <td style='color:#052e51ff;'>{perAnnumVolume}</td>
      </tr>
    </table>
    <hr />
  </div>
  <center> 
  <div class="label-footer" style=' background-color: {color}'>
    <h3>Fare Zone: {fareZone}</h3>
  </div>
  </center>
</div>`,

    test:
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