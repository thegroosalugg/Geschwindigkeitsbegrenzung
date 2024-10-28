function formatDate(ISOstring: string): string {
  const date        = new Date(ISOstring)
  const currentYear = new Date().getFullYear();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };

  // Add year to options if the date is not in the current year
  if (date.getFullYear() !== currentYear) {
    options.year = 'numeric';
  }

  return date.toLocaleDateString('en-GB', options);
}

export default formatDate;
