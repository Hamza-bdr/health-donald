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
export type ItemStore = {
  cartItems: CartItems;
  setCartItems: (cartItems: CartItems) => void;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

export type User = null | string;

export type UserStore = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
  isAdmin: boolean;
};
export type Category = {
  name: string;
  imageURL: string;
};

export type CategoryStore = {
  category: Category;
  setCategory: (category: Category) => void;
};

export type AdminStore = {
  adminEdit: boolean;
  setAdminEdit: (adminEdit: boolean) => void;
};
