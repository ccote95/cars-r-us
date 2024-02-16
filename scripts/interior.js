import { setInteriorOption } from "./transientState.js";

export const interiorOptions = async () => {
  document.addEventListener("change", handleInteriorChange);
  const response = await fetch("http://localhost:8088/interiors");
  const interiorOptions = await response.json();

  let interiorHTML =
    "<div><select id='interior'><option  value='' selected disabled hidden>Select Interior</option>";
  const interiorStringArray = interiorOptions.map((interior) => {
    return `<option value="${interior.id}">${interior.interiorType}</option>`;
  });
  interiorHTML += interiorStringArray.join("");
  interiorHTML += `</select></div>`;
  return interiorHTML;
};

const handleInteriorChange = (changeEvent) => {
  if (changeEvent.target.id === "interior") {
    const interiorChoice = changeEvent.target.value;
    setInteriorOption(interiorChoice);
  }
};
