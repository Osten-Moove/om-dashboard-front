export type dataRow = {
  label: string;
  [key: string]: string | number;
};

export type Collection = Record<string, string>;

export type CurrencyFormat = {
  type: "currency";
  currency: string;
  minimumFractionDigits?: number;
};

export type NumberFormat = {
  type: "number";
};

export type PercentageFormat = {
  type: "percentage";
};

export type Format = CurrencyFormat | NumberFormat | PercentageFormat;