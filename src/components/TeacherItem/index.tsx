import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/61950037?s=460&u=7ac31ef71a58643743b786080ea3d37aea2e99d2&v=4"
          alt="MUHAMMAD MANNIR"
        />
        <div>
          <strong>MUHAMMAD MANNIR</strong>
          <span>AHMAD</span>
        </div>
      </header>

      <p>
        MANNIR e_SYSTEMS NIGERIA LIMITED,TEAM WORK IS THE STRENGTH.
        <br />
        <br />
        We have developed comprehensive and innovative solutions for a wide
        variety of business,while we develop system our focus is on customer"s
        need.
      </p>

      <footer>
        <p>
          price/Other Name
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contact us here" />
          Contact us here
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
