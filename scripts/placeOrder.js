import { handleCustomOrder } from "./transientState.js";

export const saveOrder = () => {
  document.addEventListener("click", handleCustomOrder);
  return "<div class='saveButton'><button id='saveButton'>Place Order</button></div>";
};
