import React from "react";
import InputField from "../comp/inputField";

function WorkExperiance({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          ></input>
          <span className="checkmark"></span>Any Experience
        </label>
        <InputField
          handlechange={handleChange}
          value="Intership"
          title="Intership"
          name="test"
        />
        <InputField
          handlechange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test"
        />
      </div>
    </div>
  );
}

export default WorkExperiance;
