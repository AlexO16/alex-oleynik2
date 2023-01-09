import { Container, Row } from "react-bootstrap";
import Application from "../components/tech/Application";
import Language from "../components/tech/Language";
import Packages from "../components/tech/Packages";
import alexInfo from "../alexInfo"

const Tech = () => {
    return (
        <Container className="tech">My Tech Stack
            <Container fluid style={{ justify: "center" }}>
                <h1 text-center>Languages</h1>
                <Row style={{ content: "center" }}>
                    {alexInfo.languages && alexInfo.languages.map((item) => (<Language item={item} key={item.skill} />))}
                </Row>
                <h1 text-center>Node Packages</h1>
                <Row style={{ content: "center" }}>
                    {alexInfo.packages && alexInfo.packages.map((item) => (<Packages item={item} key={item.skill} />))}
                </Row>
                <h1 text-center>Applications</h1>
                <Row style={{ content: "center" }}>
                    {alexInfo.applications && alexInfo.applications.map((item) => (<Application item={item} key={item.skill} />))}
                </Row>
            </Container>
        </Container>
    )
};

export default Tech