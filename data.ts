import { DateTime } from "luxon";

export type Item = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity?: number;
  leftInStock: number;
  backInStock?: {
    date: DateTime;
    quantity: number;
  };
};

export const items: Item[] = [
  {
    id: 4,
    name: "Lemon Poppyseed",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Playful and fruity, mixed with real poppyseeds. Our pride and joy, and Rachel's personal favorite!",
    leftInStock: 9,
    quantity: 1,
  },
  {
    id: 6,
    name: "Hint of Vanilla",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "Mildly scented, with notes of warm vanilla sugar.",
    leftInStock: 5,
    quantity: 1,
  },
  {
    id: 2,
    name: "Lavender",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Serene and unmistakable, Rachel and I love Lavender bars for our kitchen hand washing.",
    leftInStock: 10,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 19),
      quantity: 10,
    },
  },
  {
    id: 7,
    name: "Eucalyptus",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Bold and invigorating. This is Christian's favorite bar for showering.",
    leftInStock: 9,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 20),
      quantity: 10,
    },
  },
  {
    id: 3,
    name: "Spruce",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Masculine and refreshing, with notes of eucalyptus. You feel cleaner just smelling this bar.",
    leftInStock: 10,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 2, 14),
      quantity: 10,
    },
  },
  {
    id: 1,
    name: "Coffee",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Rich, dark, and with a hint of vanilla. This scented bar is made with real, fresh brewed coffee.",
    leftInStock: 0,
    quantity: 1,
  },
  {
    id: 5,
    name: "Sandalwood",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "Mild and homey, with hints of ginger.",
    leftInStock: 0,
    quantity: 1,
  },
];
