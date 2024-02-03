import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Footer() {
    return (
        <div>
            <ReactBootStrap.Table style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <thead>
                    <tr>
                        <th>Company Info</th>
                        <th>Legal</th>
                        <th>Connect</th>
                        <th>Help</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="#">Careers</a>
                        </td>
                        <td>Privacy Policy</td>
                        <td>Facebook</td>
                        <td>FAQs</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#">Affilitate</a>
                        </td>
                        <td>
                            Terms of Service
                        </td>
                        <td>Instagram</td>
                    </tr>
                    <tr>
                        <td>Press</td>
                        <td>Do not sell or share my Personal Information</td>
                        <td>Snapchat</td>
                    </tr>
                </tbody>
            </ReactBootStrap.Table>
            <div>
                <p>5 Oliver Ave Trenton, NJ 08618 USA</p>
                <p>Copyright © 2023 Stills Asset Global, Inc</p>
            </div>
        </div>
    )
}
export default Footer
