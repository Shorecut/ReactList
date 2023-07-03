import React from "react";
import Table from "react-bootstrap/Table";

const SectionList = ({ list }) => {
  return (
    <div>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.surname}</td>
            <td>{list.age}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SectionList;
