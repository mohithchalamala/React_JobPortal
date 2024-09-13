import React from "react";
import InputField from "../comp/inputField";

function JobPostingData({ handleChange }) {
    const now = new Date()
    const TwentyFourHoursAgo = new Date( now - 24 * 60 * 60 * 1000)
    const SevenDaysAgo = new Date( now - 7 * 24 * 60 * 60 * 1000)
    const ThirtDaysAgo = new Date( now - 30 * 24 * 60 * 60 * 1000)

    //converting the above date format to 12/02/2024 format (Since it should match to json data format)
    const TwentyFourHoursAgoDate = TwentyFourHoursAgo.toISOString().slice(0,10)
    const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10)
    const ThirtyDaysAgoDate = ThirtDaysAgo.toISOString().slice(0,10)
    
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>
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
          value={TwentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handlechange={handleChange}
          value={SevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handlechange={handleChange}
          value={ThirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
}

export default JobPostingData;
