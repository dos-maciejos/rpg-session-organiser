import React, { useCallback } from 'react'
import './styles.css'
import '../MonthBlock'

export class PageManual extends React.Component {
  render() {
    return (
      <div>
        <div className='manualOverline'></div>
          <div className='manualHeader'>
            MANUAL        
          </div> 
          <div className='manualMain'>
            <div className='manualMainDescription'>
                <div className='manualMainDescriptionText'>
                  Site which will hopefully help our wonderful <a className='gmText'>GM</a> <a className='gmName'>Passion fruit</a> organise D&D sessions for <a className='us'>us</a>.
                </div>
            </div>
            <div className='manualMainGuide'>
              <div className='manualOverline'></div>
                <div className='manualMainGuideHeader'>
                  How to use
                </div>
                <div className='manualMainGuideBox'>
                  <div className='monthDaySessionProposal'>1</div>
                  a
                  <div className='monthDaySessionTerm'>2</div>
                </div>
              </div>
          </div>                   
      </div>
    )
  }
}
