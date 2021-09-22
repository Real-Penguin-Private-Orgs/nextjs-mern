import { Card, Button, Container, Popover, OverlayTrigger } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

interface FoodI {
    food: any;
}

const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Are you sure?</Popover.Header>
      <Popover.Body>
            <Button variant="danger">Yes</Button>
            <Button 
                variant="primary"
            >
                No
            </Button>
      </Popover.Body>
    </Popover>
);

const FoodList = ({food}: FoodI) => {
    return(
        <>
             <Container>
            <Card key={food._id} style={{ width: '18rem', marginTop: '1.5rem', display: 'grid' }}>
            <Card.Img variant="top" src={food.logo} />
            <Card.Body>
                <Card.Title>{food.brand}</Card.Title>
                <Card.Text>
                    Flavour: {food.flavour}
                </Card.Text>
                <Button 
                    variant="primary" 
                    style={{ textDecoration: 'none' }}
                    onClick={() => location.href="/food/" + food._id}
                >
                        Visit
                </Button>
                <OverlayTrigger trigger="click" rootClose  placement="right" overlay={popover}>
                        <Button 
                            variant="danger" 
                            style={{ textDecoration: 'none', marginLeft: '1rem' }}
                        >
                                Delete
                        </Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
      </Container>
        </>
    )
}

export default FoodList;