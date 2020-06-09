import React from 'react';
import SongList from './SongList';
import SongForm from './SongForm';


class SongOverview extends React.Component {

  constructor() {
    super()
    this.state = {
      song: []
    }

  }
  addSong = (song) => {
    this.setState({
      song: song
    });
  };


  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table style="width:100%">
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;
