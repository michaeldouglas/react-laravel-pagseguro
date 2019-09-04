import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Credentials from './Library/Credentials/Credentials';

class PagSeguro extends Component {
  state = {
    PagSeguroDirectPayment: window.PagSeguro.PagSeguroDirectPayment,
    loading: true,
    sessionId: ''
  };

  componentDidMount() {
    const { credentials, sandbox } = this.props;
    this.setSession(credentials, sandbox);
    this.children = this.props.children;
  }

  setSession(credentials, sandbox) {
    Credentials.setSessionId(credentials, sandbox);
    this.state.PagSeguroDirectPayment.setSessionId(Credentials.sessionId);
    if (Credentials.sessionId) {
      this.setState({
        loading: false,
        sessionId: Credentials.sessionId
      });
    }
  }

  render() {
    const { loading, sessionId, PagSeguroDirectPayment } = this.state;
    const { children } = this.props;

    const childrenWithContextWrapper = Array.isArray(children)
      ? children.map((child, key) => {
        return children ? (
          <div
            className={`pagseguro_${child.type.name.toLowerCase()}`}
            key={key}
          >
            {cloneElement(child, {
              sessionId: sessionId,
              pagseguro: PagSeguroDirectPayment
            })}
          </div>
        ) : (
          <div>Erro ao renderizar a React Laravel PagSeguro</div>
        );
      })
      : cloneElement(children, {
        sessionId: sessionId,
        pagseguro: PagSeguroDirectPayment
      });

    if (loading) {
      return <div>Carregando</div>;
    } else {
      return <div id='LaravelPagSeguro'>{childrenWithContextWrapper}</div>;
    }
  }
}

PagSeguro.propTypes = {
  credentials: PropTypes.object,
  sandbox: PropTypes.bool,
  children: PropTypes.any
};

export default PagSeguro;
