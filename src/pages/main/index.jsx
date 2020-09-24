import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios-config";
import "./styles.css";

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const {
      data: { docs, ...productInfo },
    } = await axios.get(`/products?page=${page}`);
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    if (this.state.page === 1) return;

    this.loadProducts(this.state.page - 1);
  };

  nextPage = () => {
    if (this.state.page === this.state.productInfo.pages) return;

    this.loadProducts(this.state.page + 1);
  };

  render() {
    return (
      <div className='product-list'>
        {this.state.products.map((item) => (
          <article key={item._id}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <Link to={`/products/${item._id}`}>Acessar</Link>
          </article>
        ))}
        <div className='actions'>
          <button disabled={this.state.page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <p>
            Página {this.state.page}/{this.state.productInfo.pages}
          </p>
          <button
            disabled={this.state.page === this.state.productInfo.pages}
            onClick={this.nextPage}
          >
            Próximo
          </button>
        </div>
      </div>
    );
  }
}
