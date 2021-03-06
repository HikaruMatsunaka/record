import React, { useContext } from "react";
import playerContext from "../../context/playerContext";

function Playlist() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);

  return (
    <div className="playlist no_drag">
      {/* <div className="header">
        <h4 className="pltext">Songs by artist</h4>
      </div> */}
      <ul className="loi">
        {songslist.map((song, i) => (
          <li
            className={"songContainer " + (currentSong === i ? "selected" : "")}
            key={i}
            onClick={() => {
              SetCurrent(i);
            }}
          >
            <div className="tmbn_song"></div>
            <div className="songmeta_playlist">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
          </li>
        ))}
        {/**ここまでmap関数 */}
      </ul>
    </div>
  );
}

export default Playlist;
