import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/cards/ProjectCard";
import alexInfo from "../alexInfo"

function Projects() {
    return (
        <Container fluid>
            <h1 className="fw-bold text-center">Projects</h1>
            <Container className="d-grid" >
                <Row className="justify-content-center m-4">
                    {alexInfo.projects && alexInfo.projects.map((item) => (<ProjectCard item={item} key={item.project} />
                    ))}
                </Row>
            </Container>
        </Container>
    )
};

export default Projects;