export function format(value: number, format: any[]) {

  const numericValue = typeof value === 'number' ? value : parseFloat(value as string) || 0;
  switch (format[0].type) {
    case 'number':
      return String(numericValue)
    case 'currency':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: format[0].currency,
        minimumFractionDigits: format[0].minimumFractionDigits,
      }).format(numericValue);
    case 'percentage':
      return `${value}%`
    default:
      return String(value)
  }

}