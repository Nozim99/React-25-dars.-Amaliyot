import { Component } from "react"

export default class Form extends Component {
  state = {
    email: '',
    agree: false
  }

  changeHolder = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkedHolder = (e) => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  validationEmail = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(this.state.email)) {
      alert('Email hato kiritildi')
      this.setState({ email: '' })
    }
  }

  validationAgree = () => {
    if (!this.state.agree) {
      alert("Siz sayt qoidalariga rozilik bildirmadingiz")
    }
    else if (!this.state.email) {
      alert('Emailingizni kiriting')
    } else {
      alert(this.state.email + " muvafaqqiyatli ro'yhatdan o'tildi")
    }
  }


  render() {
    const { email, agree } = this.state

    return (
      <div className="form">
        <h1>Form</h1>
        <input onBlur={this.validationEmail} onChange={this.changeHolder} value={email} name="email" placeholder="email" className="email" type="text" /><br />
        <label><input onChange={this.checkedHolder} checked={agree} name="agree" type="checkbox" /> I agree with terms and conditions</label><br />
        <button onClick={this.validationAgree}>Send</button>
      </div>
    )
  }
}

