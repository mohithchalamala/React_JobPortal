import React from "react";
import InputField from "../comp/inputField";

function EmploymentType({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Employement Type</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          ></input>
          <span className="checkmark"></span>All
        </label>
        <InputField
          handlechange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handlechange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handlechange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test"
        />
      </div>
    </div>
  );
}

export default EmploymentType;
