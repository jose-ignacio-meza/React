const itemsDB = [
    {
      id: 1,
      title: "skate lab",
      price: 50000,
      stock: 7,
      category: "skate",
      thumbnail: "./skate1.png",
      description: "Un skate completo de la marca Labs",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      stock: 34,
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    }
    ,
    {
      id: 3,
      title: "iPhone 13",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 1099,
      stock: 23,
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      stock: 123,
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      stock: 32,
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      stock: 83,
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      stock: 50,
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      stock: 68,
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      stock: 96,
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    }]

export default function getItemsFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsDB);
      }, 500);
    });
  }

export function getSingleItemFromAPI(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = itemsDB.find((item) => item.id === Number(id));
        if (itemRequested) {
          resolve(itemRequested);
        } else {
          reject(new Error("El item no se encuentra."));
        }
      }, 1000);
    });
  }

export function getItemByCategoryFromAPI(category){
     return new Promise ((resolve, reject) => {
      setTimeout(()=> {
        let categoryRequest = itemsDB.filter(
          (item ) => category === item.category )
        resolve(categoryRequest);
      },1000 )
     } ) 
  }