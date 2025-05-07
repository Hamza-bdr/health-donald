export type Item = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};
export type CartItem = {
  item: Item;
  quantity: number;
};
export type CartItems = {
  [id: string]: {
    item: Item;
    quantity: number;
  };
};
