import { Container, Row } from "react-bootstrap";
import ContactCard from "../components/cards/ContactCard";
import alexInfo from "../alexInfo";

function Contact() {
    return (
        <Container>
            <h1 className="text-center fw-bold">Contact Me!</h1>
            <Container className="d-grid" style={{ justify: "center" }}>
                <Row className="justify-content-center m-4">
                    {alexInfo.links && alexInfo.links.map((item) => (<ContactCard item={item} key={item.platformName} />))}
                </Row>
            </Container>
        </Container>
    )
};

export default Contact