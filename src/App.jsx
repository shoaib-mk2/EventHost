import Banner from "./components/Banner"
import Events from "./components/Events"
import Footer from "./components/Footer"
import HostYourEvent from "./components/HostYourEvent"
import Navbar from "./components/Navbar"
import QRScan from "./components/QRScan"
import SimpleTicketing from "./components/SimpleTicketing"


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Events></Events>
      <HostYourEvent></HostYourEvent>
      <QRScan></QRScan>
      <SimpleTicketing></SimpleTicketing>
      <Footer></Footer>
    </div>
  )
}

export default App
