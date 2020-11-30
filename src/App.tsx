import React, { useState,useEffect} from 'react';
import Search from "./components/Search"
import Card from "./components/Card"
import Icon from "./img/search-icon.svg"
import Logo from "./img/logo.svg"
import './App.css';

export type Stays = {
  city: string
  country: string
  superHost: boolean
  title: string
  rating: number
  maxGuests: number
  type: string
  beds: number
  photo: string
}

const App: React.FC = () => {
  const stay:Stays[]=require("./data/stays.json")
  const [stays, setStays] = useState<Stays[]>(stay)
  const [open, setOpen] = useState<boolean>(false)
  const [location, setLocation] = useState<string>("All")
  const [guest, setGuest] = useState<number>(0)

  const ChangeOpen = () => {
    setOpen(!open)
  }

  const setText = (l: string, g: number) => {
    setLocation(l)
    setGuest(g)
  }

  useEffect(()=>{
    if(location==="All"){
      setStays(stay)
    }else{
      const city = location.split(',')[0]
      const result=stay.filter(i => i.city === city && i.maxGuests >= guest)
      setStays(result)
    }
  },[location,guest])

  return (
    <div className="app">
      {(() => {
        if (open) {
          return <Search ChangeOpen={ChangeOpen} setText={setText} locationed={location} guested={guest} />
        } else {
          return (
            <header>
              <img src={Logo} width="20%" />
              <div className="search-box" onClick={ChangeOpen}>
                <div className="city">{location}</div>
                <div className="guests">{guest === 0 ? "Add Guests" : `${guest} guest`}</div>
                <div className="serach-icon"><img src={Icon} width="25" /></div>
              </div>
            </header>
          )
        }
      })()}
      <main>
        <div className="intro">
          <h1>Stays in Finland</h1>
          <p>{stays.length}stays</p>
        </div>
        <div className="content">
          {stays.map((i, index) => {
            return <Card content={i} key={index} />
          })}
        </div>
      </main>
    </div>
  )
}

export default App;
