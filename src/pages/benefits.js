import Layout from "@/component/layout";
import { Col, Container, Row } from "react-bootstrap";

export default function benefits() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Benefits</h1>
        <Row>
          <Col className="bot-marg" md="12" lg="12">
            <ul>
              <li>
                Just in Time Service : Availability of pharma companies medicine
                records across different stakeholder through secure blockchain
                network.
              </li>
              <li>
                Record Management : Quality documentation reduces the issues
                regarding testing procedures and standardization.
              </li>
              <li>
                Research : Enabling healthcare community by empowering pharma
                companies & the medical eco-system to do medicine trial testing
                securely, transparently
              </li>
              <li>
                Data Security : Efficiently sharing of data (including personal
                data), privacy concerns and patient enrollment strategies.
              </li>
              <li>
                Transparency : Improving Data Transparency in Drug Testing Using
                Optimism Blockchain.
              </li>
            </ul>
          </Col>
          <Col className="bot-marg" md="12" lg="12">
            <img src="/img/EMTTR (1) 2.png" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
