const apiURL = 'https://images-api.nasa.gov/asset/'
const key = 'iUW0etAqmcn0JS3KnhuCMrYS0xa6aEokDEca7nNf'
export const getData = (itemId: string) => {
    return fetch(`${apiURL}{${itemId}}&api_key=${key}`)
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