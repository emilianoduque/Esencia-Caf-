import dataBase from "../DataBase/db.js";
import { addDoc, collection} from "firebase/firestore";

const products = [
    {
        categoria: "bebida",
        nombre: "Capuchino",
        descripcion: "Un clásico café italiano con la mezcla perfecta de espresso, leche espumada y un toque de canela.",
        precio: 150,
        stock: 25,
        img: "/img/capuchino.png"
    },
    {
        categoria: "bebida",
        nombre: "Expreso",
        descripcion: "Un café puro y fuerte, ideal para los amantes de un sabor intenso y auténtico.",
        precio: 120,
        stock: 30,
        img: "/img/expreso.png"
    },
    {
        categoria: "bebida",
        nombre: "Latte",
        descripcion: "Una suave combinación de espresso y leche vaporizada, perfecto para acompañar tus mañanas.",
        precio: 160,
        stock: 20,
        img: "/img/latte.png"
    },
    {
        categoria: "bebida",
        nombre: "Café Normal",
        descripcion: "Un café clásico y reconfortante para disfrutar a cualquier hora del día.",
        precio: 100,
        stock: 40,
        img: "/img/cafe-normal.png"
    },
    {
        categoria: "comida",
        nombre: "Medialuna",
        descripcion: "Un delicioso croissant dulce y mantecoso, perfecto para acompañar tu bebida favorita.",
        precio: 50,
        stock: 40,
        img: "/img/medialuna.png"
    },
    {
        categoria: "comida",
        nombre: "Bizcocho",
        descripcion: "Pequeñas delicias horneadas con un toque de azúcar, ideales para compartir.",
        precio: 45,
        stock: 50,
        img: "/img/bizcocho.png"
    },
    {
        categoria: "bebida",
        nombre: "Mocaccino",
        descripcion: "Una deliciosa mezcla de espresso, chocolate y leche espumada, perfecta para los más golosos.",
        precio: 170,
        stock: 15,
        img: "/img/mocaccino.png"
    },
    {
        categoria: "comida",
        nombre: "Tostada",
        descripcion: "Rebanadas de pan perfectamente tostadas, listas para disfrutar con tus acompañamientos favoritos.",
        precio: 60,
        stock: 35,
        img: "/img/tostada.png"
    },
    {
        categoria: "comida",
        nombre: "Brownie",
        descripcion: "Un clásico de chocolate con una textura densa y un sabor irresistible.",
        precio: 100,
        stock: 20,
        img: "/img/brownie.png"
    }
];

const seedProducts = () => {
    const productsRef = collection(dataBase, "Productos");
    products.map(({...dataProduct}) => {
        addDoc(productsRef, dataProduct);
        return
    });
};

seedProducts();