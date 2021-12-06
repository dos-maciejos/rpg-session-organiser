import React from 'react'
import './styles.css';

export class PageBaner extends React.Component {
  render() {
    return (
    <div>
      <div className='baner'>
        <div className='banerBlock'>
          <div className='banerText'>
            R
          </div>
          <div className='banerTextRed'>
            P
          </div>
          <div className='banerText'>
            G - SESSI
          </div>
          <div className='banerTextRed'>
            O
          </div>
          <div className='banerText'>
            N - OR
          </div>
          <div className='banerTextRed'>
            G
          </div>
          <div className='banerText'>
            ANISER
          </div>             
        </div>
        <div className='banerLogin'>
          <div className='banerLoginBox'>LOGGED AS</div>
        </div>
      </div>
      <div className='banerBlockUnderline'></div>
    </div>
    )
  }
}
