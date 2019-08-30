import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getDisplayName from 'react-display-name';
import scriptjs from 'scriptjs';

const DEFAULT_SCRIPT_URL =
  'https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js';

export default function preloadScript(InnerComponent) {
  class PreloadScript extends Component {
    constructor(props) {
      super(props);

      this.state = {
        scriptLoaded: typeof SomApi !== 'undefined'
      };
      this.isPresent = false;
    }
    componentDidMount() {
      this.isPresent = true;

      if (this.scriptLoading || this.state.scriptLoaded) {
        return;
      }

      this.scriptLoading = true;

      const scriptUrl = this.props.laravelPagSeguro;
      scriptjs(scriptUrl, this.onScriptLoad);
    }
    componentWillUnmount() {
      this.isPresent = false;
    }
    onScriptLoad = () => {
      if (this.isPresent) {
        this.setState({ scriptLoaded: true });
      }
    };
    render() {
      const { loadingDelegate } = this.props;
      if (this.state.scriptLoaded) {
        window.PagSeguro = {
          // eslint-disable-next-line no-undef
          PagSeguroDirectPayment: PagSeguroDirectPayment
        };

        return <InnerComponent />;
      }

      return loadingDelegate;
    }
  }
  PreloadScript.displayName = `preloadScript(${getDisplayName(
    InnerComponent
  )})`;
  PreloadScript.propTypes = {
    laravelPagSeguro: PropTypes.string,
    loadingDelegate: PropTypes.node
  };
  PreloadScript.defaultProps = {
    laravelPagSeguro: DEFAULT_SCRIPT_URL,
    loadingDelegate: <div />
  };

  return PreloadScript;
}
