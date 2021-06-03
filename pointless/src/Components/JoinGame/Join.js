import { useState } from "react";

const Join = () => {
  const [gameCode, setGameCode] = useState("");

  const formSubmit = (evt) => {
    evt.preventDefault();
    window.location.href = "/waiting-room/" + gameCode;
  };

  const inputGameCode = (evt) => {
    setGameCode(evt.target.value);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="code">Enter game code: </label>
        <input type="text" name="code" id="code" onChange={inputGameCode} />
        <input type="submit" value="Start" />
      </form>
    </>
  );
};
export default Join;
