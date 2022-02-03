import { Button, Table } from "antd";
import { useParams } from "react-router-dom";
import {Clients} from "./Clients"
enum ParamType {
  Client,
}
const report1 = [
  {
    id: "1",
    name: "Shaun",
    client: "Big White",
  },
  {
    id: "2",
    name: "Scott",
    client: "Protocol",
  },
];

const report2 = [
  {
    id: "1",
    name: "Robin",
    client: "Big White",
  },
  {
    id: "2",
    name: "Carol",
    client: "Protocol",
  },
];
const dataSource = [
  {
    params: [{ name: "clientId", type: ParamType.Client }],
    data: report1,
  },
  {
    params: [],
    data: report2,
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
    title: "Client",
    dataIndex: "client",
    key: "client",
  },
];
export default function Report() {
  let params = useParams();
  const reportId = parseInt(params.reportId ?? "");
  const index = reportId - 1
  const report = dataSource[index];
  let sqlParams:{ [name: string]: string } = {};
  
  return (
    <>
      <h2>Report ID: {reportId} </h2>
      {
        report.params.map((param) => {
          switch (param.type) {
            case ParamType.Client:
              return <Clients paramName={param.name} onChange={(a) => sqlParams[param.name] = a} />          
            default:
              return null;
          }
        })
      }
      <Button onClick={() => console.log(sqlParams)
    } >Click me</Button>
      <Table dataSource={report.data} columns={columns} />
    </>
  );
}
