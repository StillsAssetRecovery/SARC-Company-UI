import * as ReactBootStrap from 'react-bootstrap'

const ContactUsForm = () => {
    return (
        <div id="contact_us_info_conatiner" >
            <ReactBootStrap.Form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ color: "#FFFFFF" }}>Contact Us</p>
                <ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Label style={{ color: "#FFFFFF" }}>First Name:</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="text"></ReactBootStrap.Form.Control>
                    <ReactBootStrap.Form.Label style={{ color: "#FFFFFF" }}>Last Name:</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="text"></ReactBootStrap.Form.Control>
                    <ReactBootStrap.Form.Label style={{ color: "#FFFFFF" }}>Email:</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="email" placeholder="Please enter an email where we can reach you."></ReactBootStrap.Form.Control>
                    <ReactBootStrap.Form.Label style={{ color: "#FFFFFF" }}>Message:</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control as="textarea" rows={5}></ReactBootStrap.Form.Control>
                </ReactBootStrap.Form.Group>
            </ReactBootStrap.Form>
        </div>
    )
}

export { ContactUsForm }