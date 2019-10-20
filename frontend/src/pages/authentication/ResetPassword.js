import React from "react";
import ResetPasswordDivider from "../../components/ResetPasswordDivider.js";
import { Grid } from "semantic-ui-react";

const ResetPasswordForm = () => (
  <Grid style={{ height: "100vh" }} textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: "70%" }}>
      <ResetPasswordDivider />
    </Grid.Column>
  </Grid>
);

export default ResetPasswordForm;
