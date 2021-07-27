const chai = require('chai')
const assert = chai.assert
const testingFiles = require('../translated')
const AtoBtest = testingFiles.collection.AtoBtest
const BtoAtest = testingFiles.collection.BtoAtest
const highlighted = testingFiles.collection.highlighted

const Translator = require('../components/translator.js')
let t = new Translator()

suite('Unit Tests', () => {
  /** american to british translate tests **/
  test('Translate Mangoes are my favorite fruit. to British English', function (done) {
    assert.isString(t.americanToBritish(AtoBtest[0].text))
    assert.equal(t.americanToBritish(AtoBtest[0].text), AtoBtest[0].solution)
    done()
  })

  test('Translate I ate yogurt for breakfast. to British English', function (done) {
    assert.isString(t.americanToBritish(AtoBtest[1].text))
    assert.equal(t.americanToBritish(AtoBtest[1].text), AtoBtest[1].solution)
    done()
  })
  test(`Translate We had a party at my friend's condo. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[2].text))
    assert.equal(t.americanToBritish(AtoBtest[2].text), AtoBtest[2].solution)
    done()
  })
  test(`Translate Can you toss this in the trashcan for me? to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[3].text))
    assert.equal(t.americanToBritish(AtoBtest[3].text), AtoBtest[3].solution)
    done()
  })
  test(`Translate The parking lot was full. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[4].text))
    assert.equal(t.americanToBritish(AtoBtest[4].text), AtoBtest[4].solution)
    done()
  })

  test(`Translate Like a high tech Rube Goldberg machine. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[5].text))
    assert.equal(t.americanToBritish(AtoBtest[5].text), AtoBtest[5].solution)
    done()
  })

  test(`Translate To play hooky means to skip class or work. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[6].text))
    assert.equal(t.americanToBritish(AtoBtest[6].text), AtoBtest[6].solution)
    done()
  })

  test(`Translate No Mr. Bond, I expect you to die. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[7].text))
    assert.equal(t.americanToBritish(AtoBtest[7].text), AtoBtest[7].solution)
    done()
  })

  test(`Translate Dr. Grosh will see you now. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[8].text))
    assert.equal(t.americanToBritish(AtoBtest[8].text), AtoBtest[8].solution)
    done()
  })

  test(`Translate Lunch is at 12:15 today. to British English`, function (done) {
    assert.isString(t.americanToBritish(AtoBtest[9].text))
    assert.equal(t.americanToBritish(AtoBtest[9].text), AtoBtest[9].solution)
    done()
  })

  /** british to american translate tests **/
  test(`Translate We watched the footie match for a while. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[0].text))
    assert.equal(t.britishToAmerican(BtoAtest[0].text), BtoAtest[0].solution)
    done()
  })

  test(`Translate Paracetamol takes up to an hour to work. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[1].text))
    assert.equal(t.britishToAmerican(BtoAtest[1].text), BtoAtest[1].solution)
    done()
  })

  test(`Translate First, caramelise the onions. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[2].text))
    assert.equal(t.britishToAmerican(BtoAtest[2].text), BtoAtest[2].solution)
    done()
  })

  test(`Translate I spent the bank holiday at the funfair. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[3].text))
    assert.equal(t.britishToAmerican(BtoAtest[3].text), BtoAtest[3].solution)
    done()
  })

  test(`Translate I had a bicky then went to the chippy. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[4].text))
    assert.equal(t.britishToAmerican(BtoAtest[4].text), BtoAtest[4].solution)
    done()
  })

  test(`Translate I've just got bits and bobs in my bum bag. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[5].text))
    assert.equal(t.britishToAmerican(BtoAtest[5].text), BtoAtest[5].solution)
    done()
  })

  test(`Translate The car boot sale at Boxted Airfield was called off. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[6].text))
    assert.equal(t.britishToAmerican(BtoAtest[6].text), BtoAtest[6].solution)
    done()
  })

  test(`Translate Have you met Mrs Kalyani? to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[7].text))
    assert.equal(t.britishToAmerican(BtoAtest[7].text), BtoAtest[7].solution)
    done()
  })

  test(`Translate Prof Joyner of King's College, London. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[8].text))
    assert.equal(t.britishToAmerican(BtoAtest[8].text), BtoAtest[8].solution)
    done()
  })

  test(`Translate Tea time is usually around 4 or 4.30. to American English`, function (done) {
    assert.isString(t.britishToAmerican(BtoAtest[9].text))
    assert.equal(t.britishToAmerican(BtoAtest[9].text), BtoAtest[9].solution)
    done()
  })

  /** highlited tests **/

  test(`Highlight translation in Mangoes are my favorite fruit.`, function (done) {
    assert.isString(t.americanToBritish(highlighted[0].text))
    assert.equal(t.americanToBritish(highlighted[0].text), highlighted[0].hl)
    done()
  })

  test(`Highlight translation in I ate yogurt for breakfast.`, function (done) {
    assert.isString(t.americanToBritish(highlighted[1].text))
    assert.equal(t.americanToBritish(highlighted[1].text), highlighted[1].hl)
    done()
  })

  test(`Highlight translation in We watched the footie equal for a while.`, function (done) {
    assert.isString(t.britishToAmerican(highlighted[2].text))
    assert.equal(t.britishToAmerican(highlighted[2].text), highlighted[2].hl)
    done()
  })

  test(`Highlight translation in Paracetamol takes up to an hour to work.`, function (done) {
    assert.isString(t.britishToAmerican(highlighted[3].text))
    assert.equal(t.britishToAmerican(highlighted[3].text), highlighted[3].hl)
    done()
  })
})
