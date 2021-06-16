import { dateSlot, cardSlot } from './SlotFactory';
import Calls from './Calls';
import { utils } from './Utils';

const url =
  'https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2';

let data;
let transactions;
async function init() {
  data = await Calls.get(url);
  for (let trns = 0; trns < data.transactions.length; trns++) {
    data.transactions[trns]['key'] = utils.sortKey(
      data.transactions[trns].startDate
    );
  }
  transactions = data.transactions.sort((a, b) => {
    return utils.customDate(a.startDate) === utils.customDate(b.startDate)
      ? a.key > b.key
        ? 1
        : -1
      : a.startDate > b.startDate
      ? 1
      : -1;
  });
}

await init();
let view = document.getElementById('scrollWindow');

utils.timestamp(transactions[0].startDate);
utils.customTimestamp(new Date());

let card;
let currDate = utils.customDate(transactions[0].startDate);
let element = dateSlot(utils.customDate(transactions[0].startDate));
view.appendChild(element);
for (let i = 0; i < transactions.length; i++) {
  if (utils.customDate(transactions[i].startDate) !== currDate) {
    currDate = utils.customDate(transactions[i].startDate);
    let element = dateSlot(utils.customDate(transactions[i].startDate));
    view.appendChild(element);
  }
  switch (transactions[i].type) {
    //Pay
    case 1:
      switch (transactions[i].direction) {
        //sent
        case 1:
          card = cardSlot.paySent(transactions[i]);
          view.appendChild(card);
          break;
        //received
        case 2:
          card = cardSlot.payReceived(transactions[i]);
          view.appendChild(card);
          break;
        default:
          break;
      }
      break;
    //Collect
    case 2:
      switch (transactions[i].direction) {
        //sent
        case 1:
          card = cardSlot.collectSent(transactions[i]);
          view.appendChild(card);
          break;
        //received
        case 2:
          card = cardSlot.collectReceived(transactions[i]);
          view.appendChild(card);
          break;
        default:
          break;
      }
  }
}
