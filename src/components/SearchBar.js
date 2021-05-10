import React from "react";

class SearchBar extends React.Component{
    state = { keyword : "", selectedVideo: null }

    userInput = e => {
        this.setState({ keyword : e.target.value})
    };

    formSubmit = e =>{
        e.preventDefault();
        this.props.formSubmit(this.state.keyword);
    }

    render(){
        return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.formSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.keyword} onChange={this.userInput}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;