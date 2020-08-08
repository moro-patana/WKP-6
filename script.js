const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];

// Grab elements
const form = document.querySelector(`.form-input`);
// Create an html
const myHTML = `
        <div class="order">
		   <h2>Your order</h2>
			<div class="order-list">
				<ul>
				</ul>
				<p>Total</p>
			</div>
		</div>
		<button class="confirm">Confirm Order</button>`;
form.insertAdjacentHTML(`afterend`, myHTML);

// Listen to the button "add"
// Listen to the confirm button