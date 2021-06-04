import db from "../../Config/firebase.config";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");

  const createRoom = async (evt) => {
    const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
    let roomName = "";
    for (let i = 0; i < 4; i++) {
      let random = alphabet
        .split("")
        [Math.floor(Math.random() * 26)].toUpperCase();
      roomName += random;
    }

    const newRoom = await db.collection("Room").doc(roomName);

    const res = await newRoom.set({
      currentRound: 1,
      players: [
        {
          name: name,
          score: 0,
        },
      ],
    });

    window.location.href = "/waiting-room/" + roomName;
  };

  const changeName = (evt) => {
    setName(evt.target.value);
  };

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        onChange={changeName}
      />
      <button onClick={createRoom}>Create Room</button>
    </>
  );
};
export default Create;
