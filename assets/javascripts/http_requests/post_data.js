export default ((endpoint, body) =>
  fetch(environment.HOST + endpoint, {
    method: 'post',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
)
