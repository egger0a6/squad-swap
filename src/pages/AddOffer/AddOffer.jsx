import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { validateFormCollection } from '../../services/offerService';
import CancelIcon from '@mui/icons-material/Cancel';

const AddOffer = ({handleAddOffer}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const post = location.state.post
  const { validateFields, checkValidForm } = validateFormCollection()
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    price: '',
    comment: '',
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    validateFields({ [name]: value }, errors, setErrors)
  };
  

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const isValid = Object.values(errors).every((val) => val === "") &&
      checkValidForm(formData, errors)
    if (isValid) handleAddOffer(formData, post._id)
  }

  return (
    <Box sx={{ minWidth: 120 }} component="form" onSubmit={handleSubmit}>
      
      <FormControl variant="filled" fullWidth >
        <TextField
          id="offer-comment"
          label="Comment"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          name='comment' 
          onChange={handleChange}
          />
      </FormControl>

      <TextField 
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        name="price"
        type="number"
        min="0"
        label="Price"
        variant='filled'
        fullWidth
        onChange={handleChange}
        onBlur={handleChange} 
        error={!!errors["price"]}
        {...(errors["price"] && {
          error: true,
          helperText: errors["price"]
        })}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!checkValidForm(formData, errors)}
      >
        Make Offer
      </Button>
      
      <Button onClick={() => navigate(-1)}><CancelIcon/></Button>

    </Box>
  );
}

export default AddOffer