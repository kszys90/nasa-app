const apiURL = 'https://images-api.nasa.gov'

export const getElement = (id: string) => {
    return fetch(`${apiURL}/asset/${id}`)
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