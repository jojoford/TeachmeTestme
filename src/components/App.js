import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
    state={ videoData : [], selectedVideo: null };

    componentDidMount(){
        this.onKeywordSubmit("que tinguem sort")
    }

    onKeywordSubmit = async keyword => {
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        })

        this.setState({
            videoData : response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video =>{
       this.setState({selectedVideo : video});
    }

    render(){
        return <div className="ui container">
            <SearchBar formSubmit={this.onKeywordSubmit}/>
            <div className="ui grid">
                <div className="ui row"> 
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelex={this.onVideoSelect} videos={this.state.videoData}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;