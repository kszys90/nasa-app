const apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='
const key = 'iUW0etAqmcn0JS3KnhuCMrYS0xa6aEokDEca7nNf'

export const getMarsData = (sol: string) => {
  return fetch(`${apiURL}${sol}&api_key=${key}`)
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

export default getMarsData