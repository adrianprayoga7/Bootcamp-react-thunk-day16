import React from "react";

//untuk membuat search bar dan di tampilkan di layar
class SearchBar extends React.Component {
    state = {
      term: ''
    };

    //berfungsi untuk menghandle event onClick ketika diklik maka handleChange akan dijalankan
    handleChange = (event) => {
      this.setState ({
        term: event.target.value
      });
    };

    //berfungsi untuk menghandle event onSubmit
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.handleFormSubmit(this.state.term);
    }

    render() {
      return (
        <div className='search-bar ui segment'>
          <form onSubmit={this.handleSubmit} className="ui form">
              <div className='field'>
                <label htmlFor='video-search'>Video Search</label>
                <input onChange={this.handleChange} name='video-search' type="text"
                value={this.state.term}/>
              </div>
          </form>
        </div>
      )
    }
}

export default SearchBar;