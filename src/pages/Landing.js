import { useState } from 'react';
import styles from "./landing.module.css";

// Assets
import logo from "../assests/icons/logo.PNG"
import womenJeans from "../assests/images/womenjeans.jpg"

// Components
import Product from '../components/Product';

// utils
import { generateId } from '../utils/helper';
import { defaultProducts } from '../utils/constants';

function Landing() {
  const [products, setProducts] = useState(defaultProducts);
  
  // Adding new product
  const addProduct = () => {
    // Deep copy of an array of objects because we can not mutate the state directly in react.
    const updatedProducts = [...products];
    const tempProduct = {
      id: generateId(),
      img: womenJeans,
      name: "Women Jeans: Body Fit",
      description: "Buy Jeans for Women online at best prices."
    };
    updatedProducts.push(tempProduct);
    setProducts(updatedProducts);
  };

 // deleting product using unique id
  const deleteProduct = (id) => {
    // here filter will return the updated products array which will not conatin the deleted product
    const updatedProducts = products.filter(item => item.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} height={50} width={200} alt="recuriterflow-logo" />
        <button className={styles.addProductButton} onClick={addProduct}>Add Product</button>
      </header>
      <div className={styles.products}>
        {products.map((product) => <Product key={product.id} {...product} deleteProduct={deleteProduct} />)}
      </div>
    </>
  );
}

export default Landing;
