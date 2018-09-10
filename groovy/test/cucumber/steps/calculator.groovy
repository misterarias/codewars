// Add functions to stack hooks and steps to this script.
this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

import cucumber.api.PendingException

/**
 * Global class, instantiated from the 'World' closure,
 * that makes global variables and methods to the
 * Cucumber steps
 */
class CustomWorld  {

    def initSut(String pluginName) {
        def scriptName = "vars/${pluginName}.groovy";
        pluginUnderTest = new GroovyShell().parse(new File(scriptName));
    }

    // Holds a global reference to the Plugin under test
    def pluginUnderTest

    // Global reference to result to check
    def operationResult

    // Exception-raised flag
    def exceptionRaised
}

World {
    new CustomWorld()
}

Before() {
    // Brings the code under test in
    initSut('calc')

    // Now we can call its 'init' method, just like Jenkins would do
    pluginUnderTest.call( {} )
}

Given(~/^an empty state$/) { ->
    pluginUnderTest.theCalculator.reset()
}

When(~/^I type a (\d+)$/) { int number ->
    pluginUnderTest.theCalculator.type number
}

When(~/^I press '(.)'$/) { String operand ->
    try {
        pluginUnderTest.theCalculator.operation operand
    } catch (calculator.UnsupportedOperationException upe) {
        exceptionRaised = upe
    }
}

Then(~/^I should get (\d+)$/) { int result ->
    assert result == pluginUnderTest.theCalculator.execute()
}

Then(~/^I should get (\d+.\d+)$/) { double result ->
    assert result == pluginUnderTest.theCalculator.execute()
}

Then(~/^I should get an operation error$/) { ->
    assert exceptionRaised != null
    assert exceptionRaised.message == "Unsupported operand: *"
}


