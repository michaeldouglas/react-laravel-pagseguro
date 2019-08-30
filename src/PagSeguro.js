import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Credentials from './Library/Credentials/Credentials';

class PagSeguro extends Component {
  state = {
    PagSeguroDirectPayment: window.PagSeguro.PagSeguroDirectPayment,
    loading: true
  };

  componentDidMount() {
    const { credentials, sandbox } = this.props;
    this.setSession(credentials, sandbox);
  }

  setSession(credentials, sandbox) {
    Credentials.setSessionId(credentials, sandbox);
    if (Credentials.sessionId) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <div>Carregando</div>;
    } else {
      return <div>PagSeguro</div>;
    }
  }
}

PagSeguro.propTypes = {
  credentials: PropTypes.object,
  sandbox: PropTypes.bool
};

export default PagSeguro;
