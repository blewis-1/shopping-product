import React, { Component } from "react";
import NavBar from "../components/nav/NavBar";
import ProductsList from "../components/productList/ProductsList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      productSearch: ""
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((productsData) => {
        // So many errors came from here because the data was an object not array.
        this.setState({ products: productsData.products });
      });
  }

  onTextChange = (event) => {
    this.setState({ productSearch: event.target.value })
    console.log(this.state.productSearch)
  }



  render() {
    let { products } = this.state;
    const productCategories = products.map((catergory) => catergory.category)

    let filterProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(this.state.productSearch.toLowerCase());
    });
    return !products.length ? (
      <div>
        <h1>Loading ... </h1>
      </div>
    ) : (
      <div>
        <NavBar onTextChange={this.onTextChange} productcategories={productCategories} />
        <ProductsList products={filterProducts} />
      </div>
    );
  }
}

export default App;
