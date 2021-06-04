

const WaitingRoom = () => {

    const roomName = window.location.pathname.split("/")[2]

    //get list of people and display in window

    return (
        <>
        <p>Room: {roomName}</p>

        <button>Everyone is here</button>
        
        </>
    )
}
export default WaitingRoom