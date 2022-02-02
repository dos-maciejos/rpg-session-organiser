import React from 'react'
import './styles.css'
import '../../../shared/utils/functions'

export class PageBaner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {login: 0};
  }

  logOut = () => {
    this.props.setAccessToken("");
    localStorage.clear();
  }

  render() {
    console.log(this.props);
    return (
    <div>
      <div className='baner'>
        <div className='banerBlock'>
          <div className='banerTextF'>
            R
          </div>
          <div className='banerTextRed'>
            P
          </div>
          <div className='banerTextE'>
            G 
          </div>
          <div className='banerTextG'>
          &nbsp;-&nbsp; 
          </div>
          <div className='banerTextF'>
            S
          </div>
          <div className='banerTextI'>
            E
          </div>
          <div className='banerTextB'>
            S
          </div>
          <div className='banerTextC'>
            S
          </div>
          <div className='banerTextE'>
            I
          </div>
          <div className='banerTextRed'>
            O
          </div>
          <div className='banerTextD'>
            N 
          </div>
          <div className='banerTextH'>
          &nbsp;-&nbsp;
          </div>
          <div className='banerTextA'>
            O
          </div>
          <div className='banerTextF'>
            R
          </div>
          <div className='banerTextRed'>
            G
          </div>
          <div className='banerTextG'>
            A
          </div>
          <div className='banerTextC'>
            N
          </div>
          <div className='banerTextI'>
            I
          </div>
          <div className='banerTextB'>
            S
          </div>
          <div className='banerTextA'>
            E
          </div>
          <div className='banerTextH'>
            R
          </div>                  
        </div> 
        <div className='logged'>
          <LoggedAs isGm={this.props.isGm} username={this.props.username} />
          <div className='LoggedUnderline'></div>
          <div onClick={this.logOut} className='logbutton'>log out</div>
        </div>
      </div>
      <div className='banerBlockUnderline'></div>
    </div>
    )
  }
}

class LoggedAs extends React.Component {
  render() {
    return (
      this.props.isGm === true ? (
        <div className='banerLoginBoxGM'><a className='gm'>GM&nbsp;</a> {this.props.username} </div>
      ) : (
        <div className='banerLoginBox'>{this.props.username} </div>
      )
    )
  }
}
