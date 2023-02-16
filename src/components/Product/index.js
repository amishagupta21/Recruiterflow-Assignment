import React, { useState } from 'react'
import styles from "./index.module.css"

const Product = ({ id, name, description, img, deleteProduct }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const _deleteProduct = () => {
    setIsDeleted(!isDeleted);
    setTimeout(() => {
      deleteProduct(id);
    }, 500);
  }
  return (
    <div className={isDeleted?styles.product2:styles.product}>
      <img loading="lazy" className={styles.productImage} src={img} height={140} width={"100%"} alt={name} />
      <div className={styles.description}>
        <span>{name}</span>
        <p>{description}</p>
        <button onClick={_deleteProduct}>Delete Product</button>
      </div>
    </div>
  )
}

export default Product;

