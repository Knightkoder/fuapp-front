export function priceFormatter(price: number, isYearly: boolean): string {
  return isYearly ? `$${price}/yr` : `$${(price)}/mo`;
}

export const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const emailRegex = /(\w\.?)+@[\w\.-]+\.\w{2,}/;
export const phoneNumberRegex = /\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/;

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  // Intl.DateTimeFormatOptions: es una interfaz en JavaScript que representa las opciones de formato utilizadas para formatear fechas y horas
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es", options);
};