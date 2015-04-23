export default (endpoint =>
  fetch(environment.HOST + endpoint)
    .then(response => {
      return response.json()
    })
    .catch(exception => {
      console.log('parsing failed', exception)
    })
)
