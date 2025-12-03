import React from "react";
import JoinOurTeam from "../JoinOurTeam/JoinOurTeam";
import "./Team.css";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/images/jane.jpg",
  },
  {
    name: "Michael Smith",
    role: "Operations Manager",
    image: "/images/michael.jpg",
  },
  {
    name: "Ava Johnson",
    role: "Client Coordinator",
    image:
      "https://static.wixstatic.com/media/e95f1d_c75b4a8ebe4e40818d2d1a6f2e32410f~mv2.jpg/v1/fill/w_336,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/BRISTOL.jpg",
  },
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/images/jane.jpg",
  },
  {
    name: "Michael Smith",
    role: "Operations Manager",
    image: "/images/michael.jpg",
  },
  {
    name: "Ava Johnson",
    role: "Client Coordinator",
    image: "/images/ava.jpg",
  },
];

export default function Team() {
  return (
    <>
      <section className="team-section">
        <h1 className="team-title">Our Team</h1>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />

              <h2 className="team-name">{member.name}</h2>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <JoinOurTeam />
    </>
  );
}
