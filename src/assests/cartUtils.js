export const groupCartItems = (items) => {
  const map = {};

  items.forEach((item) => {
    const key =
      item.color || item.variant
        ? `${item.id}_${item.color || ""}_${item.variant || ""}`
        : `${item.id}`;
    const qty = item.qty || 1;
    if (map[key]) {
      map[key].quantity += qty;
    } else {
      map[key] = {
        ...item,
        name: item.name || item.title || "Product",
        quantity: qty,
      };
    }
  });

  return Object.values(map);
};
