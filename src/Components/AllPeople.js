import React from "react";
import Button from "../utils/Button";

function AllPeople() {
  return (
    <div className="px-44 flex flex-col justify-center items-center gap-4 py-20">
      <h1 className="text-xl font-bold">Start building your organization</h1>
      <p>
        Invite users to unlock team scheduling features starting as low as{" "}
        <strong>$12</strong> per user/mo.
      </p>
      <Button type="secondary" disabled={false}>
        Invite Users
      </Button>
    </div>
  );
}

export default AllPeople;
