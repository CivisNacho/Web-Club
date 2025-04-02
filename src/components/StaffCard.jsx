import { Card } from "react-bootstrap";

function StaffCard({ name, image, titles }) {
    
    return (
        <Card bg="dark" text="white">
            <Card.Img 
                variant="top" 
                src={image} 
                alt={name}
                style={{ height: "300px" }} 
            />
            <Card.Body>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-text">
                    {titles?.map((item, index) => (
                        <strong key={index}>{item}<br /></strong>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default StaffCard;
