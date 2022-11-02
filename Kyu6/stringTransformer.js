function stringTransformer(str) {
 return str.split(' ')
                 .reverse()
                 .join(' ')
                 .split('')
                 .map((a) => {
                 return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase() 
                 }).join('')

}
