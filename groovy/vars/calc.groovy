def theCalculator

import calculator.Calculator

def call(Closure body){
    def config = [:]
    body.resolveStrategy = Closure.DELEGATE_FIRST
    body.delegate = config
    body()

    theCalculator = new Calculator()
}
