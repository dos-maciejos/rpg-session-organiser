import React from 'react'
import './styles.css';

export class MonthDay extends React.Component {
  render() {
    return (
      <div className='monthDay'>
        {this.props.day}
      </div>
    )
  }
}
