const Fruits = {
    apple: {
        color: 'red',
        taste: 'sour'
    },
    pear: {
        color: 'brown',
        taste: 'sweat'
    },
    citrus: {
        color: 'green',
        taste: 'sour'
    }
    persimmon: {
        color: 'orange',
        taste: 'sweet'
    }
    grape: {
        color: 'purple',
        taste: 'sweet'
    }
}

const storeA = {
    fruits: {
        apple: {
            nature: Fruits.apple,
            stock: 10,
            price: 2000
        },
        pear: {
            nature: Fruits.pear,
            stock: 30,
            price: 3000
        },
    },
    location: [ 37, 126]
    name: 'a-store',
    size: 100
}
const storeB = {
    fruits: {
        apple: {
            nature: Fruits.apple,
            stock: 15,
            price: 3000
        },
        pear: {
            nature: Fruits.pear,
            stock: 10,
            price: 2000
        },
        citrus: {
            nature: Fruits.citrus,
            stock: 20
            price: 5000
        }
    },
    location: [ 37, 125]
    name: 'b-store',
    size: 100
}
const storeC = {
    fruits: {
        grape: {
            nature: Fruits.grape,
            stock: 10,
            price: 4000
        },
        pear: {
            nature: Fruits.pear,
            stock: 10,
            price: 2000
        },
        citrus: {
            nature: Fruits.citrus,
            stock: 20
            price: 6000
        }
    },
    location: [ 37, 125]
    name: 'b-store',
    size: 100
}


const buyFruit = function(fruit, store) {
    if(!store[fruit]) return alert('해당 상점에는'+fruit+'을 팔지않습니다');
    if(store[fruit].stock ===0) return alert('해당 상점에 충분한 재고가 없습니다.');
    store[fruit].stock -= 1;
    alert(fruit+'을 구매하셨습니다');
    if (fruit[taste] == 'sour') return alert(fruit+'이 시기때문에 리턴해드렸습니다';
    store[fruit].stock += 1)
}

const cheapFruit = function(fruit){
if(fruit ='apple') return alert ('storA');
    if(fruit='pear') return alert ('sotreB');
    if(fruit= 'grape')return alert ('storeA');
    if(fruit='citrus')return alert ('storeC');
    alert('해당과일을 팔지 않습니다')
}
