import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import "../styles/corporate-welcome-page.css";
import myImage from "../assets/new_york_city_view.png"
import { ContactUsForm } from "./contact-us";
import { HeaderNavbarElements } from "./header"

function CorportateWelcomePage() {
    return (
        <div id="page_container">
            <div id="logo_headerNavbar_container" style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "0em 0em 0em 0em" }}>
                <div id="logo_container">Our Logo</div>
                <div id="headerNavbar_container"><HeaderNavbarElements /></div>
            </div>
            <div>
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
                    <ReactBootStrap.Carousel slide={true}>
                        <ReactBootStrap.Carousel.Item interval={1000}>
                            <ReactBootStrap.Carousel.Caption>
                                <div>
                                    <p style={{ fontSize: "1.1em" }}>Technology Solutions</p>
                                    <p>Describe one of your services</p>
                                </div>
                            </ReactBootStrap.Carousel.Caption>
                        </ReactBootStrap.Carousel.Item>
                        <ReactBootStrap.Carousel.Item interval={1000}>
                            <ReactBootStrap.Carousel.Caption>
                                <div>
                                    <p style={{ fontSize: "1.1em" }}>Corporate Financial Planning</p>
                                    <p>Describe one of your services</p>
                                </div>
                            </ReactBootStrap.Carousel.Caption>
                        </ReactBootStrap.Carousel.Item>
                        <ReactBootStrap.Carousel.Item interval={1000}>
                            <ReactBootStrap.Carousel.Caption>
                                <div>
                                    <p style={{ fontSize: "1.1em" }}>Digital Marketing Services</p>
                                    <p>Describe one of your services</p>
                                </div>
                            </ReactBootStrap.Carousel.Caption>
                        </ReactBootStrap.Carousel.Item>
                        <ReactBootStrap.Carousel.Item interval={1000}>
                            <ReactBootStrap.Carousel.Caption>
                                <div><p style={{ fontSize: "1.1em" }}>Lead Generation</p>
                                    <p>Describe one of your services</p></div>
                            </ReactBootStrap.Carousel.Caption>
                        </ReactBootStrap.Carousel.Item>
                        <ReactBootStrap.Carousel.Item interval={1000}>
                            <ReactBootStrap.Carousel.Caption>
                                <div>
                                    <p style={{ fontSize: "1.1em" }}>Bidding (RFP) Consulting</p>
                                    <p>Describe one of your services</p>
                                </div>
                            </ReactBootStrap.Carousel.Caption>
                        </ReactBootStrap.Carousel.Item>
                    </ReactBootStrap.Carousel>
                </div>
            </div>
            <div id="contact_us_container" style={{ backgroundColor: "#1A2B6D" }}>
                <ContactUsForm></ContactUsForm>
            </div>
        </div>
    );
}

export { CorportateWelcomePage }
