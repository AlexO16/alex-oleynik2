import { Card, Button } from "react-bootstrap";

function ProjectCard({ item }) {
    return (
        <Card className="m-4 img-fluid">
            <Card.Body className="text-center">
                <Card.Title className="m-4 text-center">{item.project}</Card.Title>

                <Card.Img className="img-fluid" src={require(`../../../public/img/${item.projectImg}`)} alt="project img" />

                <Card.Text style={{ textAlign: "center" }}>{item.description}</Card.Text>

                <Button variant="primary" href={item.projectURL}>Check it out</Button>

                <Button variant="primary" href={item.githubURL}>GitHub Repo</Button>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;