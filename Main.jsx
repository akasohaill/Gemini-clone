import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gpt ka Baap</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ?
          <>
            <div className="greet">
              <p><span>Hello BETA</span></p>
              <p>Apke Abbu Aye Hai?</p>
            </div>
            <div  className="cards">
              <div className="card" onChange={(e) => setInput(e.target.value)} value={"how me some beautiful scenes for upcoming trips"}  onClick={() => onSent()}>
                <p>Isko click mat karna code Language me gali sunega </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent()} onChange={(e) => setInput(e.target.value)} value={"You want to know the tips to be a best human in your life."}>
                <p>Chatgpt ko takkar de dega bhot jald dega </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent()} onChange={(e) => setInput(e.target.value)} value={"Know some mysterious things of this world"}>
                <p>Avi ye develop ho rha hai to thora dherya se kam lo desktop screen me jyada features hai uspe chalao maja aayega</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent()} onChange={(e) => setInput(e.target.value)} value={"How to be a BAAP CODER"}>
                <p>"Want to be a BAAP CODER then follow me on linkedin"</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </> : <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>:
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
          </div>
          <div className="bottom-info">
            <p>Gemini may display any inaccurate info about people or place, so please double-check it responses </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
