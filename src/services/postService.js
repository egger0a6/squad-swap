import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function create(post) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  return res.json()
}

async function addPhoto(photoData, postId) {
  const res = await fetch(`${BASE_URL}/${postId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function getOne(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function update(post) {
  const res = await fetch(`${BASE_URL}/${post._id}`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
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

async function closePost(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}


// collection of functions to handle form validation in EditPost
function validateFormCollection() {
  function validateFields(formData, errors, setErrors) {
    const tempErrors = {...errors}
    if ("title" in formData) {
      tempErrors.title = formData.title ? "" : "Required"
    }
    if ("condition" in formData) {
      tempErrors.condition = formData.condition ? "" : "Required"
    }
    if ("price" in formData) {
      tempErrors.price = formData.price ? "" : "Required"
    }
    if ("category" in formData) {
      tempErrors.category = formData.category ? "" : "Required"
    }

    setErrors({...tempErrors})
  }

  function checkValidForm(formData, errors) {
    const isValid = formData.title &&
      formData.condition &&
      formData.price &&
      formData.category &&
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
  addPhoto,
  getAll,
  getOne,
  update,
  deleteOne,
  closePost,
  validateFormCollection
}