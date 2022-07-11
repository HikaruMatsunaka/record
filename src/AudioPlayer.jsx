import React from "react";
import Header from "./components/graphics/Header";
import Playlist from "./components/playlist/Playlist";
import Actions from "./components/playlist/Actions";
import Controls from "./components/Controls";

import PlayerState from "./context/playerActions";

import "./main.css";
import "./input.css";

function AudioPlayer() {
  return (
    <PlayerState>
      <div className="main">
        <div className="top">
          {/* <div className="left">
          </div> */}

          <Header />
          <Actions />
          <Playlist />
        </div>
        <Controls />
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;
