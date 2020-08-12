import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "react-apollo";
import { GET_USER } from "../graphql/User/GET_USER";
import LinearProgress from "@material-ui/core/LinearProgress";

export const User = ({ id }) => {
  const { data, loading } = useQuery(GET_USER, {
    variables: { id },
  });

  if (!id) {
    return <h2>выберите пользователя</h2>;
  }

  if (loading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  const user = data.user;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2">
          User details
        </Typography>

        <Typography>ID: {user.id}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Name: {user.name}</Typography>
      </CardContent>
    </Card>
  );
};
