import "./App.css";
import "./Popup.js";
import React, {Component} from "react";
import axios from "axios"
// import {Accordion, Card, Button} from 'react-bootstrap';

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName: '',
            age:'',
            phoneNo: '',
            email: '',
            date: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changePhoneNo = this.changePhoneNo.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
        //this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }

    changeAge(event) { 
        this.setState({ 
            age: event.target.value
        })
    }

    changePhoneNo(event) {
        this.setState({ 
            phoneNo: event.target.value 
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changeDate(event) {
        this.setState({
            date: event.target.value
        })
    }

    onChange(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            age: this.state.age,
            phoneNo: this.state.phoneNo,
            email: this.state.email,
            date: this.state.date
        }
        axios.post('http://localhost:4000/app/appointment', registered)
            .then(response =>console.log(response.data))
        this.setState({
            fullName: '',
            age:'',
            phoneNo: '',
            email: '',
            date: ''
        })
    }

    render() {
        return (
            <div className="App">

                <header className="header">
                    <a href="#" className="logo"> <i className="fas fa-tooth"></i> Smile n Style </a>
                    
                    <nav className="navbar">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#blog">Blog</a>
                        <a href="#appointment">Appointment</a>
                    </nav>

                    <div id="menu-btn" className="fas fa-bars"></div>
                </header>

                <section className="home" id="home">
                    <div className="image">
                        <img src="image/dental.png" alt=""></img>
                    </div>
                    <div className="content">
                        <h3>We Wish to Spread Smiles, Literally and Otherwise!</h3>
                        <a href="#contact" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
                    </div>
                </section>

                <section className="services" id="services">

                    <h1 className="heading"> <span>services</span> offered </h1>

                    <div className="box-container">

                        <div className="box" id="rct">
                            <i className="fas fa-syringe"></i>
                            <h3>Root Canal Treatment</h3>
                            <p>Root Canal Treatment is done to prevent extraction of a tooth with pulpal damage, which could be due to multiple reasons, such as caries, injury, or trauma to the tooth.
                            <br/> 
                            Root Canal treated teeth need to be protected with a crown over them. </p> 
                        </div>

                        <div className="box" id="aesthetic">
                            <i className="fas fa-magic"></i>
                            <h3>Aesthetic Restorations</h3>
                            <p>Aesthetic Restorations can be done to restore structure in broken teeth or in teeth with internal stains. Minor gaps can be covered up to enhance the smile.</p>
                        </div>

                        <div className="box" id="crowns">
                            <i className="fas fa-tooth"></i>
                            <h3>Crowns and Bridges</h3>
                            <p>A cap or a crown is a restoration used to cover up a damaged or weak tooth.
                            <br/>
                            A bridge is a restoration to replace one or more missing teeth. </p> 
                        </div>

                        <div className="box" id="removable dentures">
                            <i className="fas fa-teeth-open"></i>
                            <h3>Removable Partial Dentures</h3>
                            <p>Removable Partial Dentures or RPD are meant to restore missing teeth. They can be removed or worn by the patient without the dentists' assistance post fabrication.</p>
                        </div>

                        <div className="box" id="dentures">
                            <i className="fas fa-teeth"></i>
                            <h3>Complete Dentures</h3>
                            <p>Complete dentures are removable dentures fabricated when all natural teeth in a jaw are missing. CDs are totally supported by the jaw tissues. </p>
                        </div>

                    </div>

                    <div className="alert">
                        <strong>Intra-oral X-ray facility available! </strong>
                    </div>
                    
                </section>


                <section className="about" id="about">

                    <h1 className="heading"><span> about </span> us </h1>

                    <div className="box-container">

                        <div className="box">
                                <img src="image/dentist.jpg" alt=""/>
                                <h3>Dr. Savita Koppar Deshpande</h3>
                                <span>BDS</span><br/>
                                <a href="https://www.facebook.com/DrSavitaSuparn" className="fab fa-facebook-f"></a>
                                <a href="https://twitter.com/DrSavitaKD" className="fab fa-twitter"></a>
                                <a href="https://www.instagram.com/savitakoppardeshpande/" className="fab fa-instagram-square"></a>
                                <a href="https://www.linkedin.com/in/dr-savita-koppar-deshpande-94161280?originalSubdomain=in" className="fab fa-linkedin"></a>
                            </div>

                            <div className="box">
                                <p> Dr. Savita Koppar Deshpande completed her graduation in dentistry from the prestigious KLES Institute of Dental Sciences, Belagavi in the year 1998. She then worked as a senior resident doctor at SDM Dental College, Dharwad for a period of 2 years, post which she has been into dental practice. She has handled a wide variety of cases ranging from RCTs to full mouth rehabilitations with fixed prosthesis. She has also completed a certificate course in Implant Dentistry. </p>
                            </div>

                    </div>

                </section>

                <section className="testimonials" id="testimonials">

                    <h1 className="heading"> <span> testimonials </span></h1>

                    <div className="box-container">
                        <div className="box">
                            <p>
                                I had visited various dentists before my friend referred me to Dr.Savita. All had advised me to remove all my teeth and get complete dentures. But Dr.Savita meticulously planned my treatment that extended over a period of 2 months and the outcome is just unbelievable. I have a fixed prosthesis placed now and can eat all my favorite dishes. Aesthetically the restoration looks amazingly natural.<br/>
                                <span>-Purushottam</span>
                            </p>
                        </div>
                        <div className="box">
                            <p>
                                I had facial pains in the left side of my face from 6 years ever since I had had a fall and injured my jaw. I had visited various clinics. My problem wasn't diagnosed and they almost termed my pain psychological. When I consulted Dr.Savita, she took a detailed history and exactly pin-pointed as to which tooth the pain originated from. I was totally relieved of my pain in just 2 sittings. I can't express my joy in words and can't thank Dr.Savita enough.<br/>
                                <span>-Shubha</span>
                            </p>
                        </div>
                    </div>

                    <div className="box-container3">

                        <div className="box">
                            <figure>
                                <img src="image/b2.jpg" alt="b2"/>
                                <figcaption> BEFORE </figcaption>
                            </figure>
                            <figure>
                                <img src="image/a2.jpg" alt="a2"/>
                                <figcaption> AFTER </figcaption>
                            </figure>
                        </div>

                        <div className="box">
                            <figure>
                                <img src="image/b1.jpg" width="150" height="150" alt="b1"/>
                                <figcaption> BEFORE </figcaption>
                            </figure>
                            <figure>
                                <img src="image/a1.jpg" width="150" height="150" alt="a1"/>
                                <figcaption> AFTER </figcaption>
                            </figure>
                        </div>

                        <div className="box">
                            <figure>
                                <img src="image/b3.jpg" alt="b3"/>
                                <figcaption> BEFORE </figcaption>
                            </figure>
                            <figure>
                                <img src="image/a3.jpg" alt="a3"/>
                                <figcaption> AFTER </figcaption>
                            </figure>
                        </div>
                    </div>
                    
                </section>
                
                <section className="blog" id="blog">
                    
                    <h1 className="heading"> <span> blog </span></h1>
                    <div className="box-container">
                        <div className="box">
                            <figure><img src="image/brushing.jpg" alt="brushing"/><figcaption><a href="https://savitasuparn.wixsite.com/website/post/can-the-right-brushing-technique-help-you-retain-your-natural-teeth-for-life">
                            Can the right brushing technique help you retain your natural teeth for life?
                            </a></figcaption></figure>
                        </div>
                        <div className="box">
                            <figure><img src="image/badbreath.jpg" alt="bad breath"/><figcaption><a href="https://savitasuparn.wixsite.com/website/post/bad-breath-more-than-just-a-social-embarrassment">Bad Breath - More than just a Social Embarrassment</a></figcaption></figure>
                        </div>
                    </div>
                </section>

                <section className="contact" id="contact">
                    
                    <h1 className="heading"> <span>contact</span> us </h1>  

                    <div className="box-container"> 

                        <div className="box">
                            <h3>Address</h3>
                            <a href="https://www.google.com/maps/dir/12.8881935,77.5963265/smile+n+style+dharwad/@14.1568901,75.1608921,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bb8cd46c0665b05:0x5e755f0e28727bba!2m2!1d74.9781488!2d15.4708745" align="left"><i className="fas fa-map-marker-alt"></i> MIG-II-39, KHB Colony, 3rd Phase,<br/>Doddanayakanakoppa, Sampige Nagar, <br/>Dharwad, Karnataka 580008 </a>
                            <h3>Email</h3>
                            <a href="mailto: savvy.smilenstyle@gmail.com" align="left"> <i className="fas fa-envelope"></i> savvy.smilenstyle@gmail.com </a>
                            <h3>Phone Number</h3>
                            <a href="tel: +91 9403646321" align="left"> <i className="fas fa-phone"></i> +91 9403646321 </a>
                        </div>
                        <div className="box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7690.503541989924!2d74.9769626!3d15.4708838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd46c0665b05%3A0x5e755f0e28727bba!2sSmile%20n%20Style!5e0!3m2!1sen!2sin!4v1638709371164!5m2!1sen!2sin" allowfullscreen="" loading="lazy" width="100%" height="100%"></iframe>
                        </div>

                    </div>

                    <div className="hours">
                        <h2>Hours of Service</h2>
                        <p>
                            <span> Monday through Saturday</span> <br/>  10:00AM to 1:00PM and 5:00PM to 8:00PM 
                        </p>
                    </div>


                </section>

                <section className="appointment" id="appointment">
                    <h1 className="heading"> book an <span>appointment</span> now </h1>    

                    <div className="row">

                        <div className="image">
                            <img src="image/book.jpg" alt=""></img>
                        </div>

                        <form onSubmit={this.onSubmit}>
                            <h3>Book Now!</h3>
                            <input 
                                type="text" 
                                placeholder="Enter your Name" 
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className="box" 
                            />
                            <input 
                                type="number" 
                                placeholder="Enter your Age" 
                                onChange={this.changeAge}
                                value={this.state.age}
                                className="box"
                            />
                            <input 
                                type="number" 
                                placeholder="Enter your phone number"
                                onChange={this.changePhoneNo}
                                value={this.state.phoneNo} 
                                className="box"
                            />
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                onChange={this.changeEmail}
                                value={this.state.email} 
                                className="box"
                            />
                            <input 
                                type="text" 
                                placeholder="dd-mm-yyyy"
                                onChange={this.changeDate}
                                value={this.state.date}                            
                                className="box"
                            />
                            <input 
                                type="submit" 
                                value="Submit"
                                className="btn" 
                            /> 
                        </form>
                    </div>
                </section>

                <section className="footer">
                    <div className="box-container">
                        <div className="box" >
                            <h3 align="left">quick links</h3>
                            <a href="#home" align="left"> <i className="fas fa-chevron-right"></i> Home </a>
                            <a href="#about" align="left"> <i className="fas fa-chevron-right"></i> About </a>
                            <a href="#testimonials" align="left"> <i className="fas fa-chevron-right"></i> Testimonials </a>
                            <a href="#blog" align="left"> <i className="fas fa-chevron-right"></i> Blog </a>
                            <a href="#appointment" align="left"> <i className="fas fa-chevron-right"></i> Appointment </a>
                        </div>

                        <div className="box">
                            <h3 align="left">services offered</h3>
                            <a href="#rct" align="left"> <i className="fas fa-chevron-right"></i>Root Canal Treatment</a>
                            <a href="#aesthetic" align="left"> <i className="fas fa-chevron-right"></i>Aesthetic Restorations </a>
                            <a href="#crowns" align="left"> <i className="fas fa-chevron-right"></i> Crowns and Bridges </a>
                            <a href="#removable dentures" align="left"> <i className="fas fa-chevron-right"></i> Removable Partial Dentures </a>
                            <a href="#dentures" align="left"> <i className="fas fa-chevron-right"></i> Complete Dentures </a>
                        </div>

                        <div className="box">
                            <h3 align="left">contact us</h3>
                            <a href="tel: +91 9403646321" align="left"> <i className="fas fa-phone"></i> +91 9403646321 </a>
                            <a href="mailto: savvy.smilenstyle@gmail.com" align="left"> <i className="fas fa-envelope"></i> savvy.smilenstyle@gmail.com </a>
                            <a href="https://www.google.com/maps/dir/12.8881935,77.5963265/smile+n+style+dharwad/@14.1568901,75.1608921,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bb8cd46c0665b05:0x5e755f0e28727bba!2m2!1d74.9781488!2d15.4708745" align="left"> <i className="fas fa-map-marker-alt"></i>Dharwad, Karnataka - 580008 </a>
                        </div>

                        <div className="box">
                            <h3 align="left">follow us</h3>
                            <a href="https://www.facebook.com/DrSavitaSuparn" align="left"> <i className="fab fa-facebook-f"></i> DrSavitaSuparn </a>
                            <a href="https://twitter.com/DrSavitaKD" align="left"> <i className="fab fa-twitter"></i> DrSavitaKD </a>
                            <a href="https://www.instagram.com/savitakoppardeshpande/" align="left"> <i className="fab fa-instagram-square"></i> savitakoppardeshpande </a>
                            <a href="https://www.linkedin.com/in/dr-savita-koppar-deshpande-94161280?originalSubdomain=in" align="left"><i className="fab fa-linkedin"/>dr-savita-koppar-deshpande</a>
                        </div>

                    </div>

                    <div> created by poorvi...nikith...neeraj. | all rights reserved |</div>

                </section>

            </div>
    );
  }
}

export default App;