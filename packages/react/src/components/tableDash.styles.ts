import styled from "styled-components";

import { fonts } from "@osten-moove/tokens";

type TableContainerTheme = {
  $variant: "light" | "dark";
};

export const TableContainer = styled.table<TableContainerTheme>`
  width: 100%;
  min-width: 900px;

  font-family: ${fonts.default};

  table-layout: fixed;
  border: 1px solid #737373;
  background: ${(props) => (props.$variant === "light" ? "#fff" : "#262626")};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  text-align: center;

  overflow: hidden;

  th {
    color: ${(props) => (props.$variant === "light" ? "#000" : "#ffffff")};
  }

  td {
    color: ${(props) => (props.$variant === "light" ? "#000" : "#c8c8c8")};
  }

  th,
  td {
    padding: 12px;

    border-right: 2px solid;
    border-color: #737373;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;
  }

  th:nth-child(1) {
    width: 450px;
  }

  td:nth-child(1) {
    text-align: start;
    padding-left: 20px;
  }

  th:last-child {
    border-right-color: ${(props) =>
      props.$variant === "light" ? "#eaeafb" : "#0d0d0d"};
  }

  td:last-child {
    border-right-color: ${(props) =>
      props.$variant === "light" ? "#eaeafb" : "#0d0d0d"};
  }

  tr:nth-child(even) {
    background-color: ${(props) =>
      props.$variant === "light" ? "#E6E6FA" : "#1e1e1e"};
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 8px;
    }
    th,
    td {
      white-space: normal;
    }
  }
`;
