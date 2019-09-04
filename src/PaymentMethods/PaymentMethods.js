import React, { Component } from 'react';

class PaymentMethods extends Component {
  state = {
    loading: false,
    brands: [],
    amount: ''
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.GetPayments = this.GetPayments.bind(this);
  }

  handleChange(event) {
    this.setState({ amount: event.target.value });
  }

  GetPayments() {
    this.setState({ loading: true });
    this.getPay(this);
  }

  getPay(context) {
    const { pagseguro } = context.props;
    const { amount } = context.state;

    pagseguro.getPaymentMethods({
      amount: amount,
      success: function(response) {
        let creditCards = response.paymentMethods.CREDIT_CARD.options;
        let brandsObject = [];
        Object.keys(creditCards).map(key => {
          brandsObject.push(
            `https://stc.pagseguro.uol.com.br/${creditCards[key].images.MEDIUM.path}`
          );
        });
        context.setState({
          brands: brandsObject
        });
      },
      error: function(response) {
        // console.log(response);
      },
      complete: function(response) {
        context.setState({
          loading: false
        });
      }
    });
  }

  render() {
    const { loading, brands } = this.state;

    return (
      <div className='brands_container'>
        <input
          type='text'
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <input
          type='button'
          onClick={this.GetPayments}
          value='Obter Metodos de pagamento'
        />

        {loading ? (
          <div className='brands_loading'>Carregando</div>
        ) : (
          brands.map((image, key) => (
            <div className='brands_image' key={key}>
              <img src={image} alt='Laravel PagSeguro' />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default PaymentMethods;
