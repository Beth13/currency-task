const baseUrl = 'https://v6.exchangerate-api.com/v6/27e3e70aba6e5139be27ee07/latest/';

export const getTodaysCurrency = currency => {
  return fetch(`${baseUrl}/${currency}`)
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
};
