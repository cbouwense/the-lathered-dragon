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
    id: 2,
    name: "Lavender",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "A calming scent that is perfect for unwinding after a long day. This scent relaxes the mind and body.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 19),
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
      "Spruce up your shower with this fresh, woodsy scent. This scent is perfect for the outdoorsy type or the holidays.",
    leftInStock: 0,
    quantity: 1,
  },
  {
    id: 4,
    name: "Lemon Poppyseed",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "A fresh splash of citrus and some real poppyseeds for exfoliation.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 17),
      quantity: 10,
    },
  },
  {
    id: 5,
    name: "Sandalwood",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "Mild and homey.",
    leftInStock: 0,
    quantity: 1,
  },
  {
    id: 6,
    name: "Vanilla",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "Mild scent of warm vanilla sugar.",
    leftInStock: 5,
    quantity: 1,
  },
  {
    id: 7,
    name: "Eucalyptus",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "A fresh, clean scent that is perfect for the shower.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 18),
      quantity: 10,
    },
  },
];
