function Player(props){
    const playerHobbies = props.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })
    console.log(playerHobbies)
    return ( 
        <div>
    <h3>{props.firstName}</h3>
    <h4>Jersey Number: {props.jerseyNumber}</h4>
    <ul>{playerHobbies}</ul>
    </div>
    )
}
export default Player;


