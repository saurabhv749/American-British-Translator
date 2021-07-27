let AtoBSpellings = require('./american-to-british-spelling')
let americanOnly = require('./american-only')
let britishonly = require('./british-only')

/** dictionaries [[key:value],......] **/
//  this is the starting point
let british = Object.entries(britishonly)
let american = Object.entries(americanOnly)
let spelling = Object.entries(AtoBSpellings)

class Translator {
  /** highlight replaced **/

  replace(str, replacement, index, len) {
    let s =
      str.slice(0, index) +
      `<span class="highlight">${replacement}</span>` +
      str.slice(index + len)
    return s
  }
  /** replace every word using dictionary (recursive)  **/

  findReplacementAndReplace(line, change, dict) {
    for (let d of dict) {
      let lower = line.toLowerCase()
      let i = change == 'a2b' ? 0 : 1
      let j = change == 'a2b' ? 1 : 0
      let regex = new RegExp(`${d[i].toLowerCase()} | ${d[i].toLowerCase()}.`)

      if (lower.match(regex)) {
        let index = lower.match(d[i].toLowerCase()).index
        let temp = this.replace(line, d[j], index, d[i].length)
        if (this.findReplacementAndReplace(temp, change, dict) === undefined)
          return temp
        return this.findReplacementAndReplace(temp, change, dict)
      }
    }

    return undefined
  }

  britishDictionary(input, change, britishDict) {
    for (let d of britishDict) {
      let lower = input.toLowerCase()
      let i = change == 'a2b' ? 1 : 0
      let j = change == 'a2b' ? 0 : 1
      let regex = new RegExp(
        `${d[i].toLowerCase()} | ${d[i].toLowerCase()}[.]?$`
      )
      if (lower.match(regex)) {
        let index = lower.match(d[i].toLowerCase()).index

        let temp = this.replace(input, d[j], index, d[i].length)

        if (this.britishDictionary(temp, change, britishDict) === undefined)
          return temp
        return this.britishDictionary(temp, change, britishDict)
      }
    }
    return undefined
  }

  changeTitle(input, local) {
    const lower = input.toLowerCase()
    const titles = ['Mrs', 'Ms', 'Mr', 'Mx', 'Dr', 'Prof']
    for (let t of titles) {
      let regex = new RegExp(`${t.toLocaleLowerCase()}[\s]?.`)
      let present = lower.match(regex)
      if (present) {
        let index = present.index
        let el = present[0]
        if (local == 'a2b' && el[el.length - 1] == '.')
          return `${input.slice(
            0,
            index
          )}<span class="highlight">${t}</span> ${input.slice(
            index + el.length + 1
          )}`
        else if (local == 'b2a' && el[el.length - 1] != '.')
          return `${input.slice(
            0,
            index
          )}<span class="highlight">${t}.</span> ${input.slice(
            index + el.length
          )}`
      }
    }
    return input
  }

  changeDate(input, local) {
    let ministring = input.slice(0, input.length - 1)
    let present = ministring.match(/\d+[.:]\d+/)
    if (present) {
      let index = present.index
      let time = present[0]
      let arrDot = time.split(/[.]/)
      let arrColon = time.split(/[:]/)
      if (local == 'a2b' && arrColon.length == 2)
        return `${input.slice(0, index)}<span class="highlight">${
          arrColon[0]
        }.${arrColon[1]}</span>${input.slice(index + time.length)}`
      else if (local == 'b2a' && arrDot.length == 2)
        return `${input.slice(0, index)}<span class="highlight">${arrDot[0]}:${
          arrDot[1]
        }</span>${input.slice(index + time.length)}`
    }
    return input
  }

  americanToBritish(line) {
    /** modifiying date **/
    line = this.changeDate(line, 'a2b')

    /** modifiying title **/
    line = this.changeTitle(line, 'a2b')

    /** searching in each dictionary  **/
    let spl = this.findReplacementAndReplace(line, 'a2b', spelling)
    if (spl) line = spl
    let am = this.findReplacementAndReplace(line, 'a2b', american)
    if (am) line = am
    let b = this.britishDictionary(line, 'a2b', british)
    if (b) line = b

    return line
  }
  britishToAmerican(line) {
    /** modifiying date **/
    line = this.changeDate(line, 'b2a')

    /** modifiying title **/
    line = this.changeTitle(line, 'b2a')

    /** searching in each dictionary  **/
    let b = this.britishDictionary(line, 'b2a', british)
    if (b) line = b
    let spl = this.findReplacementAndReplace(line, 'b2a', spelling)
    if (spl) line = spl
    let am = this.findReplacementAndReplace(line, 'b2a', american)
    if (am) line = am

    return line
  }
}

module.exports = Translator
