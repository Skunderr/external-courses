const gift = [];

const sweetness = {
  tasty: true,
  bringJoy() {
    console.log(':-)');
  }
};

const candy = Object.create(sweetness);
candy.rustleWrapper = function() {
  console.log('this wrapper rustles');
};

const waffle = Object.create(sweetness);
waffle.title = 'waffle';
waffle.weight = '15g';
waffle.filling = 'cream';
waffle.crunch = function() {
  console.log('crunch!');
};

const chocolate = Object.create(sweetness);
chocolate.weight= '100g';
chocolate.meltInYourMouth = function() {
  console.log('chocolate melts');
};  

const whiteChocolate = Object.create(chocolate);
whiteChocolate.title = 'white chocolate';
whiteChocolate.color = 'white';
whiteChocolate.filling = null;

const bitterChocolate = Object.create(chocolate);
bitterChocolate.title = 'bitter chocolate';
bitterChocolate.taste = 'bitter';
bitterChocolate.filling = null;

const milkChocolate = Object.create(chocolate); 
milkChocolate.title = 'milk chocolate';
milkChocolate.filling = 'nuts';

const chocolateCandy = Object.create(candy);
chocolateCandy.title = 'chocolate candy';
chocolateCandy.weight = '25g'; 
chocolateCandy.glaze = 'chocolate';
chocolateCandy.filling = null; 

const caramelCandy = Object.create(candy);
caramelCandy.title = 'caramel candy';
caramelCandy.weight = '15g';
caramelCandy.glaze = 'caramel'; 
caramelCandy.filling = 'marmalade'; 

const chocolateCandyWithNuts = Object.create(chocolateCandy);
chocolateCandyWithNuts.title = 'chocolate candy with nuts';
chocolateCandyWithNuts.weight = '30g';
chocolateCandyWithNuts.filling = 'nuts';

const marmaladeCandy = Object.create(candy);
marmaladeCandy.title = 'marmalade candy';
marmaladeCandy.weight = '30g';
marmaladeCandy.glaze = 'chocolate'; 
marmaladeCandy.filling = 'marmalade';

gift.push(waffle, chocolateCandy, caramelCandy, chocolateCandyWithNuts, 
  marmaladeCandy, milkChocolate, bitterChocolate, whiteChocolate);

function getWeightOfGift(gift) {
  let weight = 0;

  gift.forEach(elem => {
    weight += parseFloat(elem.weight);
  });

  return weight;
}

function getGift(name) {
  return gift.find(elem => elem.title === name);
}

function sortGiftByFilling() {
  const sweetnessWithNuts  = [];

  gift.forEach(elem => {
    if (elem.filling === 'nuts') {
      sweetnessWithNuts.push(elem);
    }
  });
    
  return sweetnessWithNuts;
}

getWeightOfGift(gift);

getGift('milk chocolate');

sortGiftByFilling();
