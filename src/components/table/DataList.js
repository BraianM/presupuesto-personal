
const tdAndTh = ({ pad='0px' }) => ({
  padding: pad,
})

const thRow = ({ color='#fffff' }) => ({
  backgroundColor: color
})

const DataList = ({ parOrImpar, concept, date, type, amount }) => {
  const setColorRow = (value) => {
    if (value % 2) {
      return '#ffffff'
    } else {
      return '#f2f2f2'
    }
  }

  return (
    <tr>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: setColorRow(parOrImpar)})}}>{concept}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: setColorRow(parOrImpar)})}}>{date}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: setColorRow(parOrImpar)})}}>{type}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: setColorRow(parOrImpar)})}}>{amount}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: setColorRow(parOrImpar)})}}></td>
    </tr>
  )
}

export default DataList;
