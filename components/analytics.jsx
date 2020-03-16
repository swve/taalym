import React, { Component } from 'react'
import { initialize, set, pageview } from 'react-ga'

export default (Wrapped) => {
  return class extends Component {
    
    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    componentDidMount() {
      if (!window._ga_initialized) {
        initialize('UA-84291370-8')  // ADD YOUR TRACKING ID
        window._ga_initialized = true;
      }

      const location = window.location.pathname + window.location.search
      
      set({page: location})
      pageview(location)

    }

    render() {      
      return <Wrapped {...this.props} />
    }
  }
}