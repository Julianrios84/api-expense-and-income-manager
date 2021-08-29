const httpError = (res, err) => {
  console.log(err)
  res.status(500)
  res.json({ message: 'Something happened!', error: err })
}

module.exports = { httpError }