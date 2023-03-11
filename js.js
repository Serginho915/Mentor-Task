function checkValid(age){
    let lastNumber = +age[age.length -1];
    let year;
    if(!isNaN(lastNumber)){
        if (lastNumber === 1) {
          year = ('год');
        }
        else if (lastNumber === 2 ||lastNumber === 3 || lastNumber === 4) {
          year = ('года');
        }
        else if (lastNumber === 0|| (lastNumber >= 5 && lastNumber <= 10) ) {
          year = ('лет');
        }
        return alert(`Вам ${age} ${year} `);
    }
    
    else{
        return alert('Not valid age');
    }

}
// you can try this % https://learn.javascript.ru/operators#matematika

let userAge = prompt('Enter your age');

checkValid(userAge)