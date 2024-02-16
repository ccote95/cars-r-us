const transientState = {
  paintId: 0,
  interiorId: 0,
  technologyId: 0,
  wheelId: 0,
};
export const setPaintOption = (chosenPaint) => {
  transientState.paintId = chosenPaint;
  console.log(transientState);
};

export const setInteriorOption = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};

export const setTechnologyOption = (chosenTechnology) => {
  transientState.technologyId = chosenTechnology;
  console.log(transientState);
};

export const setWheelOption = (chosenWheels) => {
  transientState.wheelId = chosenWheels;
  console.log(transientState);
};

export const saveCustomOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/orders", postOptions);
  const customEvent = new CustomEvent("newOrderPlaced");
  document.dispatchEvent(customEvent);
};

export const handleCustomOrder = (clickEvent) => {
  if (clickEvent.target.id === "saveButton") {
    if (
      transientState.paintId === 0 ||
      transientState.interiorId === 0 ||
      transientState.technologyId === 0 ||
      transientState.wheelId === 0
    ) {
      window.alert("Please select ALL options");
      clickEvent.preventDefault;
    } else {
      saveCustomOrder();
    }
  }
};
