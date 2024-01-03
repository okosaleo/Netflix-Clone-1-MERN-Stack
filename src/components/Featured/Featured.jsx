import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import movie from "../../assets/oppn.jpg"
import logo from "../../assets/opplogo.png"
import "./featured.scss"

export default function Featured(props) {
  return (
    <div className="featured">
    {props && ( 
        <div className="category"> 
        <span>{props === "movie" ? "Movies" : "Series"}</span>
        <select name="genre" id="genre">
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-Fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
        </select>
        </div>
    )}
      <img src={movie} />
      <div className="info">
        <img src={logo} />
        <span className="desc">Oppenheimer, American and British dramatic biographical film, released in 2023, that explores the life and legacy of the American physicist J. Robert Oppenheimer, who played a key role in the development of the atomic bomb.</span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}
