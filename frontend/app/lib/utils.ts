import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
  value: number,
  locale: string = 'id-ID',
  currency: string = 'IDR',
): string {
  if (isNaN(value)) {
    throw new Error('value must be interger and valid')
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value)
}

export function formatDate(
  value: string,
  lang: string = 'en',
  dateStyle: 'short' | 'medium' | 'long' | 'full',
) {
  if (!value) return
  return new Intl.DateTimeFormat(lang, {
    dateStyle,
  }).format(new Date(value))
}
