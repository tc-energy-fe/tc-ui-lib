export function currency (value, decimals) {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) {
    return '-'
  }
  value = Number(value)
  if (!isFinite(value) || !value) return 0
  return Number(value.toFixed(decimals ?? 2))
}

export function miss (value) {
  return value !== undefined && value !== null ? value : '-'
}
