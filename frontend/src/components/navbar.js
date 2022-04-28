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
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">DEbets</a>
      </div>


      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>{active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}</li>
        </ul>
      </div>
      <div class="flex-none gap-2">

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content  bg-neutral text-neutral-conten rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li>{active ? <a onClick={disconnect}>Logout</a> : <a onClick={connect}>Login</a>}</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar