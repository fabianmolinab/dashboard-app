
// Estas son expresiones regulares para realizar la validación
export const expresiones = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/ // 7 a 14 numeros.
}
