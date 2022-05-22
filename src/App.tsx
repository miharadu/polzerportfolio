import React from "react";
// import logo from './logo.svg';
import { ReactComponent as MapIcon } from "./location.svg";
import { ReactComponent as MailIcon } from "./mail.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as PhoneIcon } from "./phone.svg";

import "./App.css";

enum menuItem {
  experienceVisible = "experience",
  educationVisible = "education",
  contactVisible = "contact",
}

function App() {
  const [menuItemVisible, setMenuItemVisible] = React.useState<menuItem>(
    menuItem.experienceVisible
  );

  const showSection = (section: string) => {
    if (section === "experience") {
      setMenuItemVisible(menuItem.experienceVisible);
    } else if (section === "education") {
      setMenuItemVisible(menuItem.educationVisible);
    } else {
      setMenuItemVisible(menuItem.contactVisible);
    }
  };

  return (
    <div className="app">
      {/* header */}
      <div className="header">
        <div className="name">
          Philipp
          <span>Polzer</span>
        </div>
        <nav className="menu">
          <div
            className={
              menuItemVisible === menuItem.experienceVisible
                ? "menuItem menuItemActive"
                : "menuItem"
            }
            onClick={() => showSection("experience")}
          >
            Experience
          </div>
          <div
            className={
              menuItemVisible === menuItem.educationVisible
                ? "menuItem menuItemActive"
                : "menuItem"
            }
            onClick={() => showSection("education")}
          >
            Education
          </div>
          <div
            className={
              menuItemVisible === menuItem.contactVisible
                ? "menuItem menuItemActive"
                : "menuItem"
            }
            onClick={() => showSection("contact")}
          >
            Contact
          </div>
        </nav>
      </div>

      {/* sectionShowed */}
      <div className="mainContainer">
        {menuItemVisible === menuItem.experienceVisible && (
          <>
            <p>
              Experienced IT and VoIP Technician with a demonstrated history of
              working in the telecommunications industry. Skilled in VoIP PBX
              systems, Cloud Administration, Networking, Security, DNS
              Administration, Windows Server administration, strong
              communication skills. Currently attending Western Governors
              University. On my way to achieve the following certifications:
              Amazon AWS Cloud Practitioner, Amazon AWS SysOps
              Administration-Associate, LPI Linux Essentials, ITIL® Foundation
              Certification, CompTIA A+, CompTIA Cloud+, CompTIA Network+,
              CompTIA Project+, CompTIA Security+.
            </p>
            <p>
              Proven ability to work effectively in fast paced and demanding
              environments.
            </p>
            <h2> SKILLS </h2>
            <ul className="noPaddingSkills">
              <li className="resumeElemSkills">
                <span>Networking</span>
                <span>
                  Cisco IOS<br></br>Working with various switches<br></br>
                  Routers
                  <br></br>Servers, firewalls (Sonicwall, Ubiquity)<br></br>
                  Configuring networks and networking devices
                </span>
              </li>
              <li className="resumeElemSkills">
                <span>Applications</span>
                <span>
                  Asterisk PBX<br></br>Active Directory<br></br>VMware<br></br>
                  Apache Web Server<br></br>
                  IntelliJ IDEA<br></br>FTP clients<br></br>Citrix<br></br>CRM
                  <br></br>CMS<br></br>Office365
                </span>
              </li>
              <li className="resumeElemSkills">
                <span>Programming</span>
                <span>
                  Java<br></br>C++<br></br>HTML/CSS<br></br>JavaScript<br></br>
                  Bash
                  <br></br>Python
                </span>
              </li>
              <li className="resumeElemSkills">
                <span>Operating Systems</span>
                <span>
                  Windows (7, 8, 10, 11)<br></br>Linux<br></br>Windows Server
                </span>
              </li>

              <li className="resumeElemSkills">
                <span>Customer Service</span>
                <span>
                  4+ years' experience using phone, mail and face-to-face
                  communication to troubleshoot technical issues
                </span>
              </li>
              <li className="resumeElemSkills">
                <span>Languages</span>
                <span>
                  English (fluent)<br></br>German (fluent)<br></br>Spanish (very
                  good command)
                </span>
              </li>
            </ul>

            {/* ///////// */}
            <h2> EXPERIENCE </h2>
            <ul>
              <li className="resumeElem">
                <span>
                  March 2020 - <br></br>current
                </span>
                <span>
                  VoIP TECHNICIAN<br></br> XBlue Networks<br></br> (Phoenix, AZ)
                </span>
                <span>
                  Solid networking knowledge relating to SIP, DHCP, DNS, FTP,
                  firewalls, security tools and network architecture<br></br>
                  Advanced knowledge of IVR routing schemes, call flow<br></br>
                  The ability to trace and debug SIP protocol
                </span>
              </li>
              <li className="resumeElem">
                <span>
                  July 2019 - <br></br>March 2020
                </span>
                <span>
                  TECHNICAL SUPPORT SPECIALIST <br></br>Advanced Technology
                  Services
                  <br></br>
                  (Palm City, Florida)
                </span>
                <span>
                  Bilingual technical support (English and German) for
                  international and various large US companies<br></br>
                  System and Network Administration<br></br>
                  Active Directory<br></br>
                  Windows Server<br></br>
                  Virtualization (VMWare, Citrix)<br></br>
                  Remote Support<br></br>
                  Troubleshooting<br></br>
                  AS400 systems<br></br>
                  Critical systems monitoring<br></br>
                  Escalation to on-site personnel in case of an outage following
                  strict incident management procedures
                </span>
              </li>
              <li className="resumeElem">
                <span>
                  October 2018 - <br></br>April 2019
                </span>
                <span>
                  CABLE TECHNICIAN<br></br> A1 Telekom Austria <br></br>(Vienna,
                  Austria)
                </span>
                <span>
                  Installation, testing and removal of Ethernet and Fiber Optic
                  cables in one of Austria's largest and most modern datacenters
                </span>
              </li>
              <li className="resumeElem">
                <span>
                  February 2017 -<br></br> October 2018
                </span>
                <span>
                  TECHNICAL SUPPORT TECHNICIAN<br></br>A1 Telekom Austria
                  <br></br>
                  (Vienna, Austria)
                </span>
                <span>
                  1st and 2nd tier technical support for small and large
                  business customers, including sales and billing
                </span>
              </li>
            </ul>
          </>
        )}

        {/* /////////////// */}

        {menuItemVisible === menuItem.educationVisible && (
          <>
            <p>
              Currently attending Western Governors University. On my way to
              achieve the following certifications: Amazon AWS Cloud
              Practitioner, Amazon AWS SysOps Administration-Associate, LPI
              Linux Essentials, ITIL® Foundation Certification, CompTIA A+,
              CompTIA Cloud+, CompTIA Network+, CompTIA Project+, CompTIA
              Security+.
            </p>{" "}
            <h2> CERTIFICATIONS </h2>
            <ul>
              <li className="resumeElem">
                <span>In progress</span>
                <span>CompTIA CySA+ ce Certification</span>
                <span>
                  Earners of the CompTIA CySA+ certification have the skills,
                  knowledge, and ability to address security analytics,
                  intrusion detection and response in order to identify attacks
                  and defend networks. CompTIA CySA+ analysts have demonstrated
                  the ability to perform data analysis and interpret the results
                  to identify vulnerabilities, threats and risks to an
                  organization and the skills to secure and protect the systems.
                </span>
              </li>
              <li className="resumeElem">
                <span>April 27, 2021</span>
                <span>CompTIA A+ ce Certification</span>
                <span>
                  Earners of the CompTIA A+ certification are proven problem
                  solvers who are able to perform critical IT support tasks
                  including device configuration, data backup and recovery, and
                  operating system configuration. CompTIA A+ certified
                  professionals have demonstrated baseline security skills for
                  IT support roles and are able to detect and remove malware,
                  address privacy concerns, and troubleshoot core service
                  challenges.
                </span>
              </li>
              <li className="resumeElem">
                <span>August 09, 2021</span>
                <span>CompTIA Network+ ce Certification</span>
                <span>
                  Earners of the CompTIA Network+ certification have the skills
                  needed to troubleshoot, configure, and manage wired and
                  wireless networks found in companies around the world. CompTIA
                  Network+ professionals have demonstrated the ability to design
                  and implement functional networks, configure, manage, and
                  maintain essential network devices, implement network
                  security, and troubleshoot network problems.
                </span>
              </li>
              <li className="resumeElem">
                <span>August 09, 2021</span>
                <span>
                  CompTIA IT Operations Specialist - CIOS Stackable
                  Certification
                </span>
                <span>
                  Earners of the CompTIA IT Operations Specialist (CIOS)
                  certification have the ability to manage the flow of a
                  workplace and optimize day-to-day activities. These IT
                  operations specialists have demonstrated the ability to
                  analyze business operations and identify customer needs.
                </span>
              </li>
              <li className="resumeElem">
                <span>July 4th, 2021</span>
                <span>3XC Basic Certified Engineer</span>
                <span>
                  The 3CX Basic Certification course consists of eight modules
                  all of which are fundamental to be able to correctly setup and
                  configure your PBX. In a nutshell, they cover the basic
                  concepts of getting 3CX up and running as well as basic
                  troubleshooting techniques and will ultimately prepare you for
                  the next stage; the 3CX Intermediate Certification. Each
                  module provides you with ample material to ensure that you can
                  easily pass the Basic exam from the first try.
                </span>
              </li>
            </ul>
            {/* /////// */}
            <h2> EDUCATION </h2>
            <ul>
              <li className="resumeElem">
                <span>
                  Ongoing <br></br> (from 2020)
                </span>
                <span>
                  BACHELOR CLOUD COMPUTING <br></br>Western Governors University
                </span>
              </li>
              <li className="resumeElem">
                <span>2011</span>
                <span>
                  HIGH SCHOOL DIPLOMA <br></br>Derby High School<br></br>{" "}
                  (Derby, KS)
                </span>
              </li>
            </ul>
          </>
        )}
        {/* ///////// */}

        {menuItemVisible === menuItem.contactVisible && (
          <>
            <p>
              Have a project for me, or just want to say hi? Don't hesitate to
              drop me a line!
            </p>
            <ul className="noPaddingSkills">
              <li className="contact">
                <span>
                  <MailIcon />
                </span>
                <span>
                  <a
                    href={
                      "mai" + atob("bHRvOnBoaWxpcHAucG9semVyQGhvdG1haWwuY29t")
                    }
                  >
                    <span className="codeDirectionReversed">
                      .liamtoh@rezlop.ppilihp
                    </span>
                    <span className="hideThisText">[REMOVETHIS]</span>com
                  </a>
                </span>
              </li>
              <li className="contact">
                <span>
                  <PhoneIcon />
                </span>
                <span>
                  <span className="codeDirectionReversed">
                    7465 <span className="hideThisText">[REMOVETHIS]</span> 302
                    (932)
                  </span>
                </span>
              </li>
              <li className="contact">
                <span>
                  <LinkedInIcon />
                </span>
                <a href="https://www.linkedin.com/in/philipp-polzer/">
                  linkedin.com/in/philipp-polzer/
                </a>
              </li>
              <li className="contact">
                <span>
                  <MapIcon />
                </span>
                <span>Tampa, FL</span>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
