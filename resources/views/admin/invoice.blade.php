<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Invoice</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			margin: 0;
			padding: 0;
		}
		.invoice-container {
			width: 80%;
			margin: 20px auto;
			border: 1px solid #ddd;
			padding: 20px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
		.invoice-header {
			text-align: center;
			margin-bottom: 40px;
		}
		.invoice-header h1 {
			margin: 0;
			font-size: 24px;
		}
		.invoice-header h3 {
			margin-top: 10px;
			font-size: 18px;
			color: #555;
		}
		.invoice-details {
			margin-bottom: 20px;
		}
		.invoice-details h3, .invoice-details h2 {
			margin: 5px 0;
		}
		.invoice-product {
			margin-top: 30px;
		}
		.invoice-product img {
			display: block;
			margin: 20px auto;
		}
		.footer {
			text-align: center;
			margin-top: 50px;
			font-size: 14px;
			color: #777;
		}
	</style>
</head>
<body>

	<div class="invoice-container">
		<div class="invoice-header">
			<h1>Invoice</h1>
			<h3>Service Provider: Neer Farm Ltd.</h3>
			<!-- Adding Date and Time -->
			<h3>Date: {{ \Carbon\Carbon::now()->format('d/m/Y') }}</h3>
			<h3>Time: {{ \Carbon\Carbon::now()->format('h:i A') }}</h3>
		</div>

		<div class="invoice-details">
			<h3>Customer Name: {{$data->name}}</h3>
			<h3>Customer Address: {{$data->rec_address}}</h3>
			<h3>Phone: {{$data->phone}}</h3>
		</div>

		<div class="invoice-product">
			<h2>Product Title: {{$data->product->title}}</h2>
			<h2>Price: BDT{{$data->product->price}}</h2>
			<img height="250" width="300" src="products/{{$data->product->image}}" alt="Product Image">
		</div>

		<div class="footer">
			<p>Thank you for choosing Neer Farm Ltd.!</p>
		</div>
	</div>

</body>
</html>
