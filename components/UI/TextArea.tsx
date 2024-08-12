import React from "react";

const TextArea = () => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">Description</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Bio"
      ></textarea>
    </label>
  );
};

export default TextArea;
