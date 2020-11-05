const tooltip = {
  text:
    `{station} 
    disabled Access: {disabledAccess},
    parking: {parking},
    bicycle Facilities: {bicycleFacilities},
    fare Zone: {fareZone},
    volume rank: {rank}
    station Code: {stationCode},`,
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
  htmlBasic:`
    <div class="basic" style=' background-color: {color}';>
      <h4><strong> {station}</strong></h4>  
    </div>`
}
export { tooltip }
