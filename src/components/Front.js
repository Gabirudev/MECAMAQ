import React from "react";

export default class Front extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: "",
      error: false,
      embed: false,
      form: true
    };
  }

  check = e => {
    e.preventDefault();

    let startAt = /^(458919)/.exec(this.state.card);
    if (!startAt) {
      console.log("-- NOT A DIGIO CREDIT CARD --");
      this.setState({ error: true });
      return;
    }

    this.setState({ error: false });
    this.setState({ form: false });
    this.setState({ embed: true }, () => {
      ingresseWidget.init();
    });
    console.log("-- IS A DIGIO CREDIT CARD --");
  };

  onChange = e => {
    let name = e.target.id;
    let value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="front content-container">
        <div className="box">
          <div className="action-box">
            <p>Pré Venda</p>
            <img
              style={{ width: `200px`, marginBottom: `20px` }}
              src="./images/digio.png"
            />

            <img
              src="./images/meca.png"
              style={{ width: `100px`, margin: `20px` }}
            />
            <h1 className="text-title">MecaBrennand | 14 de Setembro</h1>

            {this.state.form && (
              <div
                style={{ textAlign: `center`, zIndex: 9000, marginTop: `40px` }}
              >
                <p className="instruction">
                  Digite os 6 primeiros dígitos do seu cartão de crédito Digio.
                </p>
                {this.state.error && (
                  <p className="error-message">Este não é um cartão válido.</p>
                )}
                <form className="card-input" onSubmit={this.check}>
                  <input
                    id="card"
                    className="input-text"
                    type="number"
                    placeholder="0000 00"
                    onChange={this.onChange}
                  />
                  <button className="button">Comprar</button>
                </form>
              </div>
            )}
            {this.state.embed && (
              <a
                className="buy-button"
                href="https://embedstore.ingresse.com/#/tickets/ingresse.com/event/31767"
              >
                COMPRAR INGRESSO
              </a>
            )}
            <div className="cards">
              <a href="https://www.digio.com.br/?utm_source=mecabrennand&utm_medium=pre-venda&utm_campaign=landingpage">
                <h2>
                  Peça o seu cartão garanta benefícios nos próximos festivais
                </h2>
                <img
                  src="https://digio.com.br/assets/blue/images/mockup/whatsitdigio.png"
                  style={{ width: `150px`, marginTop: `20px` }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
