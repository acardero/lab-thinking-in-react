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
      products: fileData.data,
    };
  }

  handleSearch = e => {
    this.setState({ query: e.target.value }, () =>
      console.log(this.state.query)
    );
  };

  handleCheckBox = () => {
    const { checked } = this.state;

    this.setState({
      checked: !checked,
    });
  };

  render() {
    const { checked, products } = this.state;

    return (
      <div className="FilterProductTable">
        <h1>IronStore</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          handleCheckBox={this.handleCheckBox}
        />
        <ProductTable checked={checked} products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
