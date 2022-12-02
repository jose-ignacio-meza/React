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
      title: "skate lab",
      price: 6000,
      stock: 12,
      category: "skate",
      thumbnail: "./img/skate1.jpg",
      description: "Un skate completo de la marca LAB",
    },
    {
      id: 2,
      title: "skate shaman",
      price: 42800,
      stock: 12,
      category: "skate",
      thumbnail: "./img/skate2.jpg",
      description: "Un skate completo de la marca Shaman, industria Nacional",
    },
    {
      id: 3,
      title: "skate locas",
      price: 60000,
      stock: 5,
      category: "skate",
      thumbnail: "./img/skate3.jpg",
      description: "Un skate completo de la marca Locas",
    },
    {
      id: 4,
      title: "skate rad",
      price: 70000,
      stock: 4,
      category: "skate",
      thumbnail: "./img/skate4.jpg",
      description: "Un skate completo de la marca RAD, marca europea",
    },
    {
      id: 5,
      title: "ruedas white classic",
      price: 9000,
      stock: 20,
      category: "ruedas",
      thumbnail: "./img/ruedas1.jpg",
      description: "Juego de 4 ruedas de la marca woodoo, white classics silicona dura",
    },
    {
      id: 6,
      title: "ruedas Banga",
      price: 7500,
      stock: 12,
      category: "ruedas",
      thumbnail: "./img/ruedas2.jpg",
      description: "Juego de 4 ruedas de la marca Banga ",
    },
    {
      id: 7,
      title: "ruedas spitfire ",
      price: 1200,
      stock: 8,
      category: "ruedas",
      thumbnail: "./img/ruedas3.jpg",
      description: "Juego de 4 ruedas de la marca spitfire, europeas reforzadas",
    },
    {
      id: 8,
      title: "ruedas PoolBuster ",
      price: 5000,
      stock: 25,
      category: "ruedas",
      thumbnail: "./img/ruedas4.jpg",
      description: "Juego de 4 ruedas de la marca PoolBuster, tamaño 55",
    },
    {
      id: 9,
      title: "trucks Ace negros  ",
      price: 30000,
      stock: 12,
      category: "trucks",
      thumbnail: "./img/trucks1.jpg",
      description: "Par de trucks de la marca Ace negros cromados",
    },
    {
      id: 10,
      title: "trucks fire ",
      price: 26000,
      stock: 8,
      category: "trucks",
      thumbnail: "./img/trucks2.jpg",
      description: "Par de trucks de la marca fire",
    },
    {
      id: 11,
      title: "trucks euro ",
      price: 17000,
      stock: 40,
      category: "trucks",
      thumbnail: "./img/trucks3.jpg",
      description: "Par de trucks de la marca euro ",
    },
    {
      id: 12,
      title: "trucks fiber",
      price: 40000,
      stock: 2,
      category: "trucks",
      thumbnail: "./img/trucks4.jpg",
      description: "Par de trucks de la marca fiber ",
    },
    {
      id: 13,
      title: "lija ohClock ",
      price: 2000,
      stock: 60,
      category: "lija",
      thumbnail: "./img/lija1.jpg",
      description: "Lija con pegamento de la marca ohClock",
    },
    {
      id: 14,
      title: "lija  woodoo animal print ",
      price: 2000,
      stock: 60,
      category: "lija",
      thumbnail: "./img/lija2.jpg",
      description: "Lija con pegamento de la marca woodoo, diseño especial animal print  ",
    },
    {
      id: 15,
      title: "lija trasher fire ",
      price: 2000,
      stock: 60,
      category: "lija",
      thumbnail: "./img/lija3.jpg",
      description: "Lija con pegamento de la marca trasher",
    },
    {
      id: 16,
      title: "lija trasher classic",
      price: 2000,
      stock: 60,
      category: "lija",
      thumbnail: "./img/lija4.jpg",
      description: "Lija con pegamento de la marca thasher ",
    },
    {
      id: 17,
      title: "tabla woodoo",
      price: 12000,
      stock: 10,
      category: "tabla",
      thumbnail: "./img/tabla1.jpg",
      description: "Tabla de la marca woodoo ",
    },
    {
      id: 18,
      title: "tabla Santa Cruz",
      price: 9000,
      stock: 15,
      category: "tabla",
      thumbnail: "./img/tabla2.jpg",
      description: "Tabla de la marca Santa Cruz,modelo dragon ball",
    },
    {
      id: 19,
      title: "tabla woodoo",
      price: 16000,
      stock: 19,
      category: "tabla",
      thumbnail: "./img/tabla3.jpg",
      description: "Tabla de la marca woodoo, modelo jardin ",
    },
    {
      id: 20,
      title: "tabla SH",
      price: 15000,
      stock: 22,
      category: "tabla",
      thumbnail: "./img/tabla4.jpg",
      description: "Tabla de la marca SH ",
    },
    
   ]

   const collectRef = collection(dataBase,"productos");

   for (let producto of DB){
    producto.index = producto.id;
    delete producto.id;
    const docRef= await addDoc( collectRef,producto)
    console.log(docRef.id);
   }
}