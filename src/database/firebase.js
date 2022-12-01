import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection ,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHUuTKSDMya8sQt1-jpVadlqvv99_Ja7s",
  authDomain: "ecommerce-meza.firebaseapp.com",
  projectId: "ecommerce-meza",
  storageBucket: "ecommerce-meza.appspot.com",
  messagingSenderId: "750868732109",
  appId: "1:750868732109:web:cb2d6d0837883fd31e3184"
};


const firebaseApp = initializeApp(firebaseConfig);
const dataBase = getFirestore(firebaseApp)

export async function getItemsFromAPI(){
try{
    const collectionProducts = collection(dataBase,"productos")
    let snapshotDB = await getDocs(collectionProducts) 
    const productos = snapshotDB.docs.map (documento => {
        return {
            ...documento.data(),
            id:documento.id}
    }) 

    return productos;
}catch(error){
    console.error(error)
}
} 
export async function getSingleItemFromAPI(id){

    const docRef = doc(dataBase,"productos",id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        console.log("Existe" + docSnap.data());
        return {
            ...docSnap.data(),
            id: docSnap.id,
        }
    }else{
        console.error("el item no existe")
    }
}

export async function getItemByCategoryFromAPI(categoryID){

    const productosRef = collection(dataBase, "productos")
    const myQuery = query (productosRef, where ("category", "==" ,categoryID))
    const producsSnapshot = await getDocs (myQuery);
    const arrayVacio = producsSnapshot.length<1;
    
    if (arrayVacio) return <h3>No hay items de esa categoria</h3>
    
    const productos = producsSnapshot.docs.map((docu) => {
        return {
            ...docu.data(),
            id: docu.id
        }
    })

    return productos;
}
export async function crerateBuyOrderFirestore(ordenDeCompra){
    const collectionRef = collection(dataBase, 'ordenesDeCompra')
    const docRef = await addDoc(collectionRef,ordenDeCompra)
    return (docRef.id);
}

export async function cargaDeDatos(){
   const DB = [
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
      }
   ]

   const collectRef = collection(dataBase,"productos");

   for (let producto of DB){
    producto.index = producto.id;
    delete producto.id;
    const docRef= await addDoc( collectRef,producto)
    console.log(docRef.id);
   }
}