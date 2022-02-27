import React, { useState } from "react";

export const UserInput = () => {
	const [listItem, setListItem] = useState("");
	const handleListItem = (event) => {
		setListItem(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				className="item userInput"
				placeholder="What needs to be done?"
				onChange={handleListItem}
			/>
			<input type="text" className="item" value={listItem} />
			<input type="text" className="item itemsLeft" />
		</div>
	);
};
