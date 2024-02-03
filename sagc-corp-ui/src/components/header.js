import * as ReactBootStrap from 'react-bootstrap'

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
        <ReactBootStrap.Navbar collapseOnSelect as="ul" bg="dark" variant="dark" expand="lg" sticky='top'>
                <ReactBootStrap.Navbar.Toggle />
                <ReactBootStrap.Navbar.Collapse>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.NavDropdown title="Dropdown">
                            <ReactBootStrap.NavDropdown.Item>
                                a
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item>
                                b
                            </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    );
};



export { HeaderNavbarElements };
