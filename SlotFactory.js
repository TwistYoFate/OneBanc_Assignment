import { utils } from './Utils';

export const dateSlot = function(date) {
  let slot = document.createElement('section');
  slot.innerHTML = `<p>................................<span id="inpdate">${date}</span>.....................................</p>`;
  slot.classList.add('slot_date');
  return slot;
};

export const cardSlot = {
  paySent: function(transaction) {
    let slot = document.createElement('section');
    slot.classList.add('slot_right');
    slot.innerHTML = `<div class="card">
            <div class="row">
              <div>
                <p class="amount" >Rs&nbsp;${transaction.amount}</p>
              </div>
              <div>
                <p><span class="tick">&#10003;</span> You Paid</p>
              </div>
            </div>
            <div class="row">
              <div>
                <p>Transaction ID<br/>${transaction.id}</p>
              </div>
              <div>
                <p> <div class=open> &#8250; </div> </p>
              </div>
            </div>
          </div>
          <div class="timestamp_right">${utils.timestamp(
            transaction.startDate
          )}</div>`;
    return slot;
  },
  collectReceived: function(transaction) {
    let slot = document.createElement('section');
    slot.classList.add('slot_left');
    slot.innerHTML = `<div class="card">
            <div class="row">
              <div>
                <p class="amount" >Rs&nbsp;${transaction.amount}</p>
              </div>
              <div>
                <p><span class="tick">&#10003;</span> You received</p>
              </div>
            </div>
            <div class="row">
              <div>
                <p>Transaction ID<br/>${transaction.id}</p>
              </div>
              <div>
                <p> <div class=open> &#8250; </div> </p>
              </div>
            </div>
          </div>
          <div class="timestamp_left">${utils.timestamp(
            transaction.startDate
          )}</div>`;
    return slot;
  },
  payReceived: function(transaction) {
    let slot = document.createElement('section');
    slot.classList.add('slot_left');
    slot.innerHTML = `<div class="card">
            <div class="row">
              <div>
                <p class="amount" >Rs&nbsp;${transaction.amount}</p>
              </div>
              <div>
                <p>You requested</p>
              </div>
            </div>
            <div class="row">
              <div>
                <button>Cancel</button>
              </div>
              <div>
                <p> <div class=open> &#8250; </div> </p>
              </div>
            </div>
          </div>
          <div class="timestamp_left">${utils.timestamp(
            transaction.startDate
          )}</div>`;
    return slot;
  },
  collectSent: function(transaction) {
    let slot = document.createElement('section');
    slot.classList.add('slot_right');
    slot.innerHTML = `<div class="card">
            <div class="row">
              <div>
                <p class="amount" >Rs&nbsp;${transaction.amount}</p>
              </div>
              <div>
                <p class="card_text">You requested</p>
              </div>
            </div>
            <div class="row">
              <div>
                <button>Cancel</button>
              </div>
              <div>
                <p> <div class=open> &#8250; </div> </p>
              </div>
            </div>
          </div>
          <div class="timestamp_right">${utils.timestamp(
            transaction.startDate
          )}</div>`;
    return slot;
  }
};
