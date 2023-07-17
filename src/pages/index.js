import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/component/layout";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Demo from "@/component/demo";
// demo is the full width complex button

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>EMTTR</title>
        <meta name="description" content="EMTTR Seeta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className={styles.banner}>
          <div className={styles.heroSection}>
            <Container>
              <p>Electronic Medicine Trial and Test Records as a Service</p>
              <p>
                <b>EMTTR</b>
              </p>
              <p>
                <i>Medicine for everyone</i>
              </p>
              {/* <Button href="#!" target="_blank">Any Button</Button> */}
            </Container>
          </div>
        </div>

        <Container>
          <h1 className="section-heading">INSPIRATION</h1>

          <Row>
            <Col className="bot-marg" md="12" lg="6">
              <img src="/img/Mask group.png" style={{ width: "100%" }} />
            </Col>
            <Col className="bot-marg" md="12" lg="6">
              <h4>
                EMTTRs as a Service empowers pharma companies and the medical
                ecosystem for secure and transparent medicine trial testing and
                clinical trials. It utilizes blockchain-enabled EMTTRs, EHR, and
                Radiology services on a decentralized cloud powered by Optimism,
                Ethereum, Chainlink , zksync, AWS, Argent, GSR and Filecoin.
                EMTTR aims at providing:
              </h4>
              <br />
              <ul>
                <li>
                  Secure data storage, transparent data movement and data
                  authenticity using Optimism, Ethereum & Filecoin/IPFS.
                </li>
                <li>
                  Secure data storage, transparent data movement and data
                  authenticity using Optimism, Ethereum & Filecoin/IPFS.
                </li>
                <li>
                  Enabling healthcare community by empowering pharma companies &
                  the medical eco-system to do medicine trial testing securely,
                  transparently using Ethereum and Optimism Blockchain.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="bot-marg" md="12" lg="6">
              <h4>
                In the EMTTR project, the blockchain ecosystem components used
                include:
              </h4>
              <ul>
                <li>
                  Optimism NFT marketplace: Facilitates secure trading of DICOM
                  data and medical templates as NFTs.
                </li>
                <li>
                  Embark: Enables the development of decentralized applications
                  for the EMTTR project on platforms like Ethereum.
                </li>
                <li>
                  Filecoin and IPFS: Provide decentralized storage for secure
                  and perpetual storage of medical data.
                </li>
                <li>
                  Optimism monitor and low code framework tool: Simplifies
                  medication log tracking using Optimism's blockchain
                  technology.
                </li>
                <li>
                  Optimism Community tooling: Assists in testing template data
                  for reliability and accuracy in the EMTTR project.
                </li>
                <li>
                  Ethereum, Status, and Chainlink: Enable automation and data
                  integration in the EMTTR project using blockchain technology.
                </li>
                <li>
                  Ethercalc/SocialCalc: Open-source spreadsheets utilized for
                  data analytics in medical research and precision medicine.
                </li>
                <li>zksync, AWS, Argent, GSR</li>
              </ul>
            </Col>
            <Col className="bot-marg" md="12" lg="6">
              <img
                src="/img/WHAT_IS-BLOCKCHAIN_OTP 1.png"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>

        <Row>
          <Col className="bot-marg image-button" md="3" lg="3">
            <p className="centeralign">Pitch Deck and Demo</p>
            <a href="https://www.youtube.com/watch?v=aIq3JiTlNVA&t=3s">
              <img src="img/Group 10.jpg" alt="youtube button" />
            </a>
          </Col>
          <Col className="bot-marg image-button" md="3" lg="3">
            <p className="centeralign">Github Repo</p>
            <a href="https://github.com/aspiringsecurity/EMTTR">
              <img src="img/Group 15.png" alt="youtube button" />
            </a>
          </Col>
          <Col className="bot-marg image-button" md="3" lg="3">
            <p className="centeralign">Screencast</p>
            <a href="https://youtu.be/BUiVvhuUdrE">
              <img src="img/Group 16 (1).png" alt="youtube button" />
            </a>
          </Col>
          <Col className="bot-marg image-button" md="3" lg="3">
            <p className="centeralign">Screencast</p>
            <a href="https://youtu.be/BUiVvhuUdrE">
              <img src="img/Group 17.png" alt="youtube button" />
            </a>
          </Col>
        </Row>

        {/* <Demo /> */}
        {/* this is the complex button from react material ui */}
        <br />

        <Container>
          <Row>
            <Col className="bot-marg" md="12" lg="6">
              <img
                src="/img/medical-banner-with-doctor-wearing-goggles 1.png"
                style={{ width: "100%" }}
              />
            </Col>
            <Col className="bot-marg" md="12" lg="6">
              <p>
                Development and Usage of the Optimism Stack: We are developing
                an Optimism NFT marketplace for DICOM images to enable research
                organizations and radiologists. This enables improving Data
                Transparency in Drug Testing and early-stage detection and
                prevention of community diseases.
              </p>
              <p>
                We also wish to scale our efforts to develop secure, transparent
                Drug Testing Pipeline and improving Data Transparency in Drug
                Testing using OP stack. Our OP solution enables medical trial
                testing and clinical trials via EMTTRs (Electronic Medicine
                Trial and Test Records as a Service) and EHR and Radiology
                services on the decentralized cloud using OP Stack. We are also
                enabling the development for EHR as a service using OP stack for
                scaling collaboration of DICOM data in EMTTR.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <img
            src="/img/Group 11.png"
            style={{ width: "100%" }}
            alt="awards image"
          />
        </Container>
        <Container>
          <Row>
            <Col sm="12" md="12" lg="6" className="bot-marg">
              <br />
              <Button href="https://medium.com/encode-club/metaverse-hackathon-prizewinners-and-summary-5d12353cc214">
                Explore More
              </Button>
            </Col>
            <Col sm="12" md="12" lg="6" className="bot-marg">
              <br />
              <Button
                href="https://optimism.mirror.xyz/Upn_LtV2-3SviXgX_PE_LyA7YI00jQyoM1yf55ltvvI?rpgf=2"
                target="_blank"
              >
                Explore More
              </Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <h1 className="section-heading">Other notable achievements</h1>

          <Row
            style={{
              backgroundColor: "#B8B0EC",
              paddingTop: "10px",
              margin: "20px 0",
              borderRadius: "10px",
            }}
          >
            <Col
              className="bot-marg"
              md="12"
              lg="2"
              style={{ borderRight: "1px solid white" }}
            >
              <p>Filecoin winner at Chainlink Fall hackathon 2022</p>
            </Col>
            <Col
              className="bot-marg"
              md="12"
              lg="2"
              style={{ borderRight: "1px solid white" }}
            >
              <p>
                EVM Ideathon Runner-Up 2022 (Government and Public Goods in
                Healthcare)
              </p>
            </Col>
            <Col
              className="bot-marg"
              md="12"
              lg="2"
              style={{ borderRight: "1px solid white" }}
            >
              <p>
                Runner-up at HealthChainhack 2018, Boston ($6000 credits
                recipient)
              </p>
            </Col>
            <Col
              className="bot-marg"
              md="12"
              lg="3"
              style={{ borderRight: "1px solid white" }}
            >
              <p>
                Young Scientist Award in Healthcare at India International
                Science Festival 2018
              </p>
            </Col>
            <Col className="bot-marg" md="12" lg="3">
              <p>Get in the Ring 2018 startup winner from India.</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <h1 className="section-heading">
            Planned Pilot Deployments using Optimism and Ethereum with Filecoin
            and IPFS storage:
          </h1>
          <ul>
            <li>
              Rajshri Medical College and Hospital, Uttar Pradesh, India &
              Diagnosity, Noida
            </li>
            <li>
              Covid Care Center, NSUT, New Delhi, India (in collaboration with
              the Department of Information Technology)
            </li>
            <li>
              Healthcare department at St. Marks School, Meera Bagh, New Delhi,
              India (in collaboration with the Computer Science department)
            </li>
            <li>
              <a href="https://www.eka.care/">Eka.care</a> (Used by 30 million
              Indian citizens. In collaboration with NHA and Co-Win)
            </li>
          </ul>
          <p>
            <strong>
              Collaboration with Optimism Ideation Community @ NSUT IIF, Delhi
              Government:{" "}
              <a href="https://sites.google.com/view/nsutiif/home">
                https://sites.google.com/view/nsutiif/home
              </a>{" "}
              and DeSci LATAM (DeScience community in Latin America).
            </strong>
          </p>
        </Container>

        <Container>
          <h1 className="section-heading">Optimism User Interaction</h1>
          <ul>
            <li>
              <strong>Optimism NFT marketplace </strong>for DICOM images for
              research organizations, radiologists: Improving Data Transparency
              in Drug Testing Using Ethereum, Optimism NFT marketplace.
            </li>

            <li>
              Sharing a smart contract for creating NFT in Optimism by one of
              our collaborators in Optimism Bedrock Goerli testnet:{" "}
              <a href="https://goerli-optimism.etherscan.io/address/0x1d807750029b3b345052b155123908968298bb9e">
                https://goerli-optimism.etherscan.io/address/0x1d807750029b3b345052b155123908968298bb9e
              </a>
            </li>

            <li>
              <strong>EthGlobal Community:</strong>{" "}
              <a href="https://twitter.com/ETHGlobal/status/1637180703413530632">
                https://twitter.com/ETHGlobal/status/1637180703413530632
              </a>
            </li>
            <li>
              Optimism TestXLS: Patient’s visit and Diagnosis Tooling with ionic
              framework within OP NFT marketplace.
            </li>
            <li>
              OP MED: Low code framework tool for Medication Log. Secure data
              storage, transparent data movement, data authenticity.
            </li>
            <li>
              Giving free Optimism transactions to medical volunteers sharing
              anonymized report data: We are extending OpenGSN to enable 0
              Optimism transaction fees for medical volunteers sharing
              anonymized report data using PyDICOM open source library.
            </li>
            <li>
              Attestation Hub Contract for Medical Reports: We are extending the
              Attestation Station smart contract to develop the Attestation Hub
              smart contract for Medical Reports.
            </li>
            <li>
              Tracing Optimism transactions to improve user retention and
              detect, analyze issues in real-time: We are extending Tenderly to
              trace optimism transactions in DICOM NFT marketplace.
            </li>
          </ul>
        </Container>

        <br />

        <Container>
          <img src="/img/EMTTR (1) 1.png" style={{ width: "100%" }} alt="" />
        </Container>

        <br />

        <Container>
          <h1 className="section-heading">Features</h1>

          <ul>
            <li>
              <strong>Just in Time Service</strong>: Availability of pharma
              companies medicine records across different stakeholders through
              secure Ethereum and Optimism blockchain network with Filecoin and
              IPFS storage.
            </li>
            <li>
              <strong>Record Management</strong>: Quality documentation reduces
              the issues regarding testing procedures and standardization.
            </li>
            <li>
              <strong>Research</strong>: Enabling healthcare community by
              empowering pharma companies & the medical eco-system to do
              medicine trial testing securely, transparently using Ethereum and
              Optimism blockchain network with Filecoin and IPFS storage.
            </li>
            <li>
              <strong>Data Security</strong>: Efficiently sharing of data
              (including personal data), privacy concerns, and patient
              enrollment strategies.
            </li>
            <li>
              <strong>Transparency</strong>: Improving Data Transparency in Drug
              Testing Using Ethereum and Optimism blockchain.
            </li>
          </ul>
        </Container>
      </>
    </Layout>
  );
}
