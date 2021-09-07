import React from 'react'
import './search.css'
import magnifierwhite from './magnifier-white.svg'

export default function SearchInput() {
    return (
        <div className="Header__Search">
            <form className="Header__Search_Outlined" autoComplete="off">
                <input type="text"
                    value={`Search`}
                    onChange={(e)=>{console.log(e.target.value)}}
                    className="Header__Search_Outlined" placeholder="Search..." />
            </form>
            <div className="Header__MagnifierSearch" >
                <img src={magnifierwhite} alt="" className="MagnifierImage"
                onClick={() => alert('Search Completed')}
                />
            </div>
        </div>
    )
}
