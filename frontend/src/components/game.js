import React from 'react'

function Game(props) {
    if(props.data.status == "finished"){
        return (
            <tr className='thead'>
                <td>{(props.opponents[0].opponent.id == props.data.winner.id) ? props.opponents[0].opponent.name : props.opponents[1].opponent.name}</td>
                <td>{props.data.status}</td>
                <td>{props.data.end_at}</td>
            </tr>
        )
    }
    if(props.data.status == "running"){
        return (
            <tr className='thead'>
                <td><button className='btn btn-base'><a href={props.liveURL.english.raw_url}>Watch Here</a></button></td>
                <td>{props.data.status}</td>
                <td>{props.data.begin_at}</td>
            </tr>
        )
    }
    else{
        return (
            <tr className='thead'>
                <td><input type="text" placeholder="Type here" class="input w-full max-w-xs"/></td>
                <td>{props.data.status}</td>
                <td> <button class="btn btn-base">Team 1</button>  <button class="btn bg-secondary">Team 2</button></td>
            </tr>
        )
    }
}

export default Game