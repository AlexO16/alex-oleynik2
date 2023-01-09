import React from "react"
import { Card } from "react-bootstrap"

function ApplicationCard({ item }) {
    return (
        <Card style={{ justify: "center", width: "225px"}}>
            {item.icon}
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{item.skill}</Card.Title>
            </Card.Body>
        </Card>
    )
};

export default ApplicationCard