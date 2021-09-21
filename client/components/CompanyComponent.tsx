import { Container } from "react-bootstrap";

interface CompanyI {
    company: any;
}

const CompanyComponent = ({company}: CompanyI) => {
    return (
        <>
                <Container>
                        {company.name}
                </Container>
        </>
    )
}

export default CompanyComponent;