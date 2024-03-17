import React, { useContext, useState ,Link} from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompt, setRecentPrompt,newChat }= useContext(Context)

  const loadPrompt=async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} className='menu' alt="" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? <div className="recent">
          <p className='recent-title'>Recent</p>
          {prevPrompt.map((item, index) => {
            return (<div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0, 18)}...</p>
            </div>)
          })}


        </div> : null}
      </div>
      <div className="bottom">
        <a href="https://support.gemini.com/hc/en-us">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div></a>
       <a href='https://myactivity.google.com/product/gemini?utm_source=gemini&pli=1'> <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div></a>
        <a href="https://support.google.com/gemini/answer/14579631?hl=en">
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div></a>
      </div>
    </div>
  )
}

export default Sidebar
