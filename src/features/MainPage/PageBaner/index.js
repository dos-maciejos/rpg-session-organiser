import React from 'react'
import './styles.css'
import '../../../shared/utils/functions'

export class PageBaner extends React.Component {
  render() {
    return (
    <div>
      <div className='baner'>
        <div className='banerBlock'>
          <div className='banerTextF'>
            R
          </div>
          <div className='banerTextRed'>
            P
          </div>
          <div className='banerTextE'>
            G 
          </div>
          <div className='banerTextG'>
          &nbsp;-&nbsp; 
          </div>
          <div className='banerTextF'>
            S
          </div>
          <div className='banerTextI'>
            E
          </div>
          <div className='banerTextB'>
            S
          </div>
          <div className='banerTextC'>
            S
          </div>
          <div className='banerTextE'>
            I
          </div>
          <div className='banerTextRed'>
            O
          </div>
          <div className='banerTextD'>
            N 
          </div>
          <div className='banerTextH'>
          &nbsp;-&nbsp;
          </div>
          <div className='banerTextA'>
            O
          </div>
          <div className='banerTextF'>
            R
          </div>
          <div className='banerTextRed'>
            G
          </div>
          <div className='banerTextG'>
            A
          </div>
          <div className='banerTextC'>
            N
          </div>
          <div className='banerTextI'>
            I
          </div>
          <div className='banerTextB'>
            S
          </div>
          <div className='banerTextA'>
            E
          </div>
          <div className='banerTextH'>
            R
          </div>                  
        </div>
        <LoggedAs />
      </div>
      <div className='banerBlockUnderline'></div>
    </div>
    )
  }
}

class LoggedAs extends React.Component {
  render() {
    let isGM = false;
    return (
      isGM === true ? <div className='banerLoginBoxGM'><div className='gm'>GM</div>LOGGED AS</div> : <div className='banerLoginBox'>LOGGED AS</div>
    )
  }
}