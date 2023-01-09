import React from "react"
import { Card } from "react-bootstrap"

function LanguageCard({ item }) {
    return (
        <Card className="border-0" style={{ justify: "center", width: "225px", background: "whitesmoke"}}>
            {item.icon}
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{item.skill}</Card.Title>
            </Card.Body>
        </Card>
    )
};

export default LanguageCard