import { customOrders } from "./displayOrders.js";
import { interiorOptions } from "./interior.js";
import { paintOptions } from "./paint.js";
import { saveOrder } from "./placeOrder.js";
import { techOptions } from "./technology.js";
import { wheelOptions } from "./wheels.js";

const container = document.querySelector(".container");

const render = async () => {
  const paintOptionsHTML = await paintOptions();
  const interiorOptionsHTML = await interiorOptions();
  const technologyOptionsHTML = await techOptions();
  const wheelOptionsHTML = await wheelOptions();
  const saveButton = saveOrder();
  const displayOrder = await customOrders();

  const composeHTML = `
  <h1>Cars-R-Us</h1>
  <article class="choices">
  <div>
    <section class="choices__paint options">
    <h2>Paint</h2>
    ${paintOptionsHTML}
    </section>

    <section class="choices__interior options">
    <h2>Interior</h2>
    ${interiorOptionsHTML}
    </section>
    </div>

    <div>
    <section class = "choices__wheel options">
    <h2>Wheels</h2>
    ${wheelOptionsHTML}
    </section>
    
    <section class = "choices__technology options">
    <h2>Technology</h2>
    ${technologyOptionsHTML}
    </section>
    </article>
    </div>

    <article class='save'>
    ${saveButton}
    </article>
    <article>
    <h2>Custom Orders</h2>
    ${displayOrder}
    </article>

 `;
  container.innerHTML = composeHTML;
};
document.addEventListener("newOrderPlaced", render);
render();
