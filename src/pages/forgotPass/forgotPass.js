import style from "./forgotPass.module.css";
import { BsTwitter } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function ForgotPass() {
  const navigating = useNavigate();
  function backTo() {
    navigating("/");
  }
  return (
    <div className={style.outer}>
      <header className={style.head}>
        <RxCross2 onClick={backTo} className={style.cut} />
      </header>
      <BsTwitter className={style.twitIcon} />

      <h1>Set new Password</h1>

      <TextField
        id="outlined-basic"
        label="new Password"
        variant="outlined"
        sx={{ width: "60%" }}
      />
      <TextField
        id="outlined-basic"
        label="connfirm new password"
        variant="outlined"
        sx={{ width: "60%" }}
      />
      <Button variant="contained" sx={{ width: "60%", borderRadius: "50px" }}>
        Proceed
      </Button>
    </div>
  );
}
