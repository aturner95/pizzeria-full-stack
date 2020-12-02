import React, { Component } from "react";
import "../../App.css";
import logo from "./23824_1_600.jpeg";

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row-md-12">
          <div className="col-md-12">
            <h1 className="display-4 text-center">La Pizza Shop</h1>
          </div>

          <div className="row">
            <div className="col-md-6 text-left">
              <h2>
                Profitez de notre fantastique gamme d'aliments et de boissons!
                Tout est fabriqué à partir d'ingrédients locaux.
              </h2>
              <br />
              <p>
                Since opening, we've been swazzing out the finest grub in the
                county. No one comes close. Please come in and try one of our
                stoned baked pizzas, it'll make your bollocks drop off. - the
                Owner
              </p>
            </div>
            <div className="col-md-6 text-right">
              <img src={logo} width="540px" height="auto" />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 text-left">
            <h2> Current Offers</h2>
            <p>We have some offers?</p>
          </div>
          <div className="col-md-6 text-left">
            <h4>Opening Hours</h4>
            <p>
              {" "}
              <strong>MON </strong> <span className="tab" />
              4pm - 11pm <br />
              <strong>TUE </strong> 4pm - 11pm
              <br />
              <strong>WED </strong>4pm - 11pm
              <br />
              <strong>THU </strong>4pm - 11pm
              <br />
              <strong>FRI </strong> 4pm - 12pm
              <br />
              <strong>SAT </strong>4pm - 12pm
              <br />
              <strong>SUN </strong>4pm - 9pm
              <br />
            </p>
            <h4>Location</h4>
            <p>
              Last house on the left <br /> Awful web dev St. <br /> Testtopia{" "}
              <br /> GJ7 0Pl
            </p>
            <h4>Contact</h4>
            <p>
              071234 9854
              <br />
              pizza@store.io
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;
