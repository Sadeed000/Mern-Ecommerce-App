import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <figure>
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top" 
            alt={product.name}
            height="300"
            width={"350px"}
          />
          </figure>
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button
            className="btn btn-dark shadow-sm rounded-pill ms-1 cart_btn"
            onClick={() => {
              setCart([...cart, product]);
              console.log(cart);
              localStorage.setItem("cart", JSON.stringify(cart));
              toast.success("item addded in cart");
            }}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            Add to cart
          </button>{" "}
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products 🤌</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="m-3">
              <div className="product-inner-box position-relative product">
                <div className="icons fs-1">
                  <i class="fa-solid fa-eye"></i>
                  <i class="fa-solid fa-heart"></i>
                </div>
                <Link
                  to={`/product/${p.slug}`}
                  className="text-decoration-none"
                >
                  <img
                    className="img-fluid p-2 p_images"
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt="..."
                    style={{ width: "14rem", height: "15rem" }}
                  />
                  <div className="product_detail d-flex justify-content-between p-1">
                    <span className="card-title">{p.name}</span>
                    <p className="card-price">{`$${p.price}`}</p>
                  </div>
                </Link>
                <button
                  className="btn btn-dark shadow-sm rounded-pill ms-1 cart_btn"
                  onClick={() => {
                    setCart([...cart, p]);
                    console.log(cart);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    toast.success("item addded in cart");
                  }}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
