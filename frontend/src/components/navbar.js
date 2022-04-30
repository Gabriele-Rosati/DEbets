import React, { useCallback } from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { injected } from "../components/connectors/connectors"


function Navbar() {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">DEbets</a>
      </div>


      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>{active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}</li>
        </ul>
      </div>
      <div className="flex-none gap-2">

        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content  bg-neutral text-neutral-conten rounded-box w-52">
            {active ? <li>
              <a className="justify-between">
                Profile
              </a>
            </li> : null}
            <li>{active ? <a onClick={disconnect}>Logout</a> : <a onClick={connect}>Login</a>}</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar