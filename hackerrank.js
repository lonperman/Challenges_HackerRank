/* const Matriz  = [[11,2,4],[4,5,6],[10,8,-12]]



function suma(arg){
    let n = arg.length
    var DiagIzq = 0
    var DiagDer = 0

    for (let x = 0; x < arg.length; x++) {
        for (let y = 0; y < arg[x].length; y++) {
            if(x === y){
                DiagIzq += arg[x][y]
            }
            if(x + y === n - 1){
                DiagDer += arg[x][y]
            } 
            
        }
        
    }

    return Math.abs(DiagIzq - DiagDer)
}

console.log(suma(Matriz))
 */


//////////////////////////

/* const arg = [1,1,0,-1,-1]


function PlusMinus(arr){

    let n = arr.length
    let pos = 0
    let neg = 0
    let cero = 0
    

    arr.forEach((element, index) => {
        if(arr[index] === 0){
            cero += 1
        }
        if(arr[index] > 0){
            pos += 1
        }
        if(arr[index] < 0){
            neg += 1
        }
    })

    let result = [(pos/n).toFixed(6),(neg/n).toFixed(6),(cero/n).toFixed(6)]

    result.forEach(function(numero) {
        console.log(numero)
    })

}


PlusMinus(arg) */


/* function staircase(n) {
    let arg = ''

    for (let x = 1; x <= n; x++) {
        
        for (let y = n - 1; y >= x; y--) {
            arg += ' '
            
        }

        for (let n = 1; n <= x; n++) {
            arg += '#'
        }

        arg += '\n'
        
    }
    console.log(arg)
}

staircase(6) */

//////////////////////////////////////////////////////////////////////////////////////////////

/* let arg = [7,3,5,1,9]


function miniMaxSum(arr){
    let sum = arr.reduce((a ,b) => a + b)
    const min = sum - Math.max(...arr)
    const max = sum - Math.min(...arr)
    console.log(min , max)
}

miniMaxSum(arg)
 */

/////////////////////////////////////////////////////////////////////////////////

/* const arg = [3,2,1,3,4,3,2,3,4,1,2,4]

function birthdayCakeCandles(candles) {
    let Big_candle = Math.max(...candles)
    let cantidad = 0

    candles.forEach((element, index) => {
        if(Big_candle == candles[index]){
            cantidad += 1
        }
    });

    return cantidad
}

console.log(birthdayCakeCandles(arg)) */

/////////////////////////////////////////////////////////////////////////////
/* function timeConversion(s) {
    const arr = s.slice(0,8).split(':')
    arr[0] = (s.indexOf('PM') > -1) ?
             (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
            (arr[0] == 12 ? '00' : arr[0]);
    return arr.join(':')
} */

////////////////////////////////////////////////////////////////////////////////////////////////
/* const grades = [73,67,38,33]

function gradingStudents(grades) {
    const min = 38
    let output = []


    grades.forEach((element,index) => {
        if(grades[index] >= min){
            let modulo = grades[index] % 5
            if(modulo === 3){
                output.push(grades[index] + 2)
            }
             else if(modulo === 4){
                output.push(grades[index] + 1)
            } else {
                output.push(grades[index])
            }
        } else {
            output.push(grades[index])
        }
    })
    
    return output
}

console.log(gradingStudents(grades)) */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* const apple = [2,3,-4,2,3,-4,2,3,-4]
const orange = [3,-2,-4,3,-2,-4,3,-2,-4]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let count_apple = 0
    let count_orange = 0
    const result_apple = []
    const result_orange = []
    let length_max = apples.length > oranges.length ? apples.slice() : oranges.slice()

    if (apples.length === oranges.length){
        apples.forEach((element, index) => {
            result_apple.push(a + apples[index])
            result_orange.push(b + oranges[index]) 
        });
    } else {
        apples.forEach((element, index) => {
            result_apple.push(a + apples[index])
        });

        oranges.forEach((element, index) => {
            result_orange.push(b + oranges[index]) 
        });
    }

    length_max.forEach((element, index) => {
        if (((result_apple[index] >= s) && (result_apple[index]<= t)) && 
        ((result_orange[index] >= s) && (result_orange[index] <= t))){
            count_apple += 1
            count_orange += 1
        } else if ((result_apple[index] >= s) && (result_apple[index]<= t)){
            count_apple += 1
        } else if ((result_orange[index] >= s) && (result_orange[index] <= t)){
            count_orange += 1
        }
    })
   
    const result = [count_apple,count_orange]

    result.map(function(element){
        console.log(element)
    })

}

countApplesAndOranges(7, 10, 4, 12, apple, orange)  */


/* function kangaroo(x1, v1, x2, v2){
    let h = x2 - x1
    
    if ((v1 > v2) && ((h % (v1 - v2)) == 0)){
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log(kangaroo(0,3,4,2)) */


/////////////////////////////////////////////////////////////
/* const a = [2,6]
const b = [24,36]

function getTotalX(a, b) {
    let result = 0

    for (let i = 0; i <=100; i++) {

        let isMultiple = true

        a.forEach((element, index) => {
            if ((i % a[index]) != 0) {
                isMultiple = false
            }

        })

        b.forEach((element, index) => {
            if ((b[index] % i) != 0){
                isMultiple = false
            }  
        })

        if (isMultiple === true) {
            result += 1
        }  
    }

    return result
}

console.log(getTotalX(a,b)) */

//////////////////////////////////////

/* const a = [9, [10,5,20,20,4,5,2,25,1]]
const b = [10,[3,4,21,36,10,28,35,5,24,42]]

function breakingRecords(scores) {
    const n = scores[0]
    const score = scores[1]
    let score_max = score[0],
        score_min = score[0],
        count_max = 0, count_min =0
 

    for (let x = 0; x < n; x++) {
        if (score[x] > score_max) {
            count_max += 1
            score_max = score[x]
        }
        if (score[x] < score_min) {
            count_min += 1
            score_min = score[x]
        }
    }
    
    return [count_max,count_min]
}

console.log(breakingRecords(a))
console.log(breakingRecords(b)) */

/* function birthday(s, d, m) {
    let sum = 0,round = 0, count = 0

    for (let i = 0; i < s.length; i++) {
        for (let x = i; x < s.length; x++) {
            sum += s[x]
            round += 1
            console.log("Fuera del if: ", sum)
            if((sum === d) && (round == m)){
                console.log("Valor en if: ", sum)
                count += 1
                break
            }
         
        }
        sum = 0
        round = 0    
    }

    return count
}

const a = [1,2,1,3,2]
const b = [1,1,1,1,1,1]

birthday(a,3,2)
birthday(b,3,2) */

//////////////////////////////////////////

/* function divisibleSumPairs(n, k, ar) {
    let count_divisible = 0
    for (let x = 0; x < n; x++) {
        if (x != (n + 1)) {
            for (let y = x + 1; y < n; y++) {
                if((ar[x]+ ar[y]) % k == 0){
                    count_divisible += 1
                }
            }
        }
    }

    return count_divisible
}

const ar = [1,3,2,6,1,2]
console.log(divisibleSumPairs(6,3,ar)) */

////////////////////////////////////////////////

/* function migratoryBirds(arr) {
    const type = [1,2,3,4,5]
    let types = []

    arr.forEach((element, index) => {
        if (index < type.length){
            const found = arr.filter(element => element == type[index])
            types.push({key: type[index], value: found.length})
        }
    });

    let bird = 0
    let mayor = 0

    types.map(function(obj){     
        if(obj.value > mayor){
            mayor = obj.value
            bird = obj.key
        }
    })

    return bird 

} 


const a = [1, 4, 4, 4, 5, 3]
console.log(migratoryBirds(a)) */


/* function dayOfProgrammer(year) {
    const No_Bisi = 243
    const Bisi = 244
    let output = '', day = 0

    if ((year >= 1700) && (year <= 2700)){
        if(year === 1918){
            output = '26.09.1918'
        }
        if(year <= 1917){
            if((year % 4) == 0){
                day = 256 - Bisi 
                output = `${day}.09.${year}`
            } else {
                day = 256 - No_Bisi 
                output = `${day}.09.${year}`
            }
        }
        if (year >= 1919){
            if(((year % 4) == 0) && ((year % 100) != 0) ){
                day = 256 - Bisi 
                output = `${day}.09.${year}`
            } else if((year % 400) == 0) {
                day = 256 - Bisi
                output = `${day}.09.${year}`
            } else {
                day = 256 - No_Bisi 
                output = `${day}.09.${year}`
            }
        }
    }
    
    return (output)
}

dayOfProgrammer(2017)
 */

/* function bonAppetit(bill, k, b) {
    const pay_anna = bill.slice()
    pay_anna.splice(k,1)
    let pay = (pay_anna.reduce((a,b) => a + b))/2

    if ((b - pay) == 0){
        console.log('Bon Appetit')
    } else if((b - pay) != 0) {
        console.log(b - pay)
    }
   
}

const a = [3,10,2,9]
bonAppetit(a,1,12)
bonAppetit(a,1,7) */

/* function possibleChanges(usernames){
    const vocales = ['a','e','i','o','u']
    let output = [], count = 0

    usernames.forEach(element => {
        let names = element.toLocaleLowerCase()
        for (let x = 0; x < names.length; x++) {
            for (let i = 0; i < vocales.length; i++) {
                if (names.charAt(x) === vocales[i]){
                    count += 1
                }
            }
            
        }
        if ((element.length - count) <= 1){
            output.push('NO')
            count = 0
        } else if ((element.length - count) > 1){
            output.push('YES')
            count = 0
        }
    })   
    
    return output
}

const names = ['superhero','bee','ace']

console.log(possibleChanges(names)) */
/* 
function joinedLogger(level, sep) {
    let output = []
    return function(...arr){
        arr.map(function(element, index){
            if(element.level >= level){
                output.push(element.text)
            }
        })
        let result = String(output.join(sep))
        console.log(result)
    }

  }

  function main() {
    const firstLine = ['21', ';'];
    const level = '2';
    const sep = firstLine[1];
    const myLog = joinedLogger(level, sep);
    const n = 4;
    let messages = [];
    var ob = {level: 20, text: 'foo'};
    messages.push(ob);
    ob = {level: 90, text: 'bar'};
    messages.push(ob);
    myLog(...messages);
}

main() */

/* function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i < n + 1; i++) {
        if (((i % 3) == 0) && ((i % 5) == 0)){
            console.log("FizzBuzz")
        }
        if (((i % 3) == 0) && ((i % 5) != 0)){
            console.log("Fizz")
        }
        if (((i % 3) != 0) && ((i % 5) == 0)){
            console.log("Buzz")
        } else if (((i % 3) != 0) && ((i % 5) != 0)) {
            console.log(i)
        }
        
    }
}

fizzBuzz(15)
 */

/* function findMedian(arr) {
    // Write your code here
    const ordenado = arr.sort((a,b) => {return a - b})
    let result = 0
    const n = Math.round(arr.length / 2)
    ordenado.map(function(element,index){
        if((index + 1) == n){
            result = element
        }
    })

    return result
}

const a = [0,1,2,4,6,5,3]
const b = [5,3,1,2,4,6,7,8,9]

console.log(findMedian(a))
console.log(findMedian(b)) */

//////////////////////////////////////////////////////

/* function reverseArray(a) {
    // Write your code here
    let n = a.length, output = []
    a.forEach(() => {
        output.push(a[n-1])
        n -= 1
    })

    return output
}

const a = [1,2,3]
reverseArray(a) */

////////////////////////////////////////////////////////

/* function lonelyinteger(a) {
    let unique = 0
    a.map(function (element, index) {
        const output = a.filter(e => e == a[index])
        if (output.length == 1) {
            unique = output[0]
        }
    })

    return unique
}

const a = [1, 2, 3, 4, 3, 2, 1]

lonelyinteger(a) */

///////////////////////////////////////////////////////////////////

/* function countingSort(arr) {
    let output = Array(100).fill(0)

    arr.map(function(element){
        output[element] += 1
    })

    return output

}

const a = [1,1,3,2,1,4]

countingSort(a) */

//////////////////////////////////////////////////////////

/* function flippingMatrix(matrix) {
    let n = matrix.length / 2
    let max = 0
    let total = 0

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            max = Number.MIN_VALUE
            max = Math.max(matrix[row][col], max)
            max = Math.max(matrix[row][2 * n - col - 1], max)
            max = Math.max(matrix[2 * n - row - 1][col], max)
            max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max)
            
            total += max
        }
    }

    return total

}

const matrix = [[112,42,83,119],
                [56,125,56,49],
                [15,78,101,43],
                [62,98,114,108]]

const matriz_2 = [[1,2],
                  [3,4]]

flippingMatrix(matrix)
console.log(flippingMatrix(matriz_2)) */

/////////////////////////////////////

/* function hourglassSum(arr) {
    let max = -63

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            let sum = arr[row + 1][col + 1]
            for (let k = 0; k < 3; k++) {
                sum += arr[row][col + k]
                sum += arr[row + 2][col + k]
            }
            if (sum > max) max = sum
        }
    }

    return max
}

const a = [[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]]

console.log(hourglassSum(a)) */

//////////////////////////////////////////////////////

/* function towerBreakers(n, m) {

    return n % 2 === 1 && m > 1 ? 1 : 2

}

console.log(towerBreakers(1,4)) */


/* function caesarCipher(s, k) {
    const Alphabet_min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const Alphabet_may = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const Number = ['0','1','2','3','4','5','6','7','8','9']
    const Caracters = [`'`, '-', ',','.','!','`','_','/','*','[',']','{','}','(',')','<','>']
    const K = k % Alphabet_may.length
    let Reverse_min = [].concat(Alphabet_min.slice(K),Alphabet_min.slice(0,K)),
        Reverse_may = [].concat(Alphabet_may.slice(K),Alphabet_may.slice(0,K)),
        word = '', n = 100, output = ''

    for (let i = 0; i < n; i++) {
        Alphabet_min.forEach((element, index) => {
            if (element === s.charAt(i)) {
                word = Reverse_min[index]
                output += word
            }
            if (Alphabet_may[index] === s.charAt(i)) {
                word = Reverse_may[index]
                output += word
            }
            if (Caracters[index] === s.charAt(i)) {
                word = s.charAt(i)
                output += word
            }
            if(Number[index] === s.charAt(i)){
                word = s.charAt(i)
                output += word
            }
        })
    }
    console.log(Reverse_min)
    return output
}

console.log(caesarCipher(`1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M`, 27)) */

/////////////////////////////////////////////////////////

/* function palindromeIndex(s) {

    function isPalindrome(s) {
        for (let i = 0; i < Math.floor(s.length); i++) {
            if (s[i] !== s[s.length - i - 1]) {
                return false
            }
        }
        return true
    }

    if (isPalindrome(s)) {
        return -1
    } else {
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] !== s[s.length - i - 1]) {
                let spliced = s.substring(0, i) + s.substring(i + 1)
                if (isPalindrome(spliced)) {
                    return i
                } else {
                    return s.length - i - 1 
                }
            }
        }
    }
}

console.log(palindromeIndex('aaab'))
console.log(palindromeIndex('baa')) */

//////////////////////////////////////////////////////////////////////////////////////////////

/* function gridChallenge(grid) {
    function sortAlphabet(grid) {
        let output = grid.map(e => e.split('').sort().join(''))
        return output
    }

    let Alphabet = sortAlphabet(grid)
    let indice = 0, count = 0
    console.log(Alphabet)

    for (let i = 0; i <= Alphabet.length; i++) {
        for (let j = 0; j < Alphabet.length; j++) {
            let words = Alphabet[j]
            let wordCode = words.charCodeAt(indice)
            console.log(wordCode, count)
            if (wordCode >= 97 && wordCode <= 127) {
                if (wordCode > count) {
                    count = wordCode
                } else if (wordCode < count) {
                    return 'NO'
                }
            }
        }
        indice += 1
        count = 0

    }

    return 'YES'
}

const a = ['ebacd', 'fghij', 'olmkn', 'trpqs']
const b = ['mpxz','abcd','wlmf']
const c = ['abc','lmp','qrt']
const d = ['abc','hjk','mpq','rtv']
//console.log(gridChallenge(a))
console.log(gridChallenge(b))
//console.log(gridChallenge(c))
//console.log(gridChallenge(d))

 */

////////////////////////////////////////////

function superDigit(n, k){
    
}
