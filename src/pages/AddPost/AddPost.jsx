import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import categories from '../../data/categories'
// import styles from './AddPost.module.css'

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
    <FormControl variant="filled" fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formData.category}
        label="Category"
        onChange={handleChange}
        name="category"
      >
        {categories.map((category, idx) => (
          <MenuItem value={category} key={idx} dense>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
    <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
    </Box>
  );
}

export default AddPost
