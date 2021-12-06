import React from 'react'
import './styles.css';
import { MonthBlock } from './MonthBlock';

export class MainPage extends React.Component {
  render() {
    let date = new Date();
    let month = date.getMonth();
    return (
      <div className='container'>
        <MonthBlock month={month - 1}/>
        <MonthBlock month={month }/>
        <MonthBlock month={month + 1}/>
      </div>
    )
  }
}
