// import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
// import { Comment } from 'semantic-ui-react';
// import { faker } from '@faker-js/faker';
import 'semantic-ui-css/semantic.min.css';
import unsplash from "./unsplash.js";
import ImageList from "./imageList.js";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);




// class Form extends React.Component {
//   constructor(props) {
//   super(props);
//   this.state = { value: "" };
  
//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//     );
//   }
// }

//untuk membuat search bar dan di tampilkan di layar
class SearchBar extends React.Component {
    state = {term: ""};

    onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmit(this.state.term);
    };

    render() {
      return (
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input 
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value})}
                />
            </div>
          </form>
        </div>
      );
    }
}

//untuk memanggil setiap function atau class untuk dieksekusi
class App extends React.Component {
  state = {images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {query: term},
    });

    this.setState({ images: response.data.results});
    console.log(response.data.results);
  };
  //untuk mengeksekusi setiap class
  render() {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <span>Found: {this.state.images.length} images</span>
          <ImageList foundImages={this.state.images} />
      </div>
    );
  }
}







//merender fungsi App dan menampilkan ke layar
root.render(<App />);

 
