import React from "react";
class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: " ",
            artist: " ",
            genre: " ",
            rating: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        });
    };
    handleSubmit = (props) => {

        this.props.addSong(this.state);
    };

};



render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Song</label>
                <input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                ></input>
            </div>
            <div>
                <label>Artist</label>
                <input
                    name="artist"
                    type="text"
                    value={this.state.artist}
                    onChange={this.handleChange}
                ></input>
            </div>
            <div>
                <label>Genre</label>
                <select
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                >
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Rap">Rap</option>
                </select>
            </div>
            <div>
                <label>Rating</label>
                <select
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleChange}
                >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
            <button type="submit">Add song</button>
        </form>
    );
}


export default SongForm;