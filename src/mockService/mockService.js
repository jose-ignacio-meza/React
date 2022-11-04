const itemsDB = [
    {
      id: 1,
      title: "iPhone 9",
      price: 649,
      stock: 2,
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      description: "An apple mobile which is nothing like apple",
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
    }]

export default function getItemsFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsDB);
      }, 500);
    });
  }

export function getSingleItemFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = itemsDB.find((item) => item.id === Number(1));
  
        if (itemRequested) {
          resolve(itemRequested);
        } else {
          reject(new Error("El item no se encuentra."));
        }
      }, 1000);
    });
  }