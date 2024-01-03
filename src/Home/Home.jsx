import "./home.scss"
import Navbar from "../components/Navbar"
import Featured from "../components/Featured/Featured"
import List from "../components/list/List"

const Home = () => {
  return (
    <div className="home">
    <Navbar />
    <Featured props="movie"/>
    <List />
    </div>
  )
}

export default Home