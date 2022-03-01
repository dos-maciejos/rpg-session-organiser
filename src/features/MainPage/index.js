import React from 'react'
import './styles.css';
import { MonthBlock } from './MonthBlock';
import { PageManual } from './PageManual';
import { PageBaner } from './PageBaner';
import { PageFooter } from './PageFooter';
import { DateSetup } from '../../shared/components/DateSetup';
import { MonthDay } from '../../shared/components/MonthDay';

export class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {Open: 1}
  }
  render() {
    let date = new Date();
    let month = date.getMonth();
    
    return (
      <div>
        <PageBaner isGm={this.props.isGm} username={this.props.username} setAccessToken={this.props.setAccessToken} />
        <DateSetup isOpen={this.state.Open}/>
        <div className='container'>
          <MonthBlock month={month - 1}/>
          <MonthBlock month={month }/>
          <MonthBlock month={month + 1}/>
        </div>
        <PageManual />
        <PageFooter />
      </div>
    )
  }
}
