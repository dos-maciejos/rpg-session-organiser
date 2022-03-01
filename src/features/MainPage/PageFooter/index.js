import React from 'react'
import './styles.css';

export class PageFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='line'></div>
        <div className='footerText'> 
          created by <a className='ref' href='https://github.com/dos-maciejos' target='_blank'>dos-maciejos</a>
        </div>
        <div className='line'></div>
      </div>
    )
  }
}
