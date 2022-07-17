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

async function addPhoto(photoData, puppyId) {
  const res = await fetch(`${BASE_URL}/${puppyId}/add-photo`, {
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

export {
  create,
  addPhoto,
  getAll,
  update
}