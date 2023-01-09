import { Card } from "react-bootstrap";

function ContactCard({ item }) {
    return (
        <a className="col-md" href={item.url} > 
    <Card className="m-4 text-black border-0" style={{ vw: "100%" }}>
      {item.icon}
      <Card.Body>
                <Card.Title className="platName" style={{ textAlign: "center" }}>{item.platformName}</Card.Title>
            </Card.Body>
    </Card>
    </a>
    )
};

export default ContactCard;