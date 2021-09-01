import React from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
