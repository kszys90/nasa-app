const apiURL = 'https://images-api.nasa.gov/search?q='
// const key = 'iUW0etAqmcn0JS3KnhuCMrYS0xa6aEokDEca7nNf'
export const getData = (request: string) => {
  return fetch(`${apiURL}${request}`)
  .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw new Error(`${resp.status}`)
      })
      .catch(error => {
        throw (error)
      })
  }

export {}