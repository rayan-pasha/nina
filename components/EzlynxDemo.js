"use client";

import { useRef, useState } from "react";

const STATES = [
  {
    message: "Start by selecting the policy type. Choose Home and Auto.",
    value: "Choose a policy",
    button: "Show me the next step",
  },
  {
    message:
      "Good. Next, confirm the effective date and enter the customer risk information.",
    value: "Home and Auto",
    button: "Continue the walkthrough",
  },
  {
    message:
      "The quote setup is ready. Review the information before comparing carrier results.",
    value: "Home and Auto",
    button: "Start again",
  },
];

export default function EzlynxDemo() {
  const [step, setStep] = useState(0);
  const fieldRef = useRef(null);
  const state = STATES[step];

  function next() {
    setStep((s) => (s + 1) % STATES.length);
    fieldRef.current?.animate(
      [
        { boxShadow: "0 0 0 5px rgba(59,130,246,.12)" },
        { boxShadow: "0 0 0 11px rgba(59,130,246,.04)" },
        { boxShadow: "0 0 0 5px rgba(59,130,246,.12)" },
      ],
      { duration: 600, easing: "ease-out" },
    );
  }

  return (
    <div className="product-stage reveal" id="demo">
      <div className="browser-bar">
        <div className="browser-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>EZLynx workspace</span>
        <span className="secure-label">Secure session</span>
      </div>
      <div className="workspace-layout">
        <aside className="mock-sidebar" aria-label="Example EZLynx navigation">
          <div className="mock-logo">E</div>
          <span className="side-line active"></span>
          <span className="side-line"></span>
          <span className="side-line"></span>
          <span className="side-line short"></span>
        </aside>
        <div className="mock-workspace">
          <div className="mock-title-row">
            <div>
              <span className="label-line"></span>
              <span className="title-line"></span>
            </div>
            <span className="mock-action"></span>
          </div>
          <div className="form-grid">
            <div className="field">
              <span>Customer</span>
              <strong>Jordan Lee</strong>
            </div>
            <div className="field spotlight" ref={fieldRef}>
              <span>Policy type</span>
              <strong>{state.value}</strong>
            </div>
            <div className="field">
              <span>Effective date</span>
              <strong>Today</strong>
            </div>
            <div className="field">
              <span>Assigned producer</span>
              <strong>Agency team</strong>
            </div>
          </div>
          <div className="mock-panel">
            <span className="panel-line wide"></span>
            <span className="panel-line"></span>
            <span className="panel-line medium"></span>
          </div>
        </div>
        <aside className="agenq-panel" aria-live="polite">
          <div className="agenq-panel-head">
            <strong>AgenQ</strong>
            <span aria-hidden="true">×</span>
          </div>
          <div className="conversation">
            <div className="user-bubble">
              How do I start a home and auto quote?
            </div>
            <div className="agent-bubble">{state.message}</div>
            <button className="next-step" type="button" onClick={next}>
              {state.button}
            </button>
          </div>
          <div className="chat-input">
            Ask AgenQ{" "}
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m4 4 16 8-16 8 3-8Z" />
                <path d="M7 12h13" />
              </svg>
            </span>
          </div>
        </aside>
      </div>
      <p className="illustration-note">Illustrative AgenQ walkthrough</p>
    </div>
  );
}
