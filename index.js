const axios = require('axios');

async function getCrvPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=curve-dao-token&vs_currencies=usd');
    const crvPrice = response.data['curve-dao-token'].usd;
    return crvPrice;
  } catch (error) {
    console.error('Error retrieving CRV price:', error);
    throw error;
  }
}

getCrvPrice()
  .then((price) => {
    console.log(`CRV price: $${price}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
