import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Bslider from './Bslider'

const BabyShower = () => {
  return (
    <div>
    <Navbar/>
    <Bslider/>
      <div className="font-[Poppins] grid grid-cols-3 justify-around gap-6 m-2">
        <div className="bg-white rounded-xl :">
          <h2 className="font-semibold text-medium mb-1 items-center justify-center flex">Full Package</h2>
          <ul className="px-2  flex-auto justify-center">
            <li><ion-icon name="arrow-forward"></ion-icon>Video Coverage</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Sound Systems</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Event MC</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Band Group</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Beauty Services</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Transport</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Decorations</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Tents & Chairs</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Catering</li>
          </ul>
        </div>
        <div className="bg-cyan-400 rounded-xl">
          <h2 className="font-semibold text-medium mb-1 items-center justify-center flex">Half Package</h2>
          <ul className="ml-2 flex-auto justify-center" >
            <li><ion-icon name="arrow-forward"></ion-icon>Video Coverage</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Sound Systems</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Event MC</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Beauty Services</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Decorations</li>
          </ul>
        </div>
        <div className="bg-orange-500 rounded">
          <h2 className="font-semibold text-medium mb-1 items-center justify-center flex">Minimal  Package</h2>
          <ul className="ml-2 flex-auto justify-center">
            <li><ion-icon name="arrow-forward"></ion-icon>Video Coverage</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Beauty Services</li>
            <li><ion-icon name="arrow-forward"></ion-icon>Decorations</li>
          </ul>
        </div>
      </div>
    <Footer/>
</div>
  )
}

export default BabyShower