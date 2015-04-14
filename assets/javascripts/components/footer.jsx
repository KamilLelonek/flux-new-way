import React from 'react'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.API_URL = environment.HOST
  }

  currentYear() {
    return new Date().getFullYear()
  }

  render() {
    return(
      <footer>
      </footer>
    )
  }
}
