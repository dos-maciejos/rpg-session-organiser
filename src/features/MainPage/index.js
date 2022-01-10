import React from 'react'
import './styles.css';
import { MonthBlock } from './MonthBlock';
import { PageManual } from './PageManual';
import { PageBaner } from './PageBaner';
import { PageFooter } from './PageFooter';

export class MainPage extends React.Component {
  render() {
    let date = new Date();
    let month = date.getMonth();
    return (
      <div>
        <PageBaner isGm={this.props.isGm} username={this.props.username} setAccessToken={this.props.setAccessToken} />
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
