import React, { useState } from 'react';
import Location from './Location'
import Guest from './Guest'
import '../css/Search.css'

type Props={
    ChangeOpen:()=>void
    setText:(l:string,g:number)=>void
    locationed:string
    guested:number
}
const Search: React.FC<Props> = ({ChangeOpen,setText,locationed,guested}) => {
    const [location, setLocation] = useState<string>(locationed)
    const [guest, seGuest] = useState<number>(guested)
    const [name, setName] = useState<string>("location")
    console.log(guest)

    const Add = (a: number, c: number) => {
        seGuest(a + c)
    }

    const LocationClick = () => {
        setName("location")
    }

    const GuestClick = () => {
        setName("guest")
    }

    const ChangeLocation = (s: string) => {
        setLocation(s)
    }

    const Searched=()=>{
        ChangeOpen()
        setText(location,guest)

    }

    const locationstyle = {
        border: name === "location" ? "solid 1px black" : ""
    }

    const gueststyle = {
        border: name === "guest" ? "solid 1px black" : ""
    }

    const num = () => {
        if (guest === 0) {
            return <p>Add guests</p>
        } else {
            return <p>{guest} guests</p>
        }
    }
    return (
        <div className="search">
            <div className="backgroud">
                <div className="search-content">
                    <div className="search-bar">
                        <div className="location" onClick={LocationClick} style={locationstyle}>
                            <p style={{ fontWeight: "bold" }}>LOCATION</p>
                            <p>{location}</p>
                        </div>
                        <div className="guest" onClick={GuestClick} style={gueststyle}>
                            <p style={{ fontWeight: "bold" }}>GUESTS</p>
                            <p>{num()}</p>
                        </div>
                        <div className="search-bar-icon" onClick={Searched}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" height="50%"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            <label>Serach</label>
                        </div>
                    </div>
                    <div className="select">
                        <Location name={name} ChangeLocation={ChangeLocation} />
                        <Guest name={name} Add={Add} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search