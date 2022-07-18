import React from "react";
import { Link } from "react-router-dom";
function AddProfileDetails() {
  return (
    <div className="AddProfile-detaills-page">
      <div class="row g-3">
        <div class="col">
          <label for="inputAge" class="form-label">
            Age
          </label>
          <input
            type="Number"
            class="form-control"
            placeholder="Enter your age"
          />
        </div>
        <div class="col">
          <label for="inputEmail" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your Email"
          />
        </div>
        <div class="col">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col">
          <label for="inputprofession" class="form-label">
            profession
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your profession"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Add
      </button>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default AddProfileDetails;
