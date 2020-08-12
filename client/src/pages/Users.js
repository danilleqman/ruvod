import React, { useState } from "react";

import { Table } from "../components/Table";
import { User } from "../components/User";
import Grid from "@material-ui/core/Grid";

export const Users = () => {
  const [id, setId] = useState();
  let content = id ? (
    <>
      <Grid item md={9} sm={12}>
        <Table setId={setId} />
      </Grid>{" "}
      <Grid item md={3} sm={12}>
        <User id={id} />
      </Grid>
    </>
  ) : (
    <>
      <Grid item xs={12}>
        <Table setId={setId} />
      </Grid>
      <Grid item xs={12}>
        to view additional information, click on the row
      </Grid>
    </>
  );

  return (
    <div>
      <Grid container spacing={3}>
        {content}
      </Grid>
    </div>
  );
};
