import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import "../styles/corporate-welcome-page.css";
import myImage from "../assets/new_york_city_view.png"

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
                <div style={{backgroundColor: "#F1A8A9"}}>
                    <div><p style={{ fontSize: "1.5em" }}>Our Services</p></div>
                    <div><p style={{ fontSize: "1.1em" }}>Technology Solutions</p><p>Describe one of your services</p></div>
                    <div><p style={{ fontSize: "1.1em" }}>Corporate Financial Planning</p><p>Describe one of your services</p></div>
                    <div><p style={{ fontSize: "1.1em" }}>Digital Marketing Services</p><p>Describe one of your services</p></div>
                    <div><p style={{ fontSize: "1.1em" }}>Lead Generation</p><p>Describe one of your services</p></div>
                    <div><p style={{ fontSize: "1.1em" }}>Bidding (RFP) Consulting</p><p>Describe one of your services</p></div>
                </div>
            </div>

        </div>
    );
}

const NavBarElementTitles = [
    {
        name: "About Us",
        dropdownItems: [
            { name: "Our Story" },
            { name: "Our Team" },
            { name: "Our Partners" }
        ]
    },
    {
        name: "Our Services",
    },
    {
        name: "Industries",
    },
    {
        name: "Tools & Tips",
    },
    {
        name: "Contact Us",
    },
];

const HeaderNavbarElements = () => {
    return (
        <ReactBootStrap.Nav as="ul" className="justify-content-center fill">
            {NavBarElementTitles.map((element) => {
                if (element.dropdownItems) {
                    return (
                        <ReactBootStrap.NavDropdown title={element.name} key={element.name} autoClose={true}>
                            {element.dropdownItems.map(
                                (item) => { return <ReactBootStrap.NavDropdown.Item style={{ padding: "0em 5em 0em 5em" }} key={item.name}>{item.name}</ReactBootStrap.NavDropdown.Item> }
                            )}
                        </ReactBootStrap.NavDropdown>
                    )
                } else {
                    return (
                        <ReactBootStrap.Nav.Item key={element.name}>
                            <ReactBootStrap.Nav.Link href="#" name={element.name}>{element.name}</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav.Item>
                    )
                }
            })}
        </ReactBootStrap.Nav>
    );
};

export { CorportateWelcomePage };
