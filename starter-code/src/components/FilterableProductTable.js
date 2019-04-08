import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import fileData from '../data.json';

// in other words, class FilterableProductTable inherits from Component
class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      checked: false,
      filterProducts: fileData.data,
      products: fileData.data,
    };
  }

  handleSearch = e => {
    const { products } = this.state;
    const value = e.target.value;
    this.setState({ query: value });
    const newFilteredProducts = products.filter(eachProduct =>
      eachProduct.name.includes(value)
    );
    this.setState({ filterProducts: newFilteredProducts });
  };

  handleCheckBox = () => {
    const { checked } = this.state;

    this.setState({
      checked: !checked,
    });
  };

  render() {
    const { checked, products, query, filterProducts } = this.state;

    return (
      <div className="FilterProductTable">
        <h1>IronStore</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          handleCheckBox={this.handleCheckBox}
        />
        <ProductTable
          checked={checked}
          products={query.length ? filterProducts : products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
