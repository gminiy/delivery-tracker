const appendQueryStringToUrl = (url, querys) => {
  const queryString = Object.keys(querys)
    .map(key => `${key}=${querys[key]}`)
    .join("&");
  return url + "?" + queryString;
};

module.exports = appendQueryStringToUrl;