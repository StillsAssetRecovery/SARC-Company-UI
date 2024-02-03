import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import myImage from "../assets/new_york_city_view.png";
import { ContactUsForm } from "./contact-us";
import { HeaderNavbarElements } from "./header";
import Footer from "./footer"

function CorportateWelcomePage() {

    return (
        <div id="page_container">
            <div id="logo_headerNavbar_container" style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "0em 0em 0em 0em" }}>
                <div id="headerNavbar_container"><HeaderNavbarElements /></div>
            </div>
            <div style={{backgroundColor: "#F2F2F2"}}>
                <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
                    <div class="justify-content-left"><ReactBootStrap.Image src={myImage}></ReactBootStrap.Image></div>
                    <div><p style={{ fontSize: "1.25em" }}>Powering you through Data-Driven-Solutions</p></div>
                </div>
                <div>
                    <div><p style={{ color: "#1A2B6D", fontSize: "2em" }}>Turning Completxity, into Simplicity</p></div>
                    <div><p>With a wealth of experience and a deep understanding of the industry, we are dedicated to helping our clients achieve their financial goals and build a secure future. Whether you are an individual investor or a large corporation, we have the knowledge and resources to help you succeed.</p></div>
                </div>
                <div id="services_container" style={{ backgroundColor: "#F1A8A9" }}>
                    <div>
                        <p style={{ fontSize: "1.5em" }}>Our Services</p>
                    </div>
                    <Slider {...ServicesSliderSettings}>
                        <div>
                            <p style={{ fontSize: "1.1em" }}>Technology Solutions</p>
                            <p>Mobile App / Web Development</p>
                            <p>DevOps</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "1.1em" }}>Corporate Financial Planning</p>
                            <p>Credit</p>
                            <p>Stock Planning</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "1.1em" }}>Digital Marketing Services</p>
                            <p>Youtube Automation</p><p>Adverstising</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "1.1em" }}>Lead Generation</p>
                            <p>Describe one of your services</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "1.1em" }}>Bidding (RFP) Consulting</p>
                            <p>Describe one of your services</p>
                        </div>
                    </Slider>
                </div>
            </div>
            <div id="contact_us_container" style={{ backgroundColor: "#1A2B6D" }}>
                <ContactUsForm></ContactUsForm>
            </div>
            <div id="footer_container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Footer></Footer>
            </div>
        </div>
    );
}

const ServicesSliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500, // the larger the number the faster it moves item-to-item
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // the larger the number the longer it is on screen
    pauseOnHover: true
}

export default CorportateWelcomePage
