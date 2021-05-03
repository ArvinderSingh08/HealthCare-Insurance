import React from 'react';
//import './insurance.css';

 export default class Insurance extends React.Component{
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
      SignCount:2
    };
  } 
  handleKeyPress = (event) => {
    if(event.key == 'Z')
    {
      //alert('hey you pressed here! ');
      this.setState({SIGN: 1})
    }
    else{
      this.setState({SIGN: 2})
    }
  }
  handleClick(event) {
    event.preventDefault();
    if(this.state.SIGN == 2)
    {
      this.setState({ message: "VERIFIED BY BOTH AGENCIES" });
      <h1>{this.state.SIGN}</h1>
    }
    else{
      this.setState({ message: "NOT VERIFIED, PLEASE CONTACT LAB ADMIN AND HOSPITAL ADMIN" });
    }
    this.setState({ ID: this.state.recID });
    this.setState({ NAME: this.state.pname });
    this.setState({ DATE: this.state.dDate });
    this.setState({ HNAME: this.state.hname });
    this.setState({ PRICE: this.state.price });
    //this.setState({SIGN: this.state.SignCount +1})
  }
  render(){
     return(
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <h3 className="text-center">Insurance Admin</h3>
          <div className="login-form">
            <h4>Approve Medical Record</h4>
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
              
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleClick}
                >
                  Verify
                </button>
              </div>
        </form>
            {this.state.message && (
              <p className="alert alert-danger fade in">{this.state.message}</p>
            )}
          </div>
        </div>
        </div>     );
   }
 }

