import { setPaintOption } from "./transientState.js";

export const paintOptions = async () => {
  document.addEventListener("change", handlePaintChange);
  const response = await fetch("http://localhost:8088/paints");
  const paintOptions = await response.json();

  let paintHTML =
    "<div><select id='paint'><option value='' selected disabled hidden>Select Paint Color</option>";
  const paintStringArray = paintOptions.map((paint) => {
    return `
        <option value="${paint.id}">${paint.color}</option>`;
  });
  paintHTML += paintStringArray.join("");
  paintHTML += `</select> </div>`;
  return paintHTML;
};

const handlePaintChange = (changeEvent) => {
  if (changeEvent.target.id === "paint") {
    const paintChoice = changeEvent.target.value;
    setPaintOption(paintChoice);
  }
};
