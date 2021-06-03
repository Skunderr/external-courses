const gift = [];

const Sweetness = {
  tasty: true,
  bringJoy() {
    console.log(':-)');
  }
};

const Candy = {
  rustleWrapper() {
    console.log('this wrapper rustles');
  }
};

Candy.prototype = Sweetness;

const Waffle = {
  title: 'waffle',
  weight: '15g',
  filling: 'cream',
  crunch() {
    console.log('crunch!');
  }
};

Waffle.prototype = Sweetness;

const Chocolate = {
  weight: '100g',
  meltInYourMouth() {
    console.log('chocolate melts');
  }
};
 
Chocolate.prototype = Sweetness;

const whiteChocolate = {
  title: 'white chocolate',
  color: 'white',
  filling: null
};

whiteChocolate.prototype = Chocolate;

const bitterChocolate = {
  title: 'bitter chocolate',
  taste: 'bitter',
  filling: null
};

bitterChocolate.prototype = Chocolate;

const milkChocolate = {
  title: 'milk chocolate',
  filling: 'nuts'
};

milkChocolate.prototype = Chocolate;

const ChocolateCandy = {
  title: 'chocolate candy',
  weight: '25g', 
  glaze: 'chocolate',
  filling: null 
};

ChocolateCandy.prototype = Candy;

const caramelCandy = {
  title: 'caramel candy',
  weight: '15g',
  glaze: 'caramel', 
  filling: 'marmalade'
};

caramelCandy.prototype = Candy;

const chocolateCandyWithNuts = {
  title: 'chocolate candy with nuts',
  weight: '30g',
  filling: 'nuts'
};

chocolateCandyWithNuts.prototype = ChocolateCandy;

const marmaladeCandy = {
  title: 'marmalade candy',
  weight: '30g',
  glaze: 'chocolate',
  filling: 'marmalade'
};

marmaladeCandy.prototype = Candy;

gift.push(Waffle, ChocolateCandy, caramelCandy, chocolateCandyWithNuts, 
  marmaladeCandy, milkChocolate, bitterChocolate, whiteChocolate);

getWeightOfGift = (gift) => {
  let giftWeight = 0;
  
  gift.forEach(elem => {
    if (elem.weight) {
      giftWeight += parseFloat(elem.weight);
    }

    if (!elem.weight) {
      giftWeight += parseFloat(elem.prototype.weight);
    }
  });

  return giftWeight;
};

getGift = (name) => {
  return gift.find(elem => elem.title === name);
};

sortGiftByFilling = (filling) => {
  const sweetnessWithNuts  = [];

  gift.forEach(elem => {
    if (elem.filling === filling) {
      sweetnessWithNuts.push(elem);
    }
  });
    
  return sweetnessWithNuts;
};

getWeightOfGift(gift);

getGift('milk chocolate');

sortGiftByFilling('nuts');
