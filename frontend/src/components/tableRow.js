import React from 'react'
import Game from './game'
import logo from "../images/logo-2.png"

function TableRow(props) {

    const games = props.data.games.map(function (item) {
        if(item.status == "finished"){
            return (
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead className='thead'>
                            <tr>
                                <th>Winner</th>
                                <th>Status</th>
                                <th>Ended at</th>
                            </tr>
                        </thead>
                        <tbody className='thead'>
                            <Game data={item} opponents={props.data.opponents}/>
                        </tbody>
                    </table>
                </div>
            )
        }
        if(item.status == "running"){
            return (
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead className='thead'>
                            <tr>
                                <th>Watch Live</th>
                                <th>Status</th>
                                <th>Started at</th>
                            </tr>
                        </thead>
                        <tbody className='thead'>
                            <Game data={item} liveURL={props.data.streams}/>
                        </tbody>
                    </table>
                </div>
            )
        }
        if(item.status == "not_started"){
            return (
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead className='thead'>
                            <tr>
                                <th>Bet amount</th>
                                <th>Status</th>
                                <th>Bet for</th>
                            </tr>
                        </thead>
                        <tbody className='thead'>
                            <Game data={item} opponents={props.data.opponents}/>
                        </tbody>
                    </table>
                </div>
            )
        }
    })

    return (
        <tr className='thead'>
            <td>{props.data.opponents[0].opponent.name} <img align="middle" className='tableImage center' src={(props.data.opponents[0].opponent.image_url != null) ? props.data.opponents[0].opponent.image_url : logo} /> </td>
            <td className='thead'>
                <div tabindex="0" class="collapse thead">
                    <input type="checkbox" />
                    <div class="collapse-title thead">
                        See games
                    </div>
                    <div class="collapse-content">
                        {games}
                    </div>
                </div>
            </td>
            <td>{props.data.opponents[1].opponent.name}  <img className='tableImage center' src={(props.data.opponents[0].opponent.image_url != null) ? props.data.opponents[1].opponent.image_url : logo} /></td>
        </tr>
    )
}

export default TableRow