import { Table } from "antd";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Link, Outlet } from "react-router-dom";

const dataSource = [
  {
    id: "1",
    name: "Report 1",
  },
  {
    id: "2",
    name: "Report 2",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: { id: any; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
        <Link to={`/reports/${record.id}`}>{record.name}</Link>
    ),
  },
];
export default function Report() {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <Outlet />
    </>
  );
}
