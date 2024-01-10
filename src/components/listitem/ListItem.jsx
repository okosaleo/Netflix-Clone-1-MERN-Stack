import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listitem.scss'
import oppn from "../../assets/oppn.jpg"
import { useState } from 'react'

export default function ListItem(props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='listItem' 
    style={{left: isHovered && props * 225 - 50}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)} >
      <img src={oppn} />
      <div className='itemInfo'>
        <div className='icons'>
           <PlayArrow/>
           <Add/>
           <ThumbUpAltOutlined/>
           <ThumbDownAltOutlined/>
        </div>
        <div className='itemInfoTop'>
          <span>1 hour 14 mins</span>
          <span className='limit'>+16</span>
          <span className='desc'>Oppenheimer, American and British dramatic biographical film, released in 2023, that explores the life and legacy of the American physicist J. Robert Oppenheimer, who played a key role in the development of the atomic bomb.</span>
        </div>
        <div className='genre'>History</div>
      </div>
    </div>
  )
}
