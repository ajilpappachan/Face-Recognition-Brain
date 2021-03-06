import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RegisterEmail: '',
            RegisterPassword: '',
            RegisterName: ''
        };
     }

     onEmailChange = (event) => {
         this.setState({RegisterEmail: event.target.value});
     }

     onPasswordChange = (event) => {
        this.setState({RegisterPassword: event.target.value});
    }

    onNameChange = (event) => {
        this.setState({RegisterName: event.target.value});
    }

    onSubmit = () =>
    {
        console.log(this.state);
        fetch('https://mighty-waters-03053.herokuapp.com/register', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.RegisterEmail,
                password: this.state.RegisterPassword,
                name: this.state.RegisterName
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id)
            {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }
    
    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure center tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onNameChange} type="text" name="name" id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onEmailChange} type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onPasswordChange} type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign Up"
                                onClick={this.onSubmit}
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;