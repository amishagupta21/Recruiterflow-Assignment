import './App.css';
import logo from "./assests/icons/logo.PNG"
import womenJeans from "./assests/images/womenjeans.jpg"
import womenBags from "./assests/images/womenbags.jpg"
import womenTshirt from "./assests/images/tshirt.jpg"
import womenCosmetic from "./assests/images/cosmetic.jpg"
function App() {
  const products = [
    {
      productImage: womenJeans,
      productName: "Women Jeans: Body Fit",
      productInfo: "Buy Jeans for Women online at best prices."
    },
    {
      productImage:womenBags,
      productName:"Women Bags - Leather",
      productInfo:" Buy designer handbags, leather handbags for women."
    },
    {
      productImage:womenTshirt,
      productName:"Women Tshirt - Cotton",
      productInfo:" Buy T-shirts online for women in India."
    },
    {
      productImage:womenCosmetic,
      productName:"Women Cosmetics",
      productInfo:" Buy cosmetics & beauty products online"
    }

  ]
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} height={50} width={200} alt="recuriterflow-logo" />
        </div>
        <div className="addProductButton">
          <button>Add Product</button>
        </div>
      </div>
      <div className="productResultContainer">
        {products.map(product => {
          return (
            <div className="viewProduct">
              <div className="productImage">
                <img src={product.productImage} height={140} width={"200"} alt="products" />
              </div>
              <div className="productInfo">
                <span>{product.productName}</span>
                <p>{product.productInfo}</p>
                <button>Delete Product</button>
              </div>
            </div>
          )
        })}
        {/* <div className="viewProduct">
          <div className="productImage">
            <img src={productjeans} height={140} width={200} alt="products" />
          </div>
          <div className="aboutProduct">
            <span>Women Jeans: Body Fit</span>
            <p>Buy Jeans for Women online at best prices.</p>
            <button>Delete Product</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
