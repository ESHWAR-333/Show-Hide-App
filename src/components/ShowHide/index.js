import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstClass: '',
    lastClass: '',
  }

  displayName1 = () => {
    this.setState(prevState => {
      if (prevState.firstName === '') {
        return {
          firstName: 'Joe',
          firstClass: 'firstName',
        }
      }
      return {
        firstName: '',
        firstClass: '',
      }
    })
  }

  displayName2 = () => {
    this.setState(prevState => {
      if (prevState.lastName === '') {
        return {
          lastName: 'Jonas',
          lastClass: 'firstName',
        }
      }
      return {
        lastName: '',
        lastClass: '',
      }
    })
  }

  render() {
    const {firstName, lastName, firstClass, lastClass} = this.state
    console.log(firstName)
    return (
      <div className="main-container">
        <div className="subContainer">
          <h1 className="heading">Show/Hide</h1>
          <div className="namesButtonsContainer">
            <div className="name">
              <button
                type="button"
                className="button"
                onClick={this.displayName1}
              >
                Show/Hide Firstname
              </button>
              <p className={firstClass}>{firstName}</p>
            </div>
            <div className="name">
              <button
                type="button"
                className="button"
                onClick={this.displayName2}
              >
                Show/Hide Lastname
              </button>
              <p className={`${lastClass}`}>{lastName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
