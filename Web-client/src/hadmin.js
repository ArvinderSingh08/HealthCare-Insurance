import React from "react";
import ReactDOM from "react-dom";
import HealthCare from "./HealthCare";
import web3 from "./web3";
import Data from "./Data";


export default class Hadmin extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      recID: "",
      pname: "",
      dDate: "",
      hname: "",
      price: "",
      message: "",
      SignCount:""
    };
  }

  async handleClick(event) {
    event.preventDefault();
    
    console.log(this.state.SIGN);
    const accounts = await web3.eth.getAccounts();
    await HealthCare.methods
      .signRecord(this.state.recID)
      .send({ from: accounts[0], gas: 2100000 });
    this.setState({ message: "Record approved!" });
    this.setState({ ID: this.state.recID });
    this.setState({ NAME: this.state.pname });
    this.setState({ DATE: this.state.dDate });
    this.setState({ HNAME: this.state.hname });
    this.setState({ PRICE: this.state.price });
    this.setState({SIGN: this.state.SignCount +1})
  }

  render() {
    return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <h3 className="text-center">Hospital Admin</h3>
          <div className="login-form">
            <h4 className="text-center">Approve Medical Record</h4>
            <form method="post" autoComplete="off">
              <h2 className="text-center">Enter Patient's Data</h2>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.recID}
                  onChange={event =>
                    this.setState({ recID: event.target.value })
                  }
                  className="form-control"
                  placeholder="ID"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.pname}
                  onChange={event =>
                    this.setState({ pname: event.target.value })
                  }
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.dDate}
                  onChange={event =>
                    this.setState({ dDate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.hname}
                  onChange={event =>
                    this.setState({ hname: event.target.value })
                  }
                  className="form-control"
                  placeholder="Hospital Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.price}
                  onChange={event =>
                    this.setState({ price: event.target.value })
                  }
                  className="form-control"
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleClick}
                >
                  Approve
                </button>
              </div>
        </form>
            {this.state.message && (
              <p className="alert alert-danger fade in">{this.state.message}</p>
            )}
          </div>
        </div>
        <div className="col-md-6 col-md-offset-2">
          <div className="c-list">
            <h2 className="text-center">Records</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Hospital Name</th>
                  <th>Price</th>
                  <th>Sign Count</th>
                </tr>
                <tr>
                  <td>{this.state.ID}</td>
                  <td>{this.state.NAME}</td>
                  <td>{this.state.DATE}</td>
                  <td>{this.state.HNAME}</td>
                  <td>{this.state.PRICE}</td>
                  <td>{this.state.SIGN}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
