import firebase from "firebase";

const Create = () => {

    
  const createRoom = (evt) => {
    const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
    let roomName = "";
    for (let i = 0; i < 4; i++) {
      let random = alphabet.split("")[Math.floor(Math.random() * 26)].toUpperCase()
      roomName += random
    }




    window.location.href = "/waiting-room/" + roomName;
  };

  return (
    <>
      <input type="text" name="name" id="name" placeholder="Enter your name" />
      <button onClick={createRoom}>Create Room</button>
    </>
  );
};
export default Create;
