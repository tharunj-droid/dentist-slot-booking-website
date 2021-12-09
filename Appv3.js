import "./App.css";
import React from "react";
// import {Accordion, Card, Button} from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
        <div className="App">

            <header className="header">
                <a href="#" className="logo"> <i className="fas fa-tooth"></i> Smile n Style </a>
                
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#blog">Blog</a>
                    <a href="#testimonials">Testimonials</a>
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

                <h1 className="heading"> our <span>services</span> </h1>

                <div className="box-container">

                    <div className="box" id="rct">
                        <i className="fas fa-notes-medical"></i>
                        <h3>Root Canal Treatment</h3>
                        <p>Root Canal Treatment is done to prevent extraction of a tooth with pulpal damage, which could be due to multiple reasons, such as caries, injury, or trauma to the tooth.
                        <br/> 
                        Root Canal treated teeth need to be protected with a crown over them. </p> 
                    </div>

                    <div className="box" id="aesthetic">
                        <i className="fas fa-ambulance"></i>
                        <h3>Aesthetic Restorations</h3>
                        <p>Aesthetic Restorations can be done to restore structure in broken teeth or in teeth with internal stains. Minor gaps can be covered up to enhance the smile.</p>
                    </div>

                    <div className="box" id="crowns">
                        <i className="fas fa-user-md"></i>
                        <h3>Crowns and Bridges</h3>
                        <p>A cap or a crown is a restoration used to cover up a damaged or weak tooth.
                        <br/>
                        A bridge is a restoration to replace one or more missing teeth. </p> 
                    </div>

                    <div className="box" id="removable dentures">
                        <i className="fas fa-pills"></i>
                        <h3>Removable Partial Dentures</h3>
                        <p>Removable Partial Dentures or RPD are meant to restore missing teeth. They can be removed or worn by the patient without the dentists' assistance post fabrication.</p>
                    </div>

                    <div className="box" id="dentures">
                        <i className="fas fa-procedures"></i>
                        <h3>Complete Dentures</h3>
                        <p>Complete dentures are removable dentures fabricated when all natural teeth in a jaw are missing. CDs are totally supported by the jaw tissues. </p>
                    </div>

                </div>

                <div className="alert">
                    <strong>Intra-oral X-ray facility available! </strong>
                </div>
                
            </section>


            <section className="about" id="about">

                <h1 className="heading"> about <span>us</span> </h1>

                <div className="box-container">

                    <div className="box">
                            <img src="image/doc-1.jpg" alt=""/>
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

            <section className="blog" id="blog">
                
                <h1 className="heading"> <span> blog </span></h1>

                <div className="box">
                <button class="collapsible"> Bad Breath - More than just a Social Embarrassment </button>
                <p>What prompted me to pen this write up is that, 80%-85% of the patients that I see, suffer from BAD BREATH. Medically known as Halitosis, Bad Breath can have extreme adverse effects on the mental health and self-esteem of the Patient. It is also known to cause Anxiety and Depression in these cases.
                Most patients hesitate to talk about it even with a dentist and the dentist needs to be subtle in mentioning it and recommending a treatment, lest the patients get offended.
                90% of the cases with Halitosis, have the causative inside their mouths, Plaque and Calculus being the most common etiological factors.
                Plaque is the soft deposit that starts building around the teeth, soon after brushing. When Plaque hardens due to faulty brushing, it leads to the formation of Calculus. This condition can be easily treated by a dental practitioner by oral prophylaxis, commonly known as scaling. What is more important post scaling that most dentists miss doing is, instructing the patient about the right brushing technique [I have covered this in detail in my next blog].
                Other intraoral causes include, Xerostomia which means lack of salivary secretions, and Habits like Smoking, Tobacco and Alcohol consumption.

                Systemic causes of Halitosis are indicative of disorders involving different organ systems.
                Conditions of Digestive System that lead to Halitosis are:
                Diabetes: Sweet breath.
                Chronic Acidity: Sour smell.
                Liver Ailments: Musty/ Stale smell.
                Respiratory ailments that can cause halitosis are:
                Pneumonia, Bronchitis, Sinus infections and in all these cases, breath smells like that of Pus.
                Kidney Failure causes Ammonia smell and metallic taste.

                Coming to the circulatory system, Heart disease may not directly cause bad breath, but gum disease exponentially increases the risk of Heart disease.

                Having known the above, treatment of Halitosis in such cases would involve treating the underlying disease.

                Hence a visit to your Dentist every 6 months can give you a lot of insight to your general health, apart from maintaining oral health and boosting your self-esteem.</p>
                </div>
                
        {/* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Bad Breath - More than just a Social Embarrassment </Accordion.Header>
            <Accordion.Body>
            What prompted me to pen this write up is that, 80%-85% of the patients that I see, suffer from BAD BREATH. Medically known as Halitosis, Bad Breath can have extreme adverse effects on the mental health and self-esteem of the Patient. It is also known to cause Anxiety and Depression in these cases.
                Most patients hesitate to talk about it even with a dentist and the dentist needs to be subtle in mentioning it and recommending a treatment, lest the patients get offended.
                90% of the cases with Halitosis, have the causative inside their mouths, Plaque and Calculus being the most common etiological factors.
                Plaque is the soft deposit that starts building around the teeth, soon after brushing. When Plaque hardens due to faulty brushing, it leads to the formation of Calculus. This condition can be easily treated by a dental practitioner by oral prophylaxis, commonly known as scaling. What is more important post scaling that most dentists miss doing is, instructing the patient about the right brushing technique [I have covered this in detail in my next blog].
                Other intraoral causes include, Xerostomia which means lack of salivary secretions, and Habits like Smoking, Tobacco and Alcohol consumption.

                Systemic causes of Halitosis are indicative of disorders involving different organ systems.
                Conditions of Digestive System that lead to Halitosis are:
                Diabetes: Sweet breath.
                Chronic Acidity: Sour smell.
                Liver Ailments: Musty/ Stale smell.
                Respiratory ailments that can cause halitosis are:
                Pneumonia, Bronchitis, Sinus infections and in all these cases, breath smells like that of Pus.
                Kidney Failure causes Ammonia smell and metallic taste.

                Coming to the circulatory system, Heart disease may not directly cause bad breath, but gum disease exponentially increases the risk of Heart disease.

                Having known the above, treatment of Halitosis in such cases would involve treating the underlying disease.

                Hence a visit to your Dentist every 6 months can give you a lot of insight to your general health, apart from maintaining oral health and boosting your self-esteem.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion> */}

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
                        <hr/>
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
                        <img src="image/book-img.svg" alt=""></img>
                    </div>

                    <form action="">
                        <h3>Book Now!</h3>
                        <input type="text" placeholder="Enter your Name" className="box"></input>
                        <input type="number" placeholder="Enter your Age" className="box"></input>
                        <input type="number" placeholder="Enter your phone number" className="box"></input>
                        <input type="email" placeholder="Enter your email" className="box"></input>
                        <input type="date" placeholder="dd-mm-yyyy" className="box"></input>
                        <input type="address" placeholder="Enter your Address" className="box"></input>
                        <input type="submit" value="book now" className="btn"></input>
                    </form>

                </div>

            </section>

            <section className="footer">

                <div className="box-container">

                    <div className="box" >
                        <h3 align="left">quick links</h3>
                        <a href="#home" align="left"> <i className="fas fa-chevron-right"></i> Home </a>
                        {/* <a href="#services" align="left" > <i className="fas fa-chevron-right"></i> Services </a> */}
                        <a href="#about" align="left"> <i className="fas fa-chevron-right"></i> About </a>
                        <a href="#blog" align="left"> <i className="fas fa-chevron-right"></i> Blog </a>
                        <a href="#testimonials" align="left"> <i className="fas fa-chevron-right"></i> Testimonials </a>
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