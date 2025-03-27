// InventoryItem.js represents individual inventory items. You will display their name, type, quantity, and price. You will also conditionally render messages based on stock levels and value.

//Step 4: Create InventoryItem.js (Inventory Component)
/* TODO: Take the props. Set defaults to the quantity. */
function InventoryItem ({name, type, quantity = 0, price = 0})
{
	const lowStockThreshold = 5;
	const valueThreshold = 1000;
	const totalValue = quantity * price;

	//Displays inventory details (name, type, quanity)
	return (
		<div>
			<h2>{name} ({type})</h2>
			<p>Quantity: {quantity} | Price: ${price.toFixed(2)}</p>

			{quantity < lowStockThreshold && (
				<Message>
					<p>Low Stock! Only {quantity} remaining.</p>
				</Message>
			)}
			
			{totalValue > valueThreshold && (
				<Message>
					<p>High Value! Protect from interstellar thieves!</p>
				</Message>
			)}

		</div>
	);
}
