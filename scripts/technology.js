import { setTechnologyOption } from "./transientState.js";

export const techOptions = async () => {
  document.addEventListener("change", handleTechnologyChange);
  const response = await fetch("http://localhost:8088/technologies");
  const techOptions = await response.json();

  let techHTML =
    "<div><select id='technology'><option value='' selected disabled hidden>Select Technology</option>";
  const techStringArray = techOptions.map((technology) => {
    return `
    <option value = "${technology.id}">${technology.techOption}</option>`;
  });
  techHTML += techStringArray.join("");
  techHTML += `</select> </div>`;
  return techHTML;
};

const handleTechnologyChange = (changeEvent) => {
  if (changeEvent.target.id === "technology") {
    const technologyChoice = changeEvent.target.value;
    setTechnologyOption(technologyChoice);
  }
};
