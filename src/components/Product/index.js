import React from 'react'
import styles from "./index.module.css"

const Product = ({ id, name, description, img, deleteProduct }) => {
  return (
    <div className={styles.product}>
      <img className={styles.productImage} src={img} height={140} width={"100%"} alt={name} />
      <div className={styles.description}>
        <span>{name}</span>
        <p>{description}</p>
        <button onClick={() => deleteProduct(id)}>Delete Product</button>
      </div>
    </div>
  )
}

export default Product;

