import React from "react";
import MaterialTable from "material-table";
import { GET_USERS } from "../graphql/User/GET_USERS";
import { useQuery, useMutation } from "react-apollo";
import { UPDATE_USER } from "../graphql/User/UPDATE_USER";
import { DELETE_USER } from "../graphql/User/DELETE_USER";
import { CREATE_USER } from "../graphql/User/CREATE_USER";
import LinearProgress from "@material-ui/core/LinearProgress";
import TablePagination from "@material-ui/core/TablePagination";

const columns = [
  // { title: "Id", field: "id", editable: "noAdd" },
  { title: "Email", field: "email", type: "email" },
  { title: "Name", field: "name" },
];

export const Table = ({ setId }) => {
  const { data, loading, refetch } = useQuery(GET_USERS, {
    variables: { limit: 100 },
  });

  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [createUser] = useMutation(CREATE_USER);

  if (loading)
    return (
      <div>
        <LinearProgress />
      </div>
    );

  const remoteData = data.users;

  return (
    <MaterialTable
      title="Users"
      columns={columns}
      data={remoteData}
      components={{
        Pagination: (props) => {
          return (
            <TablePagination {...props} rowsPerPageOptions={[10, 20, 30]} />
          );
        },
      }}
      onRowClick={(event, rowData) => {
        setId(rowData.id);
      }}
      editable={{
        onRowAdd: async (newData) => {
          const { email, name } = newData;
          await createUser({
            variables: { input: { email, name } },
          });
          await refetch();
        },
        onRowUpdate: async (newData, oldData) => {
          const { email, name } = newData;
          await updateUser({
            variables: { id: oldData.id, input: { email, name } },
          });
          await refetch();
        },
        onRowDelete: async (oldData) => {
          await deleteUser({ variables: { id: oldData.id } });
          await refetch();
        },
      }}
    />
  );
};
