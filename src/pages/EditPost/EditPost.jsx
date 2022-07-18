import { useState } from 'react';
import { useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import categories from '../../data/categories'
import { validateFormCollection } from '../../services/postService';

const EditPost = ({handleUpdatePost}) => {
  const [photoData, setPhotoData] = useState({})
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.post)
  const { validateFields, checkValidForm } = validateFormCollection()
  const [errors, setErrors] = useState({})
  const itemCondition = ["New", "Open Box", "Used (normal wear)", "Rough!"]

  // const [formData, setFormData] = useState({
  //   image: '',
  //   title: '',
  //   price: "",
  //   category: '',
  //   description: '',
  //   condition: '',
  //   tags: [],
  // })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    validateFields(formData, errors, setErrors)
  };
  

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const isValid = Object.values(formData).evert((val) => val === "") &&
      checkValidForm(formData, errors)
    if (isValid) handleUpdatePost(formData, photoData)
  }

  return (
    <>
      <Box 
        sx={{ minWidth: 120 }} 
        component="form" 
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <FormControl variant="filled" fullWidth >
          <TextField
            id="filled-basic" 
            label="Title" 
            variant="filled" 
            name='title'
            defaultValue={formData.title}
            onChange={handleChange}
            onBlur={handleChange} 
            error={errors["title"]}
            {...(errors["title"] && {
              error: true,
              helperText: errors["title"]
            })}
          />
        </FormControl>
        <FormControl variant="filled" fullWidth >
          <TextField
            id="item-description"
            label="Description"
            multiline
            rows={4}
            defaultValue={formData.description}
            variant="filled"
            name='description' 
            onChange={handleChange}
            onBlur={handleChange} 
            error={errors["description"]}
            {...(errors["description"] && {
              error: true,
              helperText: errors["description"]
            })}
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
            onBlur={handleChange} 
            error={errors["condition"]}
            {...(errors["condition"] && {
              error: true,
              helperText: errors["condition"]
            })}
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
          max="100000"
          label="Price"
          variant='filled'
          fullWidth
          defaultValue={formData.price}
          onChange={handleChange} 
          onBlur={handleChange} 
            error={errors["price"]}
            {...(errors["price"] && {
              error: true,
              helperText: errors["price"]
            })}
        />
        <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.category}
          label="Category"
          onChange={handleChange}
          name="category"
          onBlur={handleChange} 
            error={errors["category"]}
            {...(errors["category"] && {
              error: true,
              helperText: errors["category"]
            })}
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
          disabled={!checkValidForm(formData, errors)}
        >
          Post
        </Button>
      </Box>
    </>
  );
}

export default EditPost