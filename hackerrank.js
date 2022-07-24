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

/* function superDigit(n, k) {
    let p = (n.split('').map(Number).reduce((a,b) => a+b, 0)*k).toString()
    return p.length > 1 ? superDigit(p, 1) : p
}

let a = '9875'
let b = '148'

console.log(superDigit(a, 4))
console.log(superDigit(b, 3))
 */

/////////////////////////////////////////////////////////////////

/* function minimumBribes(q) {
    let Bribes = 0

    for (let i = 0; i < q.length; i++) {
       const pos = q[i], at = i + 1
       if(pos - at > 2){ return console.log("Too chaotic")}
       for(let j = Math.max(0, pos -2); j < i; j++){
        if(q[j] > pos) { Bribes += 1}
       }
    }

    return console.log(Bribes)
}

const a = [1,2,3,5,4,6,7,8]
const b = [2, 1, 5, 3, 4]
const c = [2, 5, 1, 3, 4]
const d = "2 1 5 6 3 4 9 8 11 7 10 14 13 12 17 16 15 19 18 22 20 24 23 21 27 28 25 26 30 29 33 32 31 35 36 34 39 38 37 42 40 44 41 43 47 46 48 45 50 52 49 51 54 56 55 53 59 58 57 61 63 60 65 64 67 68 62 69 66 72 70 74 73 71 77 75 79 78 81 82 80 76 85 84 83 86 89 90 88 87 92 91 95 94 93 98 97 100 96 102 99 104 101 105 103 108 106 109 107 112 111 110 113 116 114 118 119 117 115 122 121 120 124 123 127 125 126 130 129 128 131 133 135 136 132 134 139 140 138 137 143 141 144 146 145 142 148 150 147 149 153 152 155 151 157 154 158 159 156 161 160 164 165 163 167 166 162 170 171 172 168 169 175 173 174 177 176 180 181 178 179 183 182 184 187 188 185 190 189 186 191 194 192 196 197 195 199 193 198 202 200 204 205 203 207 206 201 210 209 211 208 214 215 216 212 218 217 220 213 222 219 224 221 223 227 226 225 230 231 229 228 234 235 233 237 232 239 236 241 238 240 243 242 246 245 248 249 250 247 244 253 252 251 256 255 258 254 257 259 261 262 263 265 264 260 268 266 267 271 270 273 269 274 272 275 278 276 279 277 282 283 280 281 286 284 288 287 290 289 285 293 291 292 296 294 298 297 299 295 302 301 304 303 306 300 305 309 308 307 312 311 314 315 313 310 316 319 318 321 320 317 324 325 322 323 328 327 330 326 332 331 329 335 334 333 336 338 337 341 340 339 344 343 342 347 345 349 346 351 350 348 353 355 352 357 358 354 356 359 361 360 364 362 366 365 363 368 370 367 371 372 369 374 373 376 375 378 379 377 382 381 383 380 386 387 384 385 390 388 392 391 389 393 396 397 394 398 395 401 400 403 402 399 405 407 406 409 408 411 410 404 413 412 415 417 416 414 420 419 422 421 418 424 426 423 425 428 427 431 430 429 434 435 436 437 432 433 440 438 439 443 441 445 442 447 444 448 446 449 452 451 450 455 453 454 457 456 460 459 458 463 462 464 461 467 465 466 470 469 472 468 474 471 475 473 477 476 480 479 478 483 482 485 481 487 484 489 490 491 488 492 486 494 495 496 498 493 500 499 497 502 504 501 503 507 506 505 509 511 508 513 510 512 514 516 518 519 515 521 522 520 524 517 523 525 526 529 527 531 528 533 532 534 530 537 536 539 535 541 538 540 543 544 542 547 548 545 549 546 552 550 551 554 553 557 555 556 560 559 558 563 562 564 561 567 568 566 565 569 572 571 570 575 574 577 576 579 573 580 578 583 581 584 582 587 586 585 590 589 588 593 594 592 595 591 598 599 596 597 602 603 604 605 600 601 608 609 607 611 612 606 610 615 616 614 613 619 618 617 622 620 624 621 626 625 623 628 627 631 630 633 629 635 632 637 636 634 638 640 642 639 641 645 644 647 643 646 650 648 652 653 654 649 651 656 658 657 655 661 659 660 663 664 666 662 668 667 670 665 671 673 669 672 676 677 674 679 675 680 678 681 684 682 686 685 683 689 690 688 687 693 692 691 696 695 698 694 700 701 702 697 704 699 706 703 705 709 707 711 712 710 708 713 716 715 714 718 720 721 719 723 717 722 726 725 724 729 728 727 730 733 732 735 734 736 731 738 737 741 739 740 744 743 742 747 746 745 750 748 752 749 753 751 756 754 758 755 757 761 760 759 764 763 762 767 765 768 766 771 770 769 774 773 776 772 778 777 779 775 781 780 783 784 782 786 788 789 787 790 785 793 791 792 796 795 794 798 797 801 799 803 800 805 802 804 808 806 807 811 809 810 814 812 813 817 816 819 818 815 820 821 823 822 824 826 827 825 828 831 829 830 834 833 836 832 837 839 838 841 835 840 844 842 846 845 843 849 847 851 850 852 848 855 854 853 857 856 858 861 862 860 859 863 866 865 864 867 870 869 868 872 874 875 871 873 877 878 876 880 881 879 884 883 885 882 888 886 890 891 889 893 887 895 892 896 898 894 899 897 902 901 903 905 900 904 908 907 910 909 906 912 911 915 913 916 918 914 919 921 917 923 920 924 922 927 925 929 928 926 932 931 934 930 933 935 937 939 940 938 936 943 944 942 941 947 946 948 945 951 950 949 953 952 956 954 958 957 955 961 962 963 959 964 966 960 965 969 968 971 967 970 974 972 976 973 975 979 977 981 982 978 980 983 986 984 985 989 988 987 990 993 991 995 994 997 992 999 1000 996 998".split(' ')
const e = d.map(Number)

//minimumBribes(c)
//minimumBribes(a)
//minimumBribes(b)

minimumBribes(e) */

///////////////////////////////////////////////////////////////////////

/* function truckTour(petrolpumps) {
    let fuel = 0, n = petrolpumps.length, indice = 0, i = indice

    while (i < n) {
        fuel += petrolpumps[i][0] - petrolpumps[i][1]
        if (fuel < 0) {
            indice += 1
            i = indice
            fuel = 0
        } else {
            i += 1
        }
    }

    return indice
}

const a = [[1, 5], [10, 3], [3, 4]]
truckTour(a) */

//////////////////////////////////////////////////////////

/* function sockMerchant(n, ar) {
    // Write your code here
    let output = [], count = 0, result = 0, i = 0
    while (i < ar.length) {
        ar.forEach(element => {
            if (!output.includes(element)) {
                if (element === ar[i]) {
                    count += 1
                    if (count === 2) {
                        result += 1
                        count = 0
                    }
                }
            }
        })
        output.push(ar[i])
        i += 1
        count = 0

    }

    return result

}

const a = [10, 20, 20, 10, 10, 30, 50, 10, 20]
sockMerchant(a.length, a) */

//////////////////////////////////////////

/* function pageCount(n, p) {
    // Write your code here
    let countFront = 0, countBack = 0

    for (let i = 0; i <= n; i++) {
        if ((i !== 0) && ((i%2) == 0)) {
            countFront += 1
        }
        if(((n - i)%2  == 0) && ((n - i) !== p)){
            countBack += 1
        }
        if (i == p) {
            return countFront   
        }
        if ((n - i) == p) {
            return countBack
        }
    }
}

console.log(pageCount(6, 5))
console.log(pageCount(5, 4))
 */

//////////////////////////////////////

/* function countingValleys(steps, path) {
    // Write your code here
    let count = 0,countValley = 0
    for (let i = 0; i < steps; i++) {
        if(path[i] === 'U') count += 1
        if(path[i] === 'D') count -= 1
        if((count === 0 && path[i] === 'U')){
            countValley += 1
        }
    }

    return countValley

}

const a = ['U','D','D','D','U','D','U','U']
const b = ['D','D','U','U','U','U','D','D']
const c = ['D','D','U','U','D','D','U','D','U','U','U','D']

countingValleys(a.length, a)
countingValleys(b.length,b)
countingValleys(c.length,c) */

///////////////////////////////////////////////

/* function mergeLists(head1, head2) {
    if (!head1) return head2
    if (!head2) return head1
    
    if(head1.data < head2.data){
        return {"data": head1.data, "next": mergeLists(head1.next, head2)}
    }else{
        return {"data": head2.data, "next": mergeLists(head1, head2.next)} 
    }
} */

/////////////////////////////////