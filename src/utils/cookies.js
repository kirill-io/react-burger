export const setCookie = (name, value) => {
  let valueToken = (value.indexOf('Bearer') === 0) ? value.split('Bearer ')[1] : value;

  document.cookie = name + '=' + valueToken;
};
