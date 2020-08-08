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
const article = document.querySelector(`.list`);
const spicyInput = document.querySelector(`input[name="spicy"]`);
const vegetarianInput = document.querySelector(`input[name="vegetarian"]`);
const confirmBtn = document.querySelector(`.confirm`);
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);




// Check the check box to filter the food list
	
	   const html = foods.map(
		   item => `
		   <div class="menu">
			 <ul class="lists">
				 <li>${item.id}</li>
				 <li>${item.price}</li>
				 <li><button type="button">Add</button></li>
			 </ul>
		   </div>`)
		   .join(``);

article.innerHTML = html;

// Create a card order
const myHTML = `
	</div>
		<div class="order-cart">
		<div class="order-cart-head">
		  <h1>Your order</h1>
		    <p>Total</p>
			<ul class="order-cart-list">
			</ul>
    </div>
  </div>
		`;
form.insertAdjacentHTML(`afterend`, myHTML);



// Check the checkbox to show the type of food
const handleChecked = (e) => {
// Condition of the checkbox 
	if (spicyInput.checked === true) {
		const spicyFood = foods.filter(food => food.spicy === true);
         console.log(spicyFood);
		 spicyFood.map(item => {
			const spicyOrder =`
			<div class="menu">
			 <ul class="spicy">
				 <li>${item.id}</li>
				 <li>${item.price}</li>
				 <li><button type="button">Add</button></li>
			 </ul>
		   </div>
			`;
			article.innerHTML = spicyOrder;

		})
	}
}
const CheckedVeg = (e) => {
	if (vegetarianInput.checked === true) {
		const vegetarianFood = foods.filter(food => food.vegetarian === true);
         console.log(vegetarianFood);
		return vegetarianFood.map(item => {
			const vegetarianOrder =`
			<div class="menu">
			 <ul class="spicy">
				 <li>${item.id}</li>
				 <li>${item.price}</li>
				 <li><button type="button">Add</button></li>
			 </ul>
		   </div>
			`;
			article.innerHTML = vegetarianOrder;

		});
	}
}
// Create new modal

const handleConfirmBtn = (e) => {
	const resultHtml = `
	<h2>Thank your</h2>
	<p>Your food order is confirm. We will prepare your food, and deliver it to you when it's ready</p>
	<p>The total amount is </p>`;
	innerModal.innerHTML = resultHtml;
	outerModal.classList.add(`open`);
}
// Add class to the modal
const handleCloseModal = event => {
    const isOutside = !event.target.closest(`.inner-modal`);
    if (isOutside) {
        outerModal.classList.remove(`open`);
    }
};
// Close the modal
const handleEscapeKey = event => {
    if (event.key === `Escape`) {
        closeModal();
    }
};
const closeModal = event => {
    outerModal.classList.remove(`open`);
}

// Add event listener
spicyInput.addEventListener(`change`, handleChecked);
vegetarianInput.addEventListener(`change`, CheckedVeg);
window.addEventListener(`keydown`, handleEscapeKey);
outerModal.addEventListener(`click`, handleCloseModal);
confirmBtn.addEventListener(`click`, handleConfirmBtn);


