import { Button } from "@mui/material";
import useSound from "use-sound";
import Music from "../musics/moodynight.mp3";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect, useState } from "react";

export const PlayButton = () => {
  const [play, { stop, pause }] = useSound(Music);
  const theme = useTheme();
  const [audioState, setAudioState] = useState(false);
  const [roll, setRoll] = useState(false);

  const onClickButton = () => {
    setAudioState(!audioState);
    setRoll(!roll);
    console.log(audioState);
  };

  useEffect(() => {
    if (audioState === true) {
      play();
    } else if (audioState === false) {
      pause();
    }
  }, [audioState]);

  useEffect(() => {
    if (roll === true) {
      document
        .querySelector(`.rotate`)
        .animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
          {
            duration: 10000,
            easing: "linear",
            iterations: Infinity
          }
        );
      console.log("回転スタート");
    } else if (roll === false) {
      document
        .querySelector(`.rotate`)
        .animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(0deg)" }],
          {
            duration: 1000,
            easing: "linear",
            iterations: Infinity
          }
        );
      console.log("回転ストップ");
    }
  }, [roll]);

  const style1 = {
    marginTop: "20px",
    height: "200px",
    width: "200px",
    backgroundColor: "red",
    borderRadius: "50%",
    textAlign: "center"
  };

  const style2 = {
    height: "20px",
    width: "20px",
    backgroundColor: "black",
    borderRadius: "50%"
  };

  return (
    <>
      {/* muiのカード*/}
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {/* タイトル*/}
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>

          {/* コントロール部分*/}
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {/* このthemeってどういう意味？*/}
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            {/* 再生ボタン
            <IconButton aria-label="play/pause" onClick={() => play()}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton> */}

            {/*切り替えシステム */}
            <IconButton aria-label="next" onClick={onClickButton}>
              {audioState ? (
                <PauseIcon sx={{ height: 38, width: 38 }} />
              ) : (
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              )}
            </IconButton>

            {/* スキップボタン*/}
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
      </Card>
      <div style={style1} class="item rotate">
        <div style={style2}></div>
      </div>
    </>
  );
};
