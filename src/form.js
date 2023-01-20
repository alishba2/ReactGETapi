import React from 'react'

export default function form() {
    const [formInputData, setformInputData] = useState(
        {
        Name:'',
        DOB:''
       }
    );
    const handleChange=(evnt)=>{  
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
       setformInputData(newInput)
    }
    const handleSubmit= (evnt) =>{
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
        if(checkEmptyInput)
        {
         const newData = (data)=>([...data, formInputData])
         setTableData(newData);
         const emptyInput= {Name:'', Task:''}
         setformInputData(emptyInput)
        }
    } 
  return (
    <div>
        <form>
       
       <div className='input'>
       <TextField type="text"  onChange={handleChange}  value={formInputData.Name} id="outlined-basic" label="Name" name="Name" variant="outlined" />
       </div>
           
       <div className='input'>
       <TextField type="text"  onChange={handleChange}  value={formInputData.Task} id="outlined-basic" label="Task" name="Task" variant="outlined" />
       </div>


       <div  className='Addbtn'>
         <Button  type="submit" onClick={handleSubmit} variant="contained" href="#contained-buttons">
        Add
      </Button>
       </div>

        </form>
    </div>
  )
}
