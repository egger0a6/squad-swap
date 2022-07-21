import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/offers`

async function create(offer) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(offer)
  })
  return res.json()
}

async function update(offer) {
  const res = await fetch(`${BASE_URL}/${offer._id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(offer)
  })
  return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function getPostOffers(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

// collection of functions to handle form validation in AddOffer
function validateFormCollection() {
  function validateFields(formData, errors, setErrors) {
    const tempErrors = {...errors}
    if ("price" in formData) {
      tempErrors.price = formData.price ? "" : "Required"
    }

    setErrors({...tempErrors})
  }

  function checkValidForm(formData, errors) {
    const isValid = formData.price &&
      Object.values(errors).every((val) => val === "")
    return isValid
  }

  return {
    validateFields,
    checkValidForm
  }
}

export {
  create,
  update,
  deleteOne,
  getPostOffers,
  validateFormCollection
}