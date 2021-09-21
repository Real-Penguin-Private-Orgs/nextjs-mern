/* eslint-disable react/no-unescaped-entities */
import { Card, Button, Container, Popover, OverlayTrigger } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

interface CompanyI {
    company: any;
}

const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Are you sure?</Popover.Header>
      <Popover.Body>
            <Button variant="danger">Yes</Button>
            <Button variant="primary">No</Button>
      </Popover.Body>
    </Popover>
);

const CompanyCard = ({company}: CompanyI) =>{
    return(
      <Container>
            <Card key={company._id} style={{ width: '18rem', marginTop: '1.5rem', display: 'inline-grid' }}>
            <Card.Img variant="top" src={company.logo} />
            <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text>
                    Owner: {company.owner}
                </Card.Text>
                <Button variant="primary" style={{ textDecoration: 'none' }}>
                        Visit
                </Button>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button 
                            variant="danger" 
                            style={{ textDecoration: 'none' }}
                        >
                                Delete
                        </Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
      </Container>
    )
}

export default CompanyCard