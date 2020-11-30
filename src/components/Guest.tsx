import React, { useState,useEffect } from 'react';
import '../css/Guest.css'
type Props = {
    name: string
    Add:(a:number,c:number)=>void
}
const Guest: React.FC<Props> = ({ name,Add }) => {
    /*const style = {
        opacity: name === "guest" ? 1 : 0
    }*/
    const style={
        display:name === "guest" ? "block" : "none"
    }
    const [adult, setAdult] = useState<number>(0)
    const [child, setChild] = useState<number>(0)

    useEffect(()=>{
        Add(adult,child)
    },[adult,child])


    const AddAdult=()=>{
        setAdult(prevState=>{
            return prevState+1
        })
    }

    const MinusAdult=()=>{
        setAdult(prevState=>{
            return prevState-1
        })
    }

    const AddChild=()=>{
        setChild(prevState=>{
            return prevState+1
        })
    }

    const MinusChild=()=>{
        setChild(prevState=>{
            return prevState-1
        })
    }

    const AdultButton={
        cursor:adult===0 ? "not-allowed" : "",
        borderColor:adult===0 ? "#dcdcdc" : ""
    }

    const ChildButton={
        cursor:adult===0 ? "not-allowed" : "",
        borderColor:child===0 ? "#dcdcdc" : ""
    }

    return (
        <div className="add-guests" style={style}>
            <div className="adult">
                <h3>Adults</h3>
                <p>Age 13 and above</p>
                <div className="add">
                    <button disabled={adult===0? true : false} onClick={MinusAdult} style={AdultButton}>-</button>
                    <p>{adult}</p>
                    <button onClick={AddAdult}>+</button>
                </div>
            </div>
            <div className="children">
                <h3>children</h3>
                <p>Age between 2 and 12</p>
                <div className="add">
                    <button disabled={child===0? true : false} onClick={MinusChild} style={ChildButton}>-</button>
                    <p>{child}</p>
                    <button onClick={AddChild}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Guest