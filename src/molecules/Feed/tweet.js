import style from "./tweet.module.css";
import { Avatar } from "@mui/material";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { useRef, useState, useEffect } from "react";

import axios from "axios";

import Card from "./Card";

export default function Tweet() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4004/users");

    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = (value) => {
    if (value.trim().length !== 0) {
      setInput(value);
    }
  };
  const handlePost = async () => {
    if (input.length !== 0) {
      let lData = JSON.parse(localStorage.getItem("userData"));

      axios.post("http://localhost:4004/users", {
        id: lData[0].id,
        first_name: lData[0].name,
        last_name: lData[0].name.slice(0, 6),
        images:
          "https://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1573809631/ytnx6wv0heilfkob93hi.jpg",
        caption: input,
        likesCount: 0,
        replyCount: 0,
        retweetsCount: 0,
        views: 1,
      });
      const { data } = await axios.get("http://localhost:4004/users");
      data.reverse();
      console.log(data);
      setInput("");
      setPost(data);
      setShow(false);
    }
  };

  const inputRef = useRef("null");

  return (
    <div className={style.outer}>
      <div className={style.upper}>
        <Avatar
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQg0aZtQMCQ0ADZrwmRHXTsxNtYP1BGuhAMA7wXdQoPcaaTXubsWqhqb_MYnNBBMf-k-5_n1AN6GyoJCkE"
          sx={{ height: "45px", width: "45px" }}
        />
        <input
          onChange={(e) => handleInput(e.target.value)}
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
        <button onClick={handlePost} className={style.tweetBtn}>
          Tweet
        </button>
      </div>

      <div>
        {show
          ? data.map((user) => <Card key={user.id} user={user} />)
          : post.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </div>
  );
}
