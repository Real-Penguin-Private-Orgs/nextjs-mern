/* eslint-disable react/no-unescaped-entities */
import { Card, Button, Container } from "react-bootstrap"


const CompanyCard = ({company}: any) =>{
    return(
      <Container>
            <Card style={{ width: '18rem', marginTop: '1.5rem', display: 'inline-grid' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Nestle</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
      </Container>
    )
}

export default CompanyCard