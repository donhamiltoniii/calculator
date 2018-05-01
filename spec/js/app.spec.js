describe('Calculator App', function() {
	describe('a number button', function() {
		beforeEach(function() {
			state.operatorOne = '0'
			state.operatorTwo = '0'
			state.result = 0
		})
		describe('should output its value when pressed', function() {
			it("when given a '0' button", function() {
				// Arrange
				var underTest = displayValue
				var testZero = {
					innerText: '0',
				}
				var testOutput = {
					innerText: '',
				}

				// Act
				underTest(testZero, testOutput)
				var expected = testOutput.innerText

				// Assert
				expect(expected).toBe('0')
			})
			it("when given a '1' button", function() {
				// Arrange
				var underTest = displayValue
				var testZero = {
					innerText: '1',
				}
				var testOutput = {
					innerText: '',
				}

				// Act
				underTest(testZero, testOutput)
				var expected = testOutput.innerText

				// Assert
				expect(expected).toBe('1')
			})
			it("when given a '2' button", function() {
				// Arrange
				var underTest = displayValue
				var testZero = {
					innerText: '2',
				}
				var testOutput = {
					innerText: '',
				}

				// Act
				underTest(testZero, testOutput)
				var expected = testOutput.innerText

				// Assert
				expect(expected).toBe('2')
			})
		})

		it("should reset display value if current value is '0'", function() {
			// Arrange
			var underTest = displayValue
			var testDisplay = {
				innerText: '0',
			}
			var testButton = {
				innerText: '6',
			}

			// Act
			underTest(testButton, testDisplay)
			var expected = testDisplay.innerText

			// Assert
			expect(expected).toBe('6')
		})
	})

	describe('the clear button', function() {
		it('clears display when pressed', function() {
			// Arrange
			var underTest = clearDisplay
			var testDisplay = {
				innerText: '666999666',
			}

			// Act
			underTest(testDisplay)
			var expected = testDisplay.innerText

			// Assert
			expect(expected).toBe('0')
		})
	})

	describe('setDisplay', function() {
		describe('should set the value of the display', function() {
			it("to '0' when given a value of '0'", function() {
				// Arrange
				var underTest = setDisplay
				var testDisplay = {
					innerText: '67903',
				}
				var testValue = '0'

				// Act
				underTest(testValue, testDisplay)

				// Assert
				expect(testDisplay.innerText).toBe('0')
			})
			it("to '4' when given a value of '4'", function() {
				// Arrange
				var underTest = setDisplay
				var testDisplay = {
					innerText: '67903',
				}
				var testValue = '4'

				// Act
				underTest(testValue, testDisplay)

				// Assert
				expect(testDisplay.innerText).toBe('4')
			})
			it("to '9' when given a value of '9'", function() {
				// Arrange
				var underTest = setDisplay
				var testDisplay = {
					innerText: '67903',
				}
				var testValue = '9'

				// Act
				underTest(testValue, testDisplay)

				// Assert
				expect(testDisplay.innerText).toBe('9')
			})
		})
	})

	describe('setOperation', function() {
		describe('sets operation', function() {
			it("to add when given '+'", function() {
				// Arrange
				var underTest = setOperation
				var testButton = {
					innerText: '+',
				}

				// Act
				underTest(testButton)
				expected = state.operation

				// Assert
				expect(expected).toBe(sum)
			})
			it("to subtract when given '-'", function() {
				// Arrange
				var underTest = setOperation
				var testButton = {
					innerText: '-',
				}

				// Act
				underTest(testButton)
				expected = state.operation

				// Assert
				expect(expected).toBe(difference)
			})
			it("sets the display value back to '0'", function() {
				// Arrange
				var testDisplay = {
					innerText: '456',
				}
				var testButton = {
					innerText: '+',
				}

				// Act
				setOperation(testButton, testDisplay)

				// Assert
				expect(testDisplay.innerText).toBe('0')
			})
		})
	})

	describe('equals', function() {
		it('sets the value of operatorOne', function() {
			// Arrange
			var testDisplay = {
				innerText: '679',
			}
			state.operatorOne = '0'
			state.operation = sum

			// Act
			equals(testDisplay)

			// Assert
			expect(parseFloat(state.operatorOne)).toBe(testDisplay.innerText)
		})
		it('does the operation', function() {
			// Arrange
			var testDisplay = {
				innerText: '4',
			}
			state.operatorOne = '6'
			state.operation = sum

			// Act
			equals(testDisplay)

			// Assert
			expect(state.result).toBe(10)
		})
	})
})
