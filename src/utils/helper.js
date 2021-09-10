const cartItems = () => {
	// Checking to see if we have cartItems save to localStorage
	if (!localStorage.getItem("cosmos-foods")) {
		// if not found, return an empty array
		return [];
	}

	// if found, parse and return the cartItems array
	return JSON.parse(localStorage.getItem("cosmos-foods"));
};

const addToCart = (cartItem) => {
	// creating an array from array of cartItems
	const arr = [...cartItems()];

	// Checking to see if we have cartItems and if the food with the ID passed is in the cart
	if (arr.length) {
		const itemPresent = arr?.find((item) => item.id === cartItem.id);

		if (itemPresent) {
			const updatedItem = {
				...cartItem,
				qty: itemPresent.qty + 1,
			};

			const itemIdx = arr.findIndex((item) => item.id === cartItem.id);
			arr.splice(itemIdx, 1, updatedItem);

			return localStorage.setItem("cosmos-foods", JSON.stringify(arr));
		}

		const newItem = {
			...cartItem,
			qty: 1,
		};

		return localStorage.setItem("cosmos-foods", JSON.stringify([newItem, ...arr]));
	} else {
		const item = {
			...cartItem,
			qty: 1,
		};

		localStorage.setItem("cosmos-foods", JSON.stringify([item]));
	}
};

const updateQty = (data, cb) => {
	const arr = [...cartItems()];

	if (data?.qty < 1) {
		const itemIdx = arr.findIndex((item) => item.id === data.id);
		arr.splice(itemIdx, 1);

		localStorage.setItem("cosmos-foods", JSON.stringify(arr));

		return cb();
	}

	const selectedItem = arr?.find((item) => item.id === data.id);

	const updatedItem = {
		...selectedItem,
		qty: data.qty,
	}

	const itemIdx = arr.findIndex((item) => item.id === data.id);
	arr.splice(itemIdx, 1, updatedItem);
	localStorage.setItem("cosmos-foods", JSON.stringify(arr));

	cb()
}

export { addToCart, updateQty, cartItems }
