import { useState } from "react"
import "./navbar.scss"
import Logo from "../assets/Logo.png"
import user from "../assets/user.jpg"
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true)
        return () => (window.onscroll = null)
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src={Logo} />
                <span>Hompage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>LEO</span>
                <Notifications className="icon"/>
                <img src={user} />
                <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Navbar