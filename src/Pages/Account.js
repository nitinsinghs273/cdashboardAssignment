import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router";
import Card from "../Components/Card";
import StickyButton from "../utils/StickyButton";

import Main from "../Components/Main";

function Account() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/account/allpeople");
  }, []);

  return (
    <div>
      <Main />{" "}
      <div>
        <Outlet />
        <StickyButton type="primary">Feedback</StickyButton>{" "}
      </div>{" "}
      <div className="mx-44 pt-5 border-t-2">
        {" "}
        <div className="px-16">
          <h3 className="font-medium pb-5">What can i do as a team?</h3>{" "}
          <div className="flex justify-between items-center">
            {" "}
            <Card src="RoundRobin.png" title="Round Robin Scheduling">
              Automatically assign meeting based on what makes the most sense
              for your team's goals-whether by availability, priority or equity.{" "}
            </Card>{" "}
            <Card src="management.png" title="Acess Powerful Management Tools">
              Get new and existing users up to speed and engaged with event type
              templates to make sure everyone's set up for efficient scheduling.
              all managed through one centralized billing solution.{" "}
            </Card>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <StickyButton type="secondary" subscript="2">
        Getting Started{" "}
      </StickyButton>
    </div>
  );
}

export default Account;
