## Install

```bash
npm i sming-payments
```

## Usage

### Setting

```jsx
// index.jsx
import { SmingModalProvider } from "sming-payments";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SmingModalProvider>
    <App />
  </SmingModalProvider>
);
```

### SmingPayment Component

```jsx
import { SmingPayment, useSmingPayment } from "sming-payments";

function App() {
  const { isShowModal, toggleModal } = useSmingPayment();

  return (
    <SmingPayment
      price={34000}
      isShowModal={isShowModal}
      toggleModal={toggleModal}
    />
  );
}
```

### render SmingPayment

```jsx
// payment.jsx
const { isShowModal, toggleModal } = useSmingPayment();

const onClickPaymentButton = () => {
  toggleModal();
};

return (
  <>
    <SmingPayment
      price={34000}
      isShowModal={isShowModal}
      toggleModal={toggleModal}
    />
    <button onClick={onClickPaymentButton}>buy</button>
  </>
);
```

- must add price, isShowModal, toggleModal attributes
