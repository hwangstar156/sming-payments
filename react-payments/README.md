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

```html
<!-- public/index.html-->
<!DOCTYPE html>
<html lang="ko">
  <!--... -->
  <body>
    <div id="root"></div>
    <div id="sming-modal"></div>
  </body>
</html>
```

### SmingPayment Component

```jsx
import { SmingPayment, useSmingPayment } from "sming-payments";

function App() {
  const { isShowModal, toggleModal } = useSmingPayment();

  const onClickPayButton = () => {
    // 결제시에 발생할 로직
  };

  return (
    <SmingPayment
      price={34000}
      isShowModal={isShowModal}
      toggleModal={toggleModal}
      payButtonHandler={onClickPayButton}
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

const onClickPayButton = () => {
  // 결제시에 발생할 로직
};

return (
  <>
    <SmingPayment
      price={34000}
      isShowModal={isShowModal}
      toggleModal={toggleModal}
      payButtonHandler={onClickPayButton}
    />
    <button onClick={onClickPaymentButton}>buy</button>
  </>
);
```

- must add price, isShowModal, toggleModal attributes
