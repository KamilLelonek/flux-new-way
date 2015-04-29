export default routes => {
  let data = {};

  return Promise.all(
    routes
      .filter(route => route.handler.fetchData)
      .map(
        route => route.handler.fetchData()
        .then(response => data[route.name] = response)
    )
  ).then(() => data)
}
