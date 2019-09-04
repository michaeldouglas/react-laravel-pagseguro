// import Request from './../Request/Request';

/**
 * Credentials Class not receive params in your definition
 * @class
 * @classdesc This class is responsible about credentials using in PagSeguro
 * @author Michael Araujo <michaeldouglas010790@gmail.com>
 */
class Credentials {
  constructor () {
    this.params = '';
    this.url = '';
    this.paramsUrl = '';
    this.sandbox = false;
  }

  /**
   * This function  is responsible for create all calls necessary of object SessionID
   * @param {object} Params
   * @param {boolean} sandbox
   * @returns {void}
   */
  setSessionId (Params, sandbox) {
    this.params = Params;
    this.sandbox = sandbox;
    this.parseQueryParams();
    this.checkSessionUser();
  }

  /**
   * Return string Session Id
   * @returns {string}
   */
  get sessionId () {
    return 'd6710cc230404fa1bf0d055e0a21f62a';
  }

  getSessionId () {
    // let request = new Request(this.url);
    // let response = request.getSession(`/v2/sessions?${this.paramsUrl}`, {});
    // response.then(result => console.log(result.data));
  }

  /**
   * This function is responsable for create parser params using in crentials PagSeguro
   * @returns {void}
   */
  parseQueryParams () {
    this.paramsUrl = Object.keys(this.params)
      .map(key => `${key}=${this.params[key]}`)
      .join('&');

    this.createUrlRequest();
  }

  createUrlRequest () {
    if (this.sandbox) {
      this.url = `https://ws.sandbox.pagseguro.uol.com.br/`;
    } else {
      this.url = `https://ws.pagseguro.uol.com.br/`;
    }
  }

  checkSessionUser () {
    if (!this.url) {
      throw new Error(
        'Não foi obter a sessão do usuário. Verifique se você forneceu o e-mail e o token!'
      );
    }
  }
}

export default new Credentials();
