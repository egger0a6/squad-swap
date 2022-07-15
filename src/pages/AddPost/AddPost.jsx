import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const AddPost = () => {
  const [age, setAge] = useState('');

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    price: "",
    category: '',
    description: '',
    condition: '',
    tags: [],
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  };
  
  const itemCondition = ["New", "Open Box", "Used (normal wear)", "Rough!"]
 
  
  return (
    <Box sx={{ minWidth: 120 }} component="form" >
      <FormControl variant="filled" fullWidth >
        <TextField id="filled-basic" label="Title" variant="filled" name='title' onChange={handleChange} />
        </FormControl>
      <FormControl variant="filled" fullWidth >
        <TextField
          id="item-desciption"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          name='description' 
          onChange={handleChange}
          />
      </FormControl>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Condition</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.condition}
          label="Condition"
          onChange={handleChange}
          name="condition"
        >
          {itemCondition.map((condition, idx) => (
            <MenuItem value={condition} key={idx}>{condition}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField 
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
      name="price"
      type="number"
      min="0"
      label="Price"
      variant='filled'
      fullWidth
      onChange={handleChange} />

    </Box>
  );
}

export default AddPost

