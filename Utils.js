const MONTHS = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

function sortKey(date) {
  let list = date.split('T')[1].split(':');
  let hr = list[0];
  let min = list[1];
  console.log(parseInt(hr) * 100 + parseInt(min));
  return parseInt(hr) * 100 + parseInt(min);
}

function customDate(date) {
  let temp = date.toString().split('T')[0];
  let list = temp.split('-');
  // console.log(list);
  if (list[1][0] == '0') list[1] = list[1][1];
  // console.log(list[2] + ' ' + MONTHS[list[1]] + ' ' + list[0]);
  return list[2] + ' ' + MONTHS[list[1]] + ' ' + list[0];
}

function customTime(date) {
  let list = date.split('T')[1].split(':');
  let hr = list[0] % 12;
  let min = list[1];
  return hr + ':' + min + ' ' + (list[0] >= 12 ? 'PM' : 'AM');
}

function customTimestamp(timestamp) {
  let list = timestamp
    .toString()
    .split(' ')[4]
    .split(':');
  let hr = list[0] % 12;
  let min = list[1];
  // console.log(hr + ':' + min + ' ' + (list[0] >= 12 ? 'PM' : 'AM'));
  return hr + ':' + min + ' ' + (list[0] >= 12 ? 'PM' : 'AM');
}

function timestamp(date) {
  // console.log(customDate(date) + ', ' + customTime(date));
  return customDate(date) + ', ' + customTime(date);
}

export const utils = {
  customDate,
  customTime,
  timestamp,
  customTimestamp,
  sortKey
};
