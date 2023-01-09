import { Container, Row } from "react-bootstrap";
import Application from "../components/tech/Application";
import Language from "../components/tech/Language";
import Packages from "../components/tech/Packages";
import alexInfo from "../alexInfo"

const Tech = () => {
    return (
        <Container className="fw-bold text-center" style={{ fontSize: 35, paddingTop: 15, paddingBottom: 10 }}>My Tech Stack
            <Container fluid style={{ justify: "center" }}>
                <h1 text-center style={{ fontSize: 35, paddingTop: 35, paddingBottom: 30 }}>Languages</h1>
                <Row className="row justify-content-center justify-content-between">
                    {alexInfo.languages && alexInfo.languages.map((item) => (<Language item={item} key={item.skill} />))}
                </Row>
                <h1 text-center style={{ fontSize: 35, paddingTop: 35, paddingBottom: 30 }}>Node Packages</h1>
                <Row className="row justify-content-center justify-content-between">
                    {alexInfo.packages && alexInfo.packages.map((item) => (<Packages item={item} key={item.skill} />))}
                </Row>
                <h1 text-center style={{ fontSize: 35, paddingTop: 35, paddingBottom: 30 }}>Applications</h1>
                <Row className="row justify-content-center justify-content-between">
                    {alexInfo.applications && alexInfo.applications.map((item) => (<Application item={item} key={item.skill} />))}
                </Row>
            </Container>
        </Container>
    )
};

export default Tech