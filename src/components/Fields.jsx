import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
const Fields = ({Name, Email, index}) => {
  return (
    <div className="data_val">
    <h3>{Name}</h3>
    <h3>{Email}</h3>
    <Button  variant="contained" color="error">
        <DeleteIcon /> Remove
    </Button>
    
</div>
  )
}

export default Fields;