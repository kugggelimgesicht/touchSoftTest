const capitalizeString = (str) => {
    return string[0].toUpperCase() + str.slice(1).toLowerCase()
}

const sayHello = (name) => {
   return name === 'Mark'? `Hi, ${name}` : `Hello, ${name}!`
}

const filterByLength = (arr, n) => {
    return arr.filter(i => i.length <= n)
}