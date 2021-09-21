/* eslint-disable react/no-unescaped-entities */
import { Card, Button, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

interface CompanyI {
    company: any;
}

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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
      </Container>
    )
}

export default CompanyCard