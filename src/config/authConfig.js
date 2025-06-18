// config/authConfig.js

// Carga variables de entorno con valores por defecto
export const PALABRA_SECRETA = process.env.PALABRA_SECRETA || 'clave_Secreta_para_el_restaurante_de_la_universidad'

export const expiresIn = process.env.EXPIRES_IN || '1h'

// Configuración de cookies, sin intentar leer objeto desde env (que es string)
export const cookieOptions = {
  httpOnly: process.env.COOKIE_HTTP_ONLY === 'true' || false,
  secure: process.env.NODE_ENV === 'production', // si quieres puedes usar env COOKIE_SECURE también
  sameSite: 'lax',
  maxAge: Number(process.env.COOKIE_MAX_AGE) || 1000 * 60 * 60 // default 1 hora en ms
}
