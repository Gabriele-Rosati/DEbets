import React from 'react'
import TableRow from './tableRow'

function Table(props) {
    if (props.data !== '') {
        const tableRow = props.data.map(function (item) {
            if(item.opponents[0] !== undefined && item.opponents[1] !== undefined ){
                return (
                    <TableRow key={item.id} data={item}/>
                )
            }
        })

        return (
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead className='thead'>
                            <tr>
                                <th>Team 1</th>
                                <th>Match info</th>
                                <th>Team 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRow}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Table