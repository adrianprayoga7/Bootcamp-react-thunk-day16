
import React from "react";
import ReactDOM from "react-dom/client";
import youtube from "./youtube.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";
import SearchBar from "./SearchBar.js";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);



//untuk memanggil setiap function atau class untuk dieksekusi
class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })
      this.setState({selectedVideo : response.data.items[0]});
      this.setState({
          videos: response.data.items
      })
  };
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }

  render() {
      return (
          <div className='ui container' style={{marginTop: '1em'}}>
              <SearchBar handleFormSubmit={this.handleSubmit}/>
              <div className='ui grid'>
                  <div className="ui row">
                      <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo}/>
                      </div>
                      <div className="five wide column">
                          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}







//merender fungsi App dan menampilkan ke layar
root.render(<App />);

 
