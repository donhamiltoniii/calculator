describe('canary', function() {
	it('should run a test', function() {
		expect(true).toBe(true)
	})
})

describe('Calculator', function() {
	describe('Addition', function() {
		describe('should add two numbers:', function() {
			it('3 when passed 1 and 2', function() {
				// Arrange
				// Act
				var underTest = sum(1, 2)
				// Assert
				expect(underTest).toBe(3)
			})
			it('5 when passed 2 and 3', function() {
				// Arrange
				// Act
				var underTest = sum(2, 3)
				// Assert
				expect(underTest).toBe(5)
			})
			it('7 when passed 3 and 4', function() {
				// Arrange
				// Act
				var underTest = sum(3, 4)
				// Assert
				expect(underTest).toBe(7)
			})
		})
	})

	describe('Subtraction', function() {
		describe('should subtract two numbers:', function() {
			it('1 when passed 2 and 1', function() {
				// Arrange
				// Act
				var underTest = difference(2, 1)
				// Assert
				expect(underTest).toBe(1)
			})
			it('2 when passed 3 and 1', function() {
				// Arrange
				// Act
				var underTest = difference(3, 1)
				// Assert
				expect(underTest).toBe(2)
			})
			it('3 when passed 4 and 1', function() {
				// Arrange
				// Act
				var underTest = difference(4, 1)
				// Assert
				expect(underTest).toBe(3)
			})
		})
	})

	describe('Multiplication', function() {
		describe('should multiply two numbers:', function() {
			it('4 when passed 2 and 2', function() {
				// Arrange
				// Act
				var underTest = product(2, 2)
				// Assert
				expect(underTest).toBe(4)
			})
			it('9 when passed 3 and 3', function() {
				// Arrange
				// Act
				var underTest = product(3, 3)
				// Assert
				expect(underTest).toBe(9)
			})
			it('12 when passed 3 and 4', function() {
				// Arrange
				// Act
				var underTest = product(3, 4)
				// Assert
				expect(underTest).toBe(12)
			})
		})
	})

	describe('Division', function() {
		describe('should divide two numbers:', function() {
			it('2 when passed 4 and 2', function() {
				// Arrange
				// Act
				var underTest = quotient(4, 2)
				// Assert
				expect(underTest).toBe(2)
			})
			it('3 when passed 6 and 2', function() {
				// Arrange
				// Act
				var underTest = quotient(6, 2)
				// Assert
				expect(underTest).toBe(3)
			})
			it('4 when passed 20 and 5', function() {
				// Arrange
				// Act
				var underTest = quotient(20, 5)
				// Assert
				expect(underTest).toBe(4)
			})
		})
	})
})
