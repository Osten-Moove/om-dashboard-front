import { TableContainer } from "./tableDash.styles";

type DataRow<T extends Array<string>> = {
  [key in T[number]]: number | string;
};

type TableDashProps<T extends Array<string>> = {
  headers: T;
  dataBody: DataRow<T>[];
  variant: "light" | "dark";
};

export function TableDash({
  headers,
  dataBody,
  variant = "light",
}: TableDashProps<string[]>) {
  return (
    <TableContainer className="tableDashContainer" $variant={variant}>
      <tr>
        {headers.map((col) => {
          return <th key={col}>{col}</th>;
        })}
      </tr>

      {dataBody.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {headers.map((header, headerIndex) => {
            return <td key={headerIndex}>{row[header]}</td>;
          })}
        </tr>
      ))}
    </TableContainer>
  );
}
