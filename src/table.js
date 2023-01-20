import React from 'react'

export default function table() {
    const [tableData, setTableData] = useState([])
    
  return (
    <div>
         <div className='table'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Task</TableCell>
        
          
          </TableRow>
        </TableHead>
        <TableBody> 
          {tableData.map((data) => (
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
             {data.Name}
              </TableCell>
              <TableCell align="right">{data.Task}</TableCell>
  
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}
