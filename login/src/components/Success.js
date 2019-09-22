import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM in the future//
        this.props.nextStep();
    }
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thanks for your data!</h1>
                    <p>You'll get some emails soons.</p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success
