import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { Container, Row } from "react-bootstrap"


const Resume = () => {
    const docs = [
        { uri: require("../img/alexOleynikResume.pdf") }
    ];
    return (
        <Container fluid>
            <h1 className="text-center fw-bold" style={{ paddingTop: 15 }}>Resume</h1>
            <Container fluid style={{ justify: "center", width: "80%" }} >
                <Row className="justify-content-center m-4">
                    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
                </Row>
            </Container>
        </Container>
    )
};

export default Resume;