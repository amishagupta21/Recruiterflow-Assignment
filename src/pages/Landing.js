//Hooks
import { useEffect, useState } from 'react';
import styles from "./landing.module.css";

// Assets
import logo from "../assests/icons/logo.PNG"

// Components
import Product from '../components/Product';

import axios from 'axios';

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwTh0o8PZ9h5nboNwZwxM6pL3JRV5pmi4AZOLfYRddPWT6xavTGTBB9kRiVfvm7fVyQ/exec"

function Landing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  // Adding new product
  const addProduct = () => {
    setAdding(true);

    const data = {
      name: "Diamond Purse",
      description: "Buy Purse for Women online at best prices.",
      img: "https://rukminim1.flixcart.com/image/832/832/khz693k0-0/sling-bag/4/z/t/women-s-synthetic-leather-beautiful-bridal-handbag-n-handbag-2-n-original-imafxvhhsq7xtfjz.jpeg?q=70"
    };

    axios({
      method: "POST",
      url: API_ENDPOINT,
      data: data,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      }
    }).then((res) => {
      setAdding(false);
      const updateProducts = [...products];
      updateProducts.push(data);
      setProducts(updateProducts);

    }).catch((error) => {
      console.log(error)
    })
  };

  // deleting product using unique id
  const deleteProduct = (id) => {
    // here filter will return the updated products array which will not conatin the deleted product
    const updatedProducts = products.filter(item => item.id !== id);
    setProducts(updatedProducts);
  };

  //Mock(dummy) Api call
  const getproducts = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: API_ENDPOINT
    }).then((respone) => {
      setLoading(false);
      setProducts(respone.data.data)
    }).catch((error) => {
      setLoading(false);
      console.log(error)
    })
  }
  useEffect(() => {
    getproducts() 
  }, [])

  return (
    <>
      <header className={styles.header}>
        <img loading="lazy" className={styles.logo} src={logo} height={50} width={200} alt="recuriterflow-logo" />
        <button disabled={adding} style={{backgroundColor:adding?"red":"#286DF1"}} className={styles.addProductButton} onClick={addProduct}>{adding?"Adding..":"Add Product"}</button>
      </header>
      {loading ? <h1>loading ...</h1> :
        <div className={styles.products}>
          {products.map((product) => <Product key={product.id} {...product} deleteProduct={deleteProduct} />)}

          {adding&&<div className={styles.adding}>
             <div className={styles.loading}></div>
             Adding ....
           </div>}
        </div>
      }
    </>
  );
}

export default Landing;
