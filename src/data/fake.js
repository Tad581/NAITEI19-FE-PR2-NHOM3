const productsData = [
  {
    id: "1",
    sku: "asdf123",
    name: "Lorem ipsum jacket",
    price: 12.45,
    discount: 10,
    offerEnd: "October 5, 2020 12:11:00",
    new: false,
    rating: 4,
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: "2",
    sku: "asdf124",
    name: "Lorem ipsum coat",
    price: 18.5,
    discount: 15,
    new: false,
    rating: 3,
    saleCount: 12,
    category: ["fashion", "women"],
    tag: ["fashion", "women", "coat", "full sleeve"],
    variation: [
      {
        color: "blue",
        image: "/assets/img/product/fashion/2.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 6,
          },
          {
            name: "xl",
            stock: 7,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/4.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 8,
          },
          {
            name: "xl",
            stock: 3,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/5.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 0,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },

  {
    id: "3",
    sku: "asdf125",
    name: "Lorem ipsum jacket",
    price: 17.45,
    discount: 40,
    offerEnd: "October 2, 2020 12:11:00",
    new: true,
    rating: 5,
    saleCount: 36,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: "4",
    sku: "asdf126",
    name: "Lorem ipsum fashion coat",
    price: 15.5,
    discount: 0,
    new: true,
    rating: 4,
    saleCount: 20,
    category: ["fashion", "women"],
    tag: ["fashion", "women", "coat", "full sleeve"],
    variation: [
      {
        color: "blue",
        image: "/assets/img/product/fashion/2.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 6,
          },
          {
            name: "xl",
            stock: 7,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/4.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 8,
          },
          {
            name: "xl",
            stock: 3,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/5.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 0,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: "5",
    sku: "asdf127",
    name: "Lorem ipsum female coat",
    price: 25.5,
    discount: 10,
    new: true,
    rating: 5,
    saleCount: 25,
    category: ["fashion", "women"],
    tag: ["fashion", "women", "coat", "full sleeve"],
    variation: [
      {
        color: "blue",
        image: "/assets/img/product/fashion/2.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 6,
          },
          {
            name: "xl",
            stock: 7,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/4.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 8,
          },
          {
            name: "xl",
            stock: 3,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/5.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 0,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: "6",
    sku: "asdf128",
    name: "Lorem ipsum jacket",
    price: 19.85,
    discount: 0,
    offerEnd: "October 17, 2020 12:11:00",
    new: true,
    rating: 5,
    saleCount: 65,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: "7",
    sku: "asdf129",
    name: "Lorem ipsum fashion female coat",
    price: 55.5,
    discount: 40,
    new: true,
    rating: 5,
    saleCount: 55,
    category: ["fashion", "women"],
    tag: ["fashion", "women", "coat", "full sleeve"],
    variation: [
      {
        color: "blue",
        image: "/assets/img/product/fashion/2.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 6,
          },
          {
            name: "xl",
            stock: 7,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/4.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 8,
          },
          {
            name: "xl",
            stock: 3,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/5.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 0,
          },
          {
            name: "xxl",
            stock: 7,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
];

export { productsData };
