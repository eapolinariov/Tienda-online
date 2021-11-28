function success(res, message = '', status = 200) {
  res.status(status).send({
      error: false,
      status: status,
      body: message,
  })
}

function error(res, message = 'Internal Server Error', status = 500) {
  res.status(status).send({
      error: true,
      status: status,
      body: message,
  })
}

module.exports = {
  success,
  error
}