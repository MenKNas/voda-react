import React from 'react'
import './sections.styles.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Sections extends React.Component {

    state = {
        phoneValid: null,
        emailValid: null,
        passwordValid: null,
        phoneMessage: '',
        emailMessage: '',
        passwordMessage: '',
        genericMessage: '',
        disabledBtn: true
    }

    giveClass(index) {
        return "img-" +index
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleInput = (e) => {
        this.setState({
            disabledBtn: false
        })
        if(e.target.placeholder==='Your phone') {
            const re = /^((2)|(6))[0-9]{9}$/;
            if (e.target.value.length < 9 || !(re.test(e.target.value))) {
                this.setState(({
                    phoneMessage: 'Invalid Phone Number'
                }))
            } else {
                this.setState({
                    phoneMessage: ''
                })
            }
        } else if(e.target.placeholder==='Your Email') {
            const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!(re.test(e.target.value))) {
                this.setState(({
                    emailMessage: 'Invalid Email'
                }))
            } else {
                this.setState({
                    emailMessage: ''
                })
            }
        } else if(e.target.placeholder==='Your password') {
            const re = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
            if (!(re.test(e.target.value))) {
                this.setState(({
                    passwordMessage: 'Password is not strong enough'
                }))
            } else {
                this.setState({
                    passwordMessage: ''
                })
            }
        }
    }

    printErrorMessages(){
        if (!this.state.phoneValid) {
            this.setState({
                errorMessage: 'invalid phone'
            })
        } 
    }

    render() {
        if (this.props.id === "01" || (this.props.selectedTab && this.props.selectedTab=== "01")) {
            return(
                <div>
                    <p> {this.props.title}</p>
                    <div className="images-grid">
                    {this.props.images.map((image,index)=>(
                            <div className="single-image-box" key={index}>
                                <img src={image.img} className={this.giveClass(index)} alt={image.title}/>
                                <div className="overlay">
                                    <div className="text">
                                     <p> &#128065; </p>
                                     <p> {image.title}</p>
                                     <hr></hr>
                                    </div>
                                </div>
                            </div>
                    ))}
                    </div>
                </div>
            )
        } else {
            return(
                <div className="section-2-main-area">
                    <div className="our-services">
                        <h4> {this.props.title} </h4>
                        <h2> {this.props.graphText}</h2>
                        {this.props.stats.map((stat,index)=>(
                            <div key={index} className="prcntg-line">
                                <span> {stat.title}</span>
                                <span className="prcntg-amount"> {stat.amount/10}%</span>
                               <Slider startPoint={stat.amount/10} ariaLabelledByForHandle="Percentage"/>
                            </div>
                        ))}
                        </div>
                        <div className="contact-form">
                            <h3> {this.props.formText} </h3>
                            <p> We work with ecosystem leaders, corporations and startups worldwide. How can we help you ?</p>
                            <form onSubmit={this.handleSubmit}>
                            {this.props.formLabels.map((label,index)=>(
                                label==='Your password' ? 
                                <div key={index} className="form-group">
                                    <input type="password" placeholder={label} className="contact-field" onChange={this.handleInput}/>
                                </div>
                                :                               
                                <div key={index} className="form-group">
                                    <input type="text" placeholder={label} className="contact-field" onChange={this.handleInput}/>
                                </div>
                            ))}
                            <div className="error-messages">
                                <p> {this.state.phoneMessage} </p>
                                <p> {this.state.emailMessage} </p>
                                <p> {this.state.passwordMessage} </p>
                            </div>
                            <button type="submit" disabled={this.state.disabledBtn}> {this.props.buttonText} </button>
                            </form>
                        </div>
                    </div>
            )
        }
    }
}

export default Sections;