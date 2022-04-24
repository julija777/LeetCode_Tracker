
var UndergroundSystem = function () {
  this.travel = new Map()
  this.record = new Map()
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.travel.set(id, [stationName, t])
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const from = this.travel.get(id)[0]
  const to = stationName
  const interval = t - this.travel.get(id)[1]

  if (!this.record.has(from)) {
    this.record.set(from, new Map())
  }
  if (!this.record.get(from).has(to)) {
    this.record.get(from).set(to, [])
  }
  this.record.get(from).get(to).push(interval)

  this.travel.delete(id)
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const arr = this.record.get(startStation).get(endStation)
  return arr.reduce((acc, cur) => acc + cur) / arr.length
}