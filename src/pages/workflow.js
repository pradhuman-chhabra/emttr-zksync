import Layout from "@/component/layout";
import { Col, Container, Row } from "react-bootstrap";

export default function workflow() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Workflow</h1>

        <Row>
          <Col className="bot-marg" md="12" lg="12">
            <ul>
              <li>
                Start JavaScript implementations of Optimism, Ethereum and IPFS
                nodes, each connecting to local private networks.
              </li>
              <li>
                Deploy a regulator contract. A trial proposal, including
                protocol documentation, is subsequently submitted to this
                contract by a CRO, with the documentation being stored using
                IPFS.
              </li>
              <li>
                If the proposal is accepted by the regulator, a trial contract
                is created. This contract is owned and administered by the CRO.
              </li>
              <li>
                Subjects are appended to the trial contract up until the trial
                start data. Synthetic data is then appended for each of the
                subjects, up until the trial end date.
              </li>
              <li>
                Finally, a script is provided to read all the data from the
                blockchain, providing a summary of each trial, and details of
                each subject and data points that have been added, with full
                timestamping.
              </li>
              <li>
                Each server (or node) in the network processes and verifies each
                data entry, then archives all transactions, along with the
                history trail, which is every transaction ever recorded to the
                network.
              </li>
              <li>
                Completion of token payments to CRO ( Contact Research
                Organization )
              </li>
            </ul>
          </Col>
          <Col className="bot-marg" md="12" lg="12">
            <img src="/img/EMTTR 1.png" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
