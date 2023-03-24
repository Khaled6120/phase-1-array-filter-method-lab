// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, initial) => {
    let size = initial.length
    return drivers.filter(driver => driver.slice(0, size) === initial)
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}