import { Format } from '../types';

export function format(value: number, format: Format) {

  const numericValue = typeof value === 'number' ? value : parseFloat(value as string) || 0;
  switch (format.type) {
    case 'number':
      return String(numericValue)
    case 'currency':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: format.currency,
        minimumFractionDigits: format.minimumFractionDigits,
      }).format(numericValue);
    case 'percentage':
      return `${value}%`
    default:
      return String(value)
  }

}