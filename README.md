# Simple Shopping App

## Overview

This is a simple shopping app developed as part of the HNG Internship Mobile Track Stage One Task. The app displays a list of products and allows users to add items to their cart and proceed to checkout. It includes a bottom navigation bar, a checkout screen, and an order success screen.

## Features

- Displays a list of products
- Add and remove items from the cart
- View cart items in the checkout screen
- Adjust item quantities in the cart
- Confirm order and navigate to the order success screen
- Intuitive and adaptive user interface

## Requirements

- No third-party dependencies: Only native functionalities and components are used
- User-friendly and intuitive UI
- Bottom navigation bar for Products and Checkout screens
- Proper setup instructions, app screenshots, and APK download link

## Screenshots

![Products Screen](https://i.ibb.co/3RFmgbx/Screenshot-2024-07-03-184736.png)
*Products Screen*

![Checkout Screen](https://i.ibb.co/vvhw66p/Screenshot-2024-07-03-184808.png)
*Checkout Screen*

![Order Success Screen](https://i.ibb.co/ZdHvr1g/Screenshot-2024-07-03-184829.png)
*Order Success Screen*

## APK Download

You can download the APK file from the following link:

[Download APK](path/to/your-apk-file.apk)

## Setup Instructions

Follow the steps below to set up and run the application:

### Prerequisites

- Node.js
- Expo CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/simple-shopping-app.git

2. Navigate to the Project directory 
    ```bash
    cd simple-shopping-app

3. Install the dependencies
    ```bash
    npm install

### Running the App
1. Start the Expo development server - npx expo start
2. Scan the QR code with the Expo Go app (available on both iOS and Android) to launch the application on your mobile device.

### Project Structure
- App.js: Entry point of the application, sets up navigation.
- screens/ProductsScreen.js: Displays the list of products.
- screens/CheckoutScreen.js: Displays the cart items and allows quantity adjustments.
- screens/OrderSuccessfulScreen.js: Displays the order success message.
- components/BottomNav.js: Custom bottom navigation bar component.

Feel free to customize the application by editing the code in the screens and components directories. You can add more features or modify existing ones as needed.