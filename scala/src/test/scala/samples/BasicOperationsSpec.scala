package samples

import org.scalatest.Matchers
import utils.TestHelper

class BasicOperationsSpec extends TestHelper with Matchers {

  "A reduce" should "be a commutative operation" in {
    val chars = 'a'.to('f')
    val fun1 = (op1: Char) => s"$op1$op1"
    val fun2 = (op1: String, op2: String) => s"$op1$op2"

    chars.map(fun1).reduce(fun2) should not be "aabbcceeff"
  }
}
