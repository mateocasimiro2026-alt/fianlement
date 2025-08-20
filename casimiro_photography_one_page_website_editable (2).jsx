<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Casimiro Photography</title>
  <style>
    body {
      background-color: black;
      color: white;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    header {
      padding: 20px;
    }
    header img {
      max-height: 100px;
    }
    section {
      padding: 40px 20px;
      border-bottom: 1px solid #333;
    }
    h1, h2, h3 {
      margin-bottom: 20px;
    }
    .packages {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    .package {
      background: #111;
      padding: 20px;
      border-radius: 10px;
      width: 280px;
      box-shadow: 0 0 10px rgba(255,255,255,0.1);
    }
    .package h3 {
      margin-bottom: 10px;
    }
    .package p {
      margin: 8px 0;
    }
    .deposit-note {
      margin-top: 20px;
      font-style: italic;
      color: #ccc;
    }
    .stripe-btn {
      display: inline-block;
      margin-top: 15px;
      padding: 12px 20px;
      background: #635bff;
      color: white;
      font-weight: bold;
      text-decoration: none;
      border-radius: 8px;
    }
    footer {
      padding: 20px;
      font-size: 14px;
      color: #aaa;
    }
  </style>
</head>
<body>
  <header>
    <img src="img/logo.png" alt="Casimiro Photography Logo" />
    <h1>Casimiro Photography</h1>
    <img src="img/candid.jpg" alt="Photographer holding camera" style="max-width:400px; border-radius:15px; margin-top:20px;" />
  </header>

  <section>
    <h2>Packages</h2>
    <div class="packages">
      <div class="package">
        <h3>Basic Package – $20</h3>
        <p>✔ Full game coverage</p>
        <p>✔ ~100 edited photos</p>
        <p><strong>Deposit Required: $10 (50%)</strong></p>
        <a class="stripe-btn" href="YOUR_STRIPE_LINK_HERE" target="_blank">Pay Deposit</a>
      </div>

      <div class="package">
        <h3>Standard Package – $30</h3>
        <p>✔ Full game coverage</p>
        <p>✔ ~150 edited photos</p>
        <p><strong>Deposit Required: $15 (50%)</strong></p>
        <a class="stripe-btn" href="YOUR_STRIPE_LINK_HERE" target="_blank">Pay Deposit</a>
      </div>

      <div class="package">
        <h3>Premium Package – $50</h3>
        <p>✔ Full game coverage</p>
        <p>✔ ~300 edited photos</p>
        <p><strong>Deposit Required: $25 (50%)</strong></p>
        <a class="stripe-btn" href="YOUR_STRIPE_LINK_HERE" target="_blank">Pay Deposit</a>
      </div>
    </div>
    <p class="deposit-note">Deposit must be sent within 24 hours to confirm booking. A 50% non-refundable deposit secures your spot and guarantees your photos.</p>
  </section>

  <footer>
    <p>© 2025 Casimiro Photography. All rights reserved.</p>
  </footer>
</body>
</html>
