const baseUrl = 'https://v6.exchangerate-api.com/v6/390073a2821a114420b1cf25/latest/';

export const getTodaysCurrency = currency =>
  fetch(`${baseUrl}/${currency}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .then(data => {
      const res = data.conversion_rates;
      return res;
    })
    .catch(() => alert("Internal Server Error. Can't display today's currency"));
