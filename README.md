# CoreShop Paymill Payum Connector
This Bundle activates the Paymill PaymentGateway in CoreShop.
It requires the [coreshop/payum-paymill](https://github.com/coreshop/payum-paymill) repository which will be installed automatically.

## Installation

#### 1. Composer
```json
    "coreshop/payum-paymill-bundle": "^1.0"
```

#### 2. Activate
Enable the Bundle in Pimcore Extension Manager

#### 3. Setup
Go to Coreshop -> PaymentProvider and add a new Provider. Choose `paymill` from `type` and fill out the required fields.

