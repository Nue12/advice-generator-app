import { useEffect, useState } from 'react'
import '../styles/AdviceCard.css'
import desktopDivider from '../../public/images/pattern-divider-desktop.svg'
import mobileDivider from '../../public/images/pattern-divider-mobile.svg'
import diceImg from '../../public/images/icon-dice.svg'


export default function AdviceCard() {
  const initialState = '"Get our advice by clicking the dice"';
  const initialId = "";

  const [ advice, setAdvice ] = useState(initialState);
  const [ id, setId ] = useState(initialId)

  function getAnotherAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(resp => resp.json())
      .then(data => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
  }

  return (
    <section className='adviceCard'>
        <header>ADVICE # {id}</header>
        <p className='adviceText'>{advice}</p>
        <img src={desktopDivider} alt="divider" className='dividerDesktop' />
        <img src={mobileDivider} alt="divider" className='dividerMobile' />
        <div className='diceImg-container' onClick={getAnotherAdvice}>
            <img src={diceImg} alt="diceImg" className='diceImg' />
        </div>
    </section>
  )
}
