const apiURL = 'https://api.nasa.gov/planetary/apod'
const key = 'iUW0etAqmcn0JS3KnhuCMrYS0xa6aEokDEca7nNf'


export const getAPOTD = () => {
    return fetch(`${apiURL}?api_key=${key}`)
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