var numberButtons = $$('.num-button')
var display = $('.display')
var operations = ['add', 'subtract', 'multiply', 'divide']

// APP STATE
var state = {
	operatorOne: '0',
	operatorTwo: '0',
	operation: function() {
		return 'no operation selected'
	},
	result: 0,
}

// APP LOGIC
function outputButtonValues() {
	numberButtons.forEach(function(numberButton) {
		on(numberButton, 'click', function() {
			displayValue(numberButton, display)
		})
	})
	on($('.clear'), 'click', function() {
		clearDisplay(display)
	})
	operations.forEach(function(operation) {
		on($(`.${operation}`), 'click', function() {
			setOperation(this, display)
		})
	})
	on($('.equals'), 'click', function() {
		equals(display)
	})
}

// UTILITY FUNCTIONS
function $(elem) {
	return document.querySelector(elem)
}
function $$(elems) {
	return document.querySelectorAll(elems)
}
function on(elem, event, callback) {
	if (Boolean(elem)) {
		elem.addEventListener(event, callback)
	}
}
function clearDisplay(displayId) {
	state.operatorOne = '0'
	state.operatorTwo = '0'
	// state.result = '0'
	displayId.innerText = state.operatorOne
}
function displayState() {
	for (prop in state) {
		console.log(state[prop])
	}
}
function displayValue(buttonId, outputId) {
	if (state.operation() === 'no operation selected') {
		if (state.operatorOne === '0') state.operatorOne = ''
		state.operatorOne += buttonId.innerText
		outputId.innerText = state.operatorOne
	} else {
		if (state.operatorTwo === '0') state.operatorTwo = ''
		state.operatorTwo += buttonId.innerText
		outputId.innerText = state.operatorTwo
	}
}
function equals(display) {
	state.operatorTwo = display.innerText
	state.result = state.operation(
		parseFloat(state.operatorOne),
		parseFloat(state.operatorTwo),
	)
	display.innerText = state.result
	state.operation = function() {
		return 'no operation selected'
	}
	state.operatorTwo = '0'
	state.operatorOne = state.result
	// clearDisplay(display)
}
function setDisplay(value, display) {
	if (display) display.innerText = value
}
function setOperation(button, display) {
	switch (button.innerText) {
		case '+':
			state.operation = sum
			break
		case '-':
			state.operation = difference
			break
		case '*':
			state.operation = product
			break
		case '/':
			state.operation = quotient
			break
		default:
			state.operation = function() {
				return 'This is not a valid argument'
			}
	}
	setDisplay('0', display)
}

// RUN
function run() {
	setDisplay(state.operatorOne, display)
	outputButtonValues()
}

run()
