import React from "react";
import "./Style.css";
import { ReactComponent as Corner } from "../../assets/corner.svg";

function Quote() {
  return (
    <p class="quote">
      <span className="small_icon">“</span>I always observe the people who pass
      by when I ride an escalator. I'll never see most of them again, so I
      imagine a lot of things about their lives... about the day ahead of them.
      <span className="kojima">Hideo Kojima</span>
      <div className="corner">
        <Corner />
      </div>
    </p>
  );
}

export default Quote;
