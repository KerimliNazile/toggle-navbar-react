import React, { useState } from 'react'

// import { useState } from 'react'
import './index.css'

export default function Toggle() {
    const [isNavOpen, setisNavOpen] = useState(false)
    return (
        <div>
            <nav style={{ border: "1px solid black",display:"flex" }}>
                <ul className={`${isNavOpen ? "d-none" : ""}`} style={{display:"flex", gap:"30px", textDecoration:"none"}}>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact</li>

                </ul>
                <i onClick={() => setisNavOpen(!isNavOpen)} className={`fa-solid fa-bars ${isNavOpen ? "d-none" : ""}`}></i>
                <i onClick={() => setisNavOpen(!isNavOpen)} className={`${isNavOpen ? "" : "d-none"} fa-solid fa-xmark`}></i>


                <div className={`mobileNav ${isNavOpen ? "" : "d-none"}`} style={{ backgroundColor: "blue" }}>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Contact</li>

                    </ul>
                </div>
            </nav>
        </div >
    )
}



