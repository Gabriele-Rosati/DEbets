import React from 'react'

function TableRow(props) {
    return (
        <tr className='thead'>
            <td>{props.data.opponents[0].opponent.name} <img align="middle" className='tableImage center' src={props.data.opponents[0].opponent.image_url}/> <button class="btn btn-sm">Bet</button></td>
            <td>Number of games: {props.data.number_of_games}</td>
            <td>{props.data.opponents[1].opponent.name}  <img className='tableImage center' src={props.data.opponents[1].opponent.image_url}/> <button class="btn btn-sm">Bet</button></td>
        </tr>
    )
}

export default TableRow