import style from "./tweet.module.css";
import Avatar from "@mui/material/Avatar";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { useRef, useState } from "react";
import axios from "axios";

export default function Tweet() {
  const [text, setText] = useState([]);
  let val = JSON.parse(localStorage.getItem("userData"));
  console.log(val);

  axios.post("http://localhost:4000/user", {
    id: text.length,
    // username: val.username,
    desc: text,
    Image:
      "Fhttps://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/cut-out-an-image/thumbnail.jpeg",
    userImage:
      "Fhttps://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/cut-out-an-image/thumbnail.jpeg",
  });

  const response = axios.get("http://localhost:5000/user").then((res) => res.data.reverse())
  console.log(response.data);

  const inputRef = useRef("null");
  return (
    <div className={style.outer}>
      <div className={style.upper}>
        <Avatar
          src="/broken-image.jpg"
          sx={{ height: "45px", width: "45px" }}
        />
        <input
          onChange={(e) => setText(e.target.value)}
          className={style.input}
          placeholder="What is happening?!"
        />
        <input ref={inputRef} type="file" style={{ display: "none" }} />
      </div>
      <div className={style.post}>
        <div className={style.allIcons}>
          <CiImageOn onClick={() => inputRef.current.click()} />
          <AiOutlineFileGif />
          <BiPoll />
          <VscSmiley />
          <MdOutlineMoreTime />
          <GrLocation />
        </div>
        <button className={style.tweetBtn}>Tweet</button>
      </div>
    </div>
  );
}
