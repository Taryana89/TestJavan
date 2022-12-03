import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import profile from "../assets/photo.jpg";
import {
  getCart,
  addQty,
  minQty,
  deleteCart,
} from "../config/redux/action/cartAction";
import "./cart.css";

function Carts() {
  const { cart, qty } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [Payment, setPayment] = useState("");
  const [checkout, setCheckout] = useState(false);
  console.log(cart);
  console.log(qty);
  let totalHarga = 0;
  for (let i = 0; i < cart.length; i++) {
    totalHarga += cart[i].price * cart[i].qty;
  }
  const handleCheckout = (e) =>{
    e.preventDefault()
    Swal.fire({
      title: "Success",
      icon: "success"
    })
    setCheckout(true)
  }
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid d-flex justify-content-center">
          <h1 class="navbar-brand fs-2 text-secondary">Shopping Cart</h1>
        </div>
      </nav>
      <div className="row m-5">
        <div className="col-lg-7 me-4 col-sm-12 mb-5 card">
          <h3 className="m-3">Cart ({checkout === false ? cart.length : "0"} Item)</h3>
          {checkout === false ? cart.map((item, index) => {
            return (
              <>
                <div className="display-custom" key={index}>
                  <div className="col mx-lg-3 mx-md-3 mt-3 mb-2 img">
                    <img
                      src={item.image ? item.image[0] : profile}
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "10px" }}
                    ></img>
                  </div>
                  <div className="col-lg-5 col mt-3 ">
                    <p className="fw-bold fs-4">{item.name}</p>
                    <p className="text-secondary fw-bold">{item.merk}</p>
                    <div className="d-flex mt-5">
                      <button
                        className="btn p-0 m-0  bg-transparent text-secondary text-start me-3"
                        onClick={(e) => {
                          dispatch(deleteCart(item.id));
                          dispatch(getCart());
                        }}
                      >
                        <i className="bi bi-trash3-fill "></i>
                        <span>Remove Product</span>
                      </button>
                      <button className="bg-transparent btn p-0 m-0 text-secondary text-start">
                        <i className="bi bi-heart-fill me-2"></i>
                        <span>Add Wist List</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 col  ms-2 mt-3 ">
                    <div className="d-flex border w-lg-75 ms-lg-5 mb-5">
                      <button
                        className="w-50 bg-transparent border"
                        onClick={(e) => {
                          dispatch(minQty(item.id));
                          dispatch(getCart());
                        }}
                      >
                        -
                      </button>
                      <span className="w-25 text-center  border">
                        {item.qty}
                      </span>
                      <button
                        className="w-50 bg-transparent border"
                        onClick={(e) => {
                          dispatch(addQty(item.id));
                          dispatch(getCart());
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="pt-lg-2 d-flex align-items-end justify-content-end ">
                      <p className="mt-lg-5 me-3 fw-bold text-end">
                        Rp. {item.price}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            )
          }):  " "}
        </div>
        <div className="col-lg-4 col-sm-12 mt-xm-5 h-100">
          <div className="card p-3">
            <h3>Total Payment</h3>
            <div className="row ">
              <div className="col-8">
                <p>Temporary Payment</p>
                <p>Shipping</p>
              </div>
              <div className="col-4 text-end">
                <p>Rp {checkout === false ? totalHarga : "0"}</p>
                <p>Gratis</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-8">
                <p>Total Payment</p>
              </div>
              <div className="col-4 text-end">
                <p>Rp {checkout === false ? totalHarga : "0"}</p>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle={Payment ? "modal" : ""}
              data-bs-target="#staticBackdrop"
            >
              GO TO CHECKOUT
            </button>

            <div
              class="modal fade "
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      CHECKOUT
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div>
                      {cart.length > 0 ? 
                      cart.map((item, index) =>(
                        <>
                        <div className="d-flex mb-5 " key={index}>
                          <img
                            src={item.image ? item.image[0] : profile}
                            width="25%"
                            height="25%"
                            style={{ borderRadius: "10px" }}
                          ></img>
                        <div className="ms-3">
                          <p className="fw-bold fs-6">{item.name}</p>
                          <p className="text-secondary fw-bold">{item.merk}</p>
                        </div>
                        </div>
                        </>
                      )) : ""
                      }
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-7">
                        <h3>Total</h3>
                        <h3>Payment</h3>
                      </div>
                      <div className="col">
                        <h3 className="text-end"><span>Rp</span>{totalHarga}</h3>
                        <h4 className="text-end">{Payment ? Payment : "Hallo"}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div
              className="btn btn-light text-start h-25 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {Payment ? Payment : "Method Payment"}
              <span className="dropdown-toggle float-end"></span>
            </div>
            <ul className="dropdown-menu w-100">
              <li>
                <button
                  className="dropdown-item"
                  value="COD"
                  onClick={(e) => {
                    setPayment(e.target.value);
                  }}
                >
                  COD
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  value="Gopay"
                  onClick={(e) => {
                    setPayment(e.target.value);
                  }}
                >
                  Gopay
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  value="PayPal"
                  onClick={(e) => {
                    setPayment(e.target.value);
                  }}
                >
                  PayPal
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
