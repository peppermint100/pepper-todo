import { useState } from "react";

export const useInput = (condition, msg) => {
  const [value, setValue] = useState("");
  const onChange = e => {
    if (condition(value)) {
      setValue(e.target.value);
      console.log(value);
    } else {
      console.log(value);
      window.alert(msg);
      setValue("");
    }
  };

  return { value, onChange };
};
