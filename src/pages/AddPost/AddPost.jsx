import { useState } from "react";

function AddPost(props) {

  const [itemCondition, setItemCondtion] = useState(["New", "Open Box", "Used (normal wear)", "Rough!"])

  return (
    <>
      <h1>Post an Item</h1>
      <form autoComplete="off">
        <div>
          <label htmlFor="name-input" className="form-label">
            Title
          </label>
          <input
            type='text'
            className="form-control"
            id="name-input"
            name="name"
            required
          />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            required
          />
          
        </div>
      </form>
    </>
  )
}

export default AddPost