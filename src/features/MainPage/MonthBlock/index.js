import React from 'react'
import './styles.css';
import { MonthDay } from '../../../shared/components/MonthDay';

export class MonthBlock extends React.Component {
  render() {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]
    let monthName =  this.props.month > 12 ? months[this.props.month - 12] : this.props.month === 12 ? months[0] : months[this.props.month]
    let date = new Date();
    let daysInMonth = new Date(date.getFullYear(), this.props.month + 1 , 0).getDate();
    let a =  numbers.map ( day => {
      return new Date(date.getFullYear(), this.props.month, day).getDay()
    })
    return (
      <div className='monthBlock'>
        <div className='monthBlockHeader'>
          { monthName }
        </div>
        <div className='weekDaysBlock'>
          <div className='weekDay'>Mon</div>
          <div className='weekDay'>Tue</div>
          <div className='weekDay'>Wed</div>
          <div className='weekDay'>Thu</div>
          <div className='weekDay'>Fri</div>
          <div className='weekendDay'>Sat</div>
          <div className='weekendDay'>Sun</div>
        </div>
        <div className='monthMainBlock'>
        { numbers.map( (day) => {    
          return <MonthDay day={day} weekday={a[day - 1]} max={daysInMonth}/>   
        })}
        </div>
      </div>
    )
  }
}
