import React, { useEffect, useState, useRef } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "../styles/corporate-welcome-page.css"

function CorportateWelcomePage() {
    return (
        <div id="page_container">
            <HeaderNavbarElements />
            <div class="justify-content-left">I am a image after the NavBar</div>
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
                            {element.dropdownItems.map((item) => {
                                return (
                                    <ReactBootStrap.NavDropdown.Item key={item.name}>{item.name}</ReactBootStrap.NavDropdown.Item>
                                )
                            })}
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
