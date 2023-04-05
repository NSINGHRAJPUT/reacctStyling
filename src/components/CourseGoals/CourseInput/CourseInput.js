import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onAddGoal(enteredValue);
  };
  const submitDetails = () => {};
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div>
        <Button
          type="submit"
          className={isValid ? "button" : "buttons"}
          onButtonSubmit={submitDetails}
        >
          Add Goal
        </Button>
      </div>
    </form>
  );
};

export default CourseInput;
