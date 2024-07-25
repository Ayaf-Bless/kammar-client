export type DeliveryUnit = "D" | "W" | "M" | "Y";

export function formatDeliveryTime(
  deliveryUnit: string,
  expectedDelivery: number,
): string {
  if (expectedDelivery === 0) {
    return "Express Delivery: within 24 hours";
  }

  let unit;

  switch (deliveryUnit) {
    case "D":
      unit = Math.abs(expectedDelivery) === 1 ? "day" : "days";
      break;
    case "W":
      unit = Math.abs(expectedDelivery) === 1 ? "week" : "weeks";
      break;
    case "M":
      unit = Math.abs(expectedDelivery) === 1 ? "month" : "months";
      break;
    case "Y":
      unit = Math.abs(expectedDelivery) === 1 ? "year" : "years";
      break;
    default:
      unit = "days";
  }

  if (expectedDelivery < 0) {
    return `Express option available: reduces delivery time by ${Math.abs(expectedDelivery)} ${unit}`;
  }

  return `Expected delivery time: ${expectedDelivery} ${unit}`;
}
