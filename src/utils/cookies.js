export const deleteBearer = (token) => {
  return token.split("Bearer ")[1];
};

export const setCookie = (name, value, time = 0) => {
  if (time) {
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${
      time * 60
    }`;
  } else {
    document.cookie = `${name}=${encodeURIComponent(value)}`;
  }
};

export const getCookie = (nameCookie) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + nameCookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)') // eslint-disable-line
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
