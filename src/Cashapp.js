<script src="https://sandbox.kit.cash.app/v1/pay.js"></script>

const pay = await window.CashApp.pay({ clientId: 'YOUR_CLIENT_ID' });

const amounts = {
  currency: 'USD',
  value: 1234, // $12.34
};
const scopesId = 'merchant_id_from_network_api';

pay.addEventListener(
  'CUSTOMER_REQUEST_APPROVED',
  ({ customerProfile, grants, referenceId }) => {
    // create your payment with the grant and same amount and scope
  }
);

<div id="cash-app-pay"> !-- populated by Pay Kit --</div>

// same as above when listening for events
const amount = {
  currency: 'USD',
  value: 1234, // $12.34
};
const scopeId = 'merchant_id_from_network_api';

await pay.customerRequest({
  referenceId: 'your_reference_id', // perhaps a cart or checkout identifier
  redirectURL: window.location.href, // where mobile customers should be redirected to
  actions: {
    payment: {
      amount,
      scopeId,
    },
  },
});
