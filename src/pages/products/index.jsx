import React, { Component } from "react";
import axios from "../../services/axios-config";
import "./style.css";

export default class Products extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { data } = await axios.get(`/products/${this.props.match.params.ID}`);
    this.setState({ product: data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
    );
  }
}
