export const useTimeZone = (createTime) => {
  const orderData = new Date(Date.parse(createTime));
  const timeZone = orderData.getTimezoneOffset() / 60;

  if (timeZone < 0) {
    return `+${String(timeZone * -1)}`;
  } else if (timeZone > 0) {
    return `${String(timeZone * -1)}`;
  } else {
    return `+${String(timeZone)}`;
  }
};
