import Navbar from "../components/navbar"
import Table from "../components/table";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function Home(props) {
  if(props.data !== '')
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Navbar />
        <Table data={props.data}/>
      </div>
    </Web3ReactProvider>
  )
}

export default Home