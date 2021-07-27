const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const server = require('../server.js')
let testingFiles = require('../translated')
let a2bTest = testingFiles.collection.AtoBtest
let b2aTest = testingFiles.collection.BtoAtest
chai.use(chaiHttp)

suite('Functional Tests', () => {
  test('Translation with text and locale fields: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .type('form')
      .send({ locale: 'american-to-british', text: a2bTest[0].text })
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.property(res.body, 'text')
        assert.property(res.body, 'translation')
        assert.equal(res.body.text, a2bTest[0].text)
        assert.equal(res.body.translation, a2bTest[0].solution)
        done()
      })
  })

  test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .type('form')
      .send({ locale: 'someInvalidLocale', text: a2bTest[0].text })
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.property(res.body, 'error')
        assert.equal(res.body.error, 'Invalid value for locale field')
        done()
      })
  })
  test('Translation with missing text field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .type('form')
      .send({ locale: 'someInvalidLocale' })
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.property(res.body, 'error')
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })
  test('Translation with missing locale field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: a2bTest[0].text })
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.property(res.body, 'error')
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })
  test('Translation with empty text: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: '', locale: 'american-to-british' })
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.property(res.body, 'error')
        assert.equal(res.body.error, 'No text to translate')
        done()
      })
  })

  test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .type('form')
      .send({ text: b2aTest[0].text, locale: 'american-to-british' })
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.property(res.body, 'text')
        assert.property(res.body, 'translation')
        assert.equal(res.body.text, b2aTest[0].text)
        assert.equal(res.body.translation, 'Everything looks good to me!')
        done()
      })
  })
})
