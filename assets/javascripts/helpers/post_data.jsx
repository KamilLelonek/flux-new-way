export default ((endpoint, body) =>
  fetch(environment.HOST + endpoint, {
    method: 'post',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).catch(exception => {
    console.log('request failed', exception)
  })
)
