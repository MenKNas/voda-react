import React from 'react'
import './test-component.styles.css'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class TestComponent extends React.Component {

    giveClass(index) {
        return "img-" +index
    }


    render() {
        if (this.props.id === "01") {
            return(
                <div>
                    <p> {this.props.title}</p>
                    <div className="images-grid">
                    {this.props.images.map((image,index)=>(
                            <div className="single-image-box" key={index}>
                                <img src={image.img} className={this.giveClass(index)}/>
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
                            {this.props.formLabels.map((label,index)=>(
                                <div key={index} className="form-group">
                                    <input placeholder={label} className="contact-field"/>
                                </div>
                            ))}
                            <button type="submit"> {this.props.buttonText} </button>
                        </div>
                    </div>
            )
        }
    }
}

export default TestComponent