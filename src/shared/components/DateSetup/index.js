import React from 'react'
import './styles.css';

export class DateSetup extends React.Component {
  render() {
      return(
        this.props.isOpen === 1 ? 
        (
        <div className='DateSetupBox'>
        <div className='DateSetupBody'>
        sdfadfadfadfsdfadfadfadfsdfadfadfadfsdfadfadfadfs
        sdfadfadfadfsdfadfadfadfsd
        sdfadfadfadf
        sdfadfadfadf
        sdfadfadfadf
        sdfadfadfadf
        </div>
        </div>
        )
        :
        <div></div>
      )    
  } 
}
