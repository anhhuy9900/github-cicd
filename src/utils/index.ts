export function toLowerCase(str: string = ""): string | undefined {
  return str.toLowerCase()
}

export function toUppercase(str: string = ""): string | undefined {
  return str.toUpperCase()
}

export function convertArrayToString(arr: unknown[] | any) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error("Invalid param type of the function")
  }

  return JSON.stringify(arr)
}
