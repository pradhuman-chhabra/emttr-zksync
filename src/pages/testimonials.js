import Layout from "@/component/layout";
import { Container } from "react-bootstrap";

export default function testimonials() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Customer Testimonials</h1>

        <ul>
          <li>
            “OP Medicine’s analytic tools have been an enabler to our hospital
            management team. We look forward to collaborating on using Optimism
            for EHRs at our medical college.” - Tulika Aggarwal, Director at
            Rajshri Hospitals, India
          </li>
          <li>
            “OP Medicine’s toolkit have been great sources of IT automation
            enablement” - Dr. Vijayant Aggarwal, Covid Care Center, NSUT, Delhi
          </li>
          <li>
            Great support by EthGlobal’s OP community:{" "}
            <a href="https://twitter.com/ETHGlobal/status/1637180703413530632">
              https://twitter.com/ETHGlobal/status/1637180703413530632
            </a>
          </li>
          <li>
            Our project link at OP RetroPGF page:{" "}
            <a href="https://app.optimism.io/retropgf-discovery/0x8dc640a257DE18857F8d24e1Ae2645F8bBa1E034">
              https://app.optimism.io/retropgf-discovery/0x8dc640a257DE18857F8d24e1Ae2645F8bBa1E034
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  );
}
