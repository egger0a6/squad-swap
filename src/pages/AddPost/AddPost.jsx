import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import categories from "../../data/categories";
import { Link } from "react-router-dom";
import { validateFormCollection } from '../../services/postService';
import CancelIcon from '@mui/icons-material/Cancel';
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid"


const AddPost = ({ handleAddPost }) => {

  const [photoData, setPhotoData] = useState({});
  const { validateFields, checkValidForm } = validateFormCollection()
  const [errors, setErrors] = useState({})
  const itemCondition = ["New", "Open Box", "Used (normal wear)", "Rough!"];
  const [formData, setFormData] = useState({
    photo: "",
    title: "",
    price: "",
    category: "",
    description: "",
    condition: "",
    tags: [],
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    validateFields({ [name]: value }, errors, setErrors)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isValid = Object.values(errors).every((val) => val === "") &&
      checkValidForm(formData, errors)
    if (isValid) handleAddPost(formData, photoData.photo)
  };

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] });
  };


  
  return (
    <Grid
      container 
      spacing={0}
      justifyContent="center"
      alignItems="center"
      width='100vw'
      height='90vh'
      style={{ minHeight: "100vh" }}
    >
      <Box
        sx={{
          width: "65%",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <FormControl variant="filled" fullWidth>
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            name="title"
            onChange={handleChange}
            onBlur={handleChange} 
            error={!!errors["title"]}
            {...(errors["title"] && {
              error: true,
              helperText: errors["title"]
            })}
          />
        </FormControl>
        <FormControl variant="filled" fullWidth>
          <TextField
            id="item-desciption"
            label="Description"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
            name="description"
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
            onBlur={handleChange} 
            error={!!errors["condition"]}
            {...(errors["condition"] && {
              error: true,
              helperText: errors["condition"]
            })}
          >
            {itemCondition.map((condition, idx) => (
              <MenuItem value={condition} key={idx}>
                {condition}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          name="price"
          type="number"
          min="0"
          label="Price"
          variant="filled"
          fullWidth
          onChange={handleChange}
          onBlur={handleChange} 
          error={!!errors["price"]}
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
            error={!!errors["category"]}
            {...(errors["category"] && {
              error: true,
              helperText: errors["category"]
            })}
          >
            {categories.map((category, idx) => (
              <MenuItem value={category} key={idx} dense>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" fullWidth>
          <Button variant="contained" component="label">
          <input
            type="file"
            id="photo-upload-input"
            name="photo"
            onChange={handleChangePhoto}
            hidden
          />
            Add Photo
          </Button>
        </FormControl>
        <Button 
          type="submit" 
          fullWidth 
          variant="contained" sx={{ mt: 3, mb: 2 }}
          disabled={!checkValidForm(formData, errors)}
        >
          Post
        </Button>
        <Box sx={{display: "flex", width: "100%", justifyContent: "flex-end"}}>
          <Link to={"/"}><CancelIcon sx={{color: "#29b6f6"}}/></Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddPost;
