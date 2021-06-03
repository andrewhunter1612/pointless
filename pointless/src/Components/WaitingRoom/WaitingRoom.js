

const WaitingRoom = () => {

    const roomName = window.location.pathname.split("/")[2]

    //get list of people and display in window

    return (
        <>
        <p>Room: {roomName}</p>
        
        </>
    )
}
export default WaitingRoom