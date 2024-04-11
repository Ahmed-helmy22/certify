import {
    Link,
    useNavigate,
  } from 'react-router-dom';
import Wrapper from "../../../assets/wrappers/TermsCondition";


const TermsCondition = () => {

    const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="container page">
        <div className="info">
          <h1>Terms and Conditions</h1>
          <p>
            With the registration and use of CerTrack, you agree to the terms of
            our EULA as well as the DPA (applicable when we process data on your
            behalf). Information on how we process your personal data can be
            found in our{" "}
            <span>
              {" "}
              <a href="https://www.teamviewer.com/en/legal/privacy-and-cookies/">
                Privacy Notice.
              </a>
            </span>
          </p>

          <h3>EULA – Preamble</h3>
          <p>
            PLEASE READ THIS CerTrack END USER LICENSE AGREEMENT (“EULA“)
            CAREFULLY.
          </p>
          <p>
            The EULA is a modular contract that governs and defines the terms of
            the contractual relationship between CerTrack Global (“CerTrack”)
            and its customers (“Customer”).
          </p>
          <p>The EULA consists of the following components:</p>

          <p>A. Master Terms</p>
          <p>
            The Master Terms contain the terms and conditions generally
            applicable for your contractual relationship with CerTrack. This
            part of the EULA will apply to you in any case.
          </p>
          <p>B. Software Specific Terms</p>
          <p>
            The Software Specific Terms contain the terms and conditions that
            additionally apply to the use of: (i) software provided by CerTrack,
            whether installed on devices of the Customer or accessed via web
            browser, also including any applications (e.g. apps for mobile
            terminals), add-on components, customized settings and features, and
            all updates and Release Versions as herein below defined thereof
            (collectively “Software”), and (ii) servers for the establishment of
            encrypted connections (handshake) and for the forwarding of data
            packets (routing) in connection with the use of the Software
            (“Server Services”), as well as (iii) any further cloud-based
            services provided by CerTrack. The Software, Server Services and
            other cloud-based services provided by CerTrack are hereinafter
            collectively referred to as “Services”.
          </p>

          <p>C. Hardware Specific Terms</p>
          <p>
            The Hardware Specific Terms contain the terms and conditions that
            additionally apply to your purchase and/or lease of physical goods,
            including smart glasses, IoT Devices or similar items (“Hardware”)
            ……………………………………………
          </p>

          <div className="btn-link">
          <button onClick={() => navigate(-1)} className='btn'>Agree</button>
         
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TermsCondition;
