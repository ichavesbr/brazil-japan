import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Concatena e mescla classes do Tailwind de forma inteligente,
 * evitando conflitos de utilitários (ex: 'p-2' e 'p-4' -> 'p-4').
 * @param inputs - Uma lista de valores de classe (strings, objetos, arrays).
 * @returns Uma string de classes mescladas.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
