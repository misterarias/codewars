package calculator

class UnsupportedOperationException extends RuntimeException {
    UnsupportedOperationException(String operand) {
        super("Unsupported operand: ${operand}")
    }
}

class Calculator {
    def registry = 0
    def storedOperand = ''

    def reset() { registry = 0 }

    def execute() { return registry }

    def type(int number) {
        if (storedOperand == '+') { registry = registry + number }
        else if (storedOperand == '/') { registry = registry / number }
        else { registry = number }
    }

    def operation(String operand) {
        if (operand == '+' || operand == '/' ) { storedOperand = operand }
        else { throw new UnsupportedOperationException(operand) }
    }
}
