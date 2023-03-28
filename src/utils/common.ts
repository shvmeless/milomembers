// FUNCTION
export function classes (...styles: Array<string | boolean | null | undefined>): string {

  const classes = styles.filter((value) => {
    return (typeof value === 'string')
  })

  return classes.join(' ')

}
