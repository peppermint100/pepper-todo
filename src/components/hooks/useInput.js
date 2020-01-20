import { useState } from "react";

export const useInput = (condition, msg) => {
  const [value, setValue] = useState("");
  const onChange = e => {
    if (condition(value)) {
      setValue(e.target.value);
    } else {
      window.alert(msg);
      setValue("");
    }
  };

  return { value, onChange };
};
