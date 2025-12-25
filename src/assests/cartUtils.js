export const groupCartItems = (items) => {
  const map = {};

  items.forEach((item) => {
    if (map[item.id]) {
      map[item.id].quantity += 1;
    } else {
      map[item.id] = { ...item, quantity: 1 };
    }
  });

  return Object.values(map);
};
