export const customOrders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel "
  );
  const orders = await fetchResponse.json();
  let ordersHTML = "";
  const oderString = orders.map((order) => {
    const orderPrice =
      order.paint.price +
      order.interior.price +
      order.technology.price +
      order.wheel.price;
    // To automatically format the number as currency
    const formattedOrderPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `<div>${order.paint.color} with ${order.wheel.wheelOption}, ${order.interior.interiorType}, and ${order.technology.techOption} for a total cost of ${formattedOrderPrice}</div>`;
  });
  ordersHTML += oderString.join("");
  return ordersHTML;
};
