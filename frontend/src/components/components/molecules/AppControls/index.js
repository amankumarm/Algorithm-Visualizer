import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

import Button from "../../atoms/Button";
import Switch from "../../atoms/Switch";
import Menu from "../../molecules/Menu";
import { Link } from "react-router-dom";

// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

const AppControls = ({
	algorithm,
	onAlgorithmChange,
	onGenerateRandomArray,
	onGenerateInputArray,
	arraySize,
	onArraySizeChange,
	onToggleDarkMode,
	darkMode,
}) => {
	const [showGen, setshowGen] = useState(false);

	const Generator = () => {
		return (
			<>
				{/* <Generate show={showGen} onHide={() => setshowGen(false)} /> */}
			</>
		);
	};

	// const sleep = (ms) => {
	// 	return new Promise((resolve) => setTimeout(resolve, ms));
	// };

	const handleSubmit = (event) => {
		var arrText = event.target.childNodes[0].childNodes[0].value;
		const arr = arrText.split(" ").map(Number);
		onGenerateInputArray(arr);
		setshowGen(false);
	};

	// const Generate = (props) => {
	// 	return (
	// 		<Modal
	// 			{...props}
	// 			size="lg"
	// 			aria-labelledby="contained-modal-title-vcenter"
	// 			backdrop="static"
	// 			keyboard={false}
	// 		>
	// 			<Modal.Header closeButton>
	// 				<Modal.Title id="contained-modal-title-vcenter">
	// 					User Input
	// 				</Modal.Title>
	// 			</Modal.Header>
	// 			<Modal.Body>
	// 				<p>Please enter array:</p>
	// 				<Form onSubmit={handleSubmit}>
	// 					<Form.Group controlId="formBasicEmail">
	// 						<Form.Control type="text" placeholder="Enter array" />
	// 					</Form.Group>
	// 					<Button
	// 						variant="primary"
	// 						onSubmit={(e) => {
	// 							handleSubmit(e);
	// 							props.onHide();
	// 						}}
	// 					>
	// 						Submit
	// 					</Button>
	// 				</Form>
	// 			</Modal.Body>
	// 			<Modal.Footer>
	// 				<Button onClick={props.onHide}>Close</Button>
	// 			</Modal.Footer>
	// 		</Modal>
	// 	);
	// };

	const input = Generator();

	return (
		<Fragment>
			
			<Button
				variant="primary"
				onClick={() => {
					setshowGen(true);
				}}
			>
				Take user input
			</Button>
			{showGen && input}

			<Menu
				placeholder="Sort Algorithm"
				items={[
					"Bubble Sort",
					"Selection Sort",
					"Insertion Sort",
					"Merge Sort",
					"Quick Sort",
					"Quick Sort 3",
					"Heap Sort",
					"Shell Sort",
				]}
				selected={algorithm}
				onSelect={onAlgorithmChange}
			/>

			<div className="AppControls__Size">
				<span>Size</span>
				<Menu
					placeholder="Array Size"
					items={["5", "10", "25", "50", "75", "100"]}
					selected={String(arraySize)}
					onSelect={onArraySizeChange}
				/>
			</div>

			<Button onClick={onGenerateRandomArray}>Randomize</Button>

			<Switch
				label="Dark Mode"
				onSwitch={onToggleDarkMode}
				checked={darkMode}
			/>
		</Fragment>
	);
};

AppControls.propTypes = {
	algorithm: PropTypes.string,
	onAlgorithmChange: PropTypes.func.isRequired,
	onGenerateRandomArray: PropTypes.func.isRequired,
	arraySize: PropTypes.number,
	onArraySizeChange: PropTypes.func.isRequired,
	onToggleDarkMode: PropTypes.func.isRequired,
	darkMode: PropTypes.bool,
};

export default AppControls;
