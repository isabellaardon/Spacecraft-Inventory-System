// App.js is the main component that you will use to aggregate the inventory list, rendering InventoryItem components for each item in the inventory.


//BIG PICTURE: Spacecraft Inventory System for each item on spacecraft has name, type, quantity and price
//1. List inventory items like food
//2. Each item will have default quantity and price
//3. If Low Stock(less than 5) show warning message
//4. If High Value (total value>$1000) show security alert
//5. Displayed in organized format using React components and props

//STEP 1: SetUp: Quick=HTML file not full React App
//Use CDN links for React, ReactDOM and babel in index.html
//Write each React component in seperate files
// spacecraft-inventory/
// │── index.html       (Main HTML file)
// │── App.js           (Main component that lists inventory items)
// │── InventoryItem.js (Component for each inventory item)
// │── Message.js       (Component for warning messages)


// STEP 2: Write index.html (Load React & Babel)
//STEP 5: Create App.js (Main Inventory List)
function App ()
{
	const inventoryItems = [
		{name: "Oxygen Tank", type: "Equipment", quantity: 3, price: 150.00},
		{name: "Freeze-Dried Ice Cream", type: "Food", quantity: 20, price: 5.99},
		{name: "Space Suit", type: "Equipment", quantity: 2, price: 2500.00},
		{name: "Water Filter", type: "Tool", quantity: 5, price: 75.50},
		{name: "Solar Panel", type: "Equipment", quantity: 10, price: 300.00},
		{name: "Navigation Module", type: "Technology", price: 1200.00},
		{name: "First Aid Kit", type: "Medical", quantity: 4, price: 22.35},
		{name: "Hydroponic Seeds", type: "Food", quantity: 30, price: 10.00},
		{name: "Communication Radio", type: "Technology", quantity: 3, price: 199.99},
		{name: "Thruster Fuel", type: "Fuel", quantity: 50, price: 45.00}
	];

	return (
		<div>
			<h1>Spacecraft Inventory</h1>
			<ol>

				{inventoryItems.map((item, index) => (
					<li key={index}>
						<InventoryItem
						name={item.name}
						type={item.type}
						quantity={item.quantity}
						price={item.price}

						/>
					</li>
				))}
			</ol>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

// Stores a list of inventory items (name, type, quantity, price).

// Loops through each item using .map() and passes it as props to InventoryItem.

// Renders everything inside the webpage using ReactDOM.render().

