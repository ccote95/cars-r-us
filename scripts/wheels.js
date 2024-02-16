import { setWheelOption } from "./transientState.js";

export const wheelOptions = async () => {
  document.addEventListener("change", handleWheelChange);
  const response = await fetch("http://localhost:8088/wheels");
  const wheelOptions = await response.json();

  let wheelHTML =
    "<div><select id='wheels'><option  value='' selected disabled hidden>Select Wheel Option</option>";
  const wheelStringArray = wheelOptions.map((wheel) => {
    return `
    <option value='${wheel.id}'>${wheel.wheelOption}</option>`;
  });
  wheelHTML += wheelStringArray.join("");
  wheelHTML += `</select> </div>`;
  return wheelHTML;
};

const handleWheelChange = (changeEvent) => {
  if (changeEvent.target.id === "wheels") {
    const wheelChoice = changeEvent.target.value;
    setWheelOption(wheelChoice);
  }
};
