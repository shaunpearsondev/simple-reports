import { Select } from "antd";

const options: any[] | undefined = [];
for (let i = 0; i < 100000; i++) {
  const label = `${i.toString(36)}${i}`;
  options.push({
    label: label,
    value: i,
    disabled: i === 10,
  });
}

export const Clients = (props: {paramName: string, onChange: (value:any, option:any)=> void}) => (
      <Select
        id={props.paramName}
        style={{ width: 120 }}
        onChange={props.onChange}
        options={options}
      ></Select>
);
