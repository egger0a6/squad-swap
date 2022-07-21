import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}


async function getOneProfile(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function addComment(comment, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/comments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  return res.json()
}

// collection of functions to handle form validation in Account for adding
// comments
function validateFormCollection() {
  function validateFields(formData, errors, setErrors) {
    const tempErrors = {...errors}
    if ("content" in formData) {
      tempErrors.content = formData.content ? "" : "Required"
    }

    setErrors({...tempErrors})
  }

  function checkValidForm(formData, errors) {
    const isValid = formData.content &&
      Object.values(errors).every((val) => val === "")
    return isValid
  }

  return {
    validateFields,
    checkValidForm
  }
}

export { 
  getAllProfiles, 
  addPhoto, 
  getOneProfile, 
  addComment,
  validateFormCollection
}
