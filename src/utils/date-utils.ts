function pad (number: number) {
  if (number < 10) {
    return '0' + number
  }
  return number
}

export function formatAsUserDateHourMinute (date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())},
   ${pad(date.getHours())}:${pad(date.getMinutes())}`
}
