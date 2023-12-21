export const calculateAverage = (numbers: number[]) => {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / numbers.length;

  return average;
};

export const formatPrice = (price: string | number) => {
  const numericPrice =
    typeof price === 'string'
      ? parseFloat(price.replace(/[^0-9.-]+/g, ''))
      : Number(price);

  if (isNaN(numericPrice)) {
    return 'Invalid input';
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);

  return formattedPrice;
};

type SortDirection = 'asc' | 'desc';

export const sortByProperty = <T>(
  array: T[],
  property: keyof T,
  direction: SortDirection = 'asc'
): T[] => {
  const sortOrder = direction === 'desc' ? -1 : 1;

  return array.sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA < valueB) {
      return -1 * sortOrder;
    }
    if (valueA > valueB) {
      return 1 * sortOrder;
    }
    return 0;
  });
};
