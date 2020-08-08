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
			 <ul class="spicy">
				 <li>${item.id}</li>
				 <li>${item.price}</li>
				 <li><button type="button">Add</button></li>
			 </ul>
		   </div>`)
		   .join(``);

article.innerHTML = html;
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



// Listen to the button "add"
// Listen to the confirm button
const handleChecked = (e) => {
	if (spicyInput.checked === true) {
		const spicyFood = foods.filter(food => food.spicy === true);
         console.log(spicyFood);
		const spicyFoodHtml = spicyFood.map(item => {
			`
			<ul>
			   <li>${item.title}</li>
			   <li>${item.title}</li>
			</ul>
			`;
		})
	 
		return;
	}
}
const handleConfirmBtn = (e) => {
	const resultHtml = `
	<h2>Thank your</h2>
	<p>Your food order is confirm. We will prepare your food, and deliver it to you when it's ready</p>
	<p>The total amount is </p>`;
	innerModal.innerHTML = resultHtml;
	outerModal.classList.add(`open`);
}

const handleCloseModal = event => {
    const isOutside = !event.target.closest(`.inner-modal`);
    if (isOutside) {
        outerModal.classList.remove(`open`);
    }
};

const handleEscapeKey = event => {
    if (event.key === `Escape`) {
        closeModal();
    }
};
const closeModal = event => {
    outerModal.classList.remove(`open`);
}


spicyInput.addEventListener(`change`, handleChecked);
window.addEventListener(`keydown`, handleEscapeKey);
outerModal.addEventListener(`click`, handleCloseModal);
confirmBtn.addEventListener(`click`, handleConfirmBtn);


