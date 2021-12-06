import React from 'react'
import './styles.css';
import { daysCalc } from '../../utils/functions.js';

export class MonthDay extends React.Component {
  render() {
    let x = this.props.max
    let out = ''
    out = daysCalc(this.props.day, this.props.weekday)
    return this.props.day % 7 === 0 || this.props.day % 7 === 6 ? <div className='monthDayWeekend'>{out > 0 && out <= x ? out : null}</div> : <div className='monthDay'>{out > 0 && out <= x ? out : null}</div>   
  } 
}
