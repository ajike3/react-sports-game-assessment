import React, { Component } from 'react';

class Contact extends Component {




    handleChange = (even)=> {
        const formData = {...this.state.formData}
        formData[event.target.name]=event.target.valuethis.setState({
          this.set.state({
              
          })     
        })

    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.setState({
                submitted: true
        })
    }
    resetForm =(event) => {
    this.setState ({
        submitted: false,
        formData; {
            firstName: ""
            lastName: ""
        }
    })

}

    render() {
       if (this.state.submitted === true) {
        return {
            <div clasName="Contact">
                <form onSubmit=
        
            )
        }    
            <div>
                        <label> htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            name="firstName"    
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                
                    <label> htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        name="lastName"    
                        value={this.state.formData.lastName}
                
                
                </form>
        }
    }
}