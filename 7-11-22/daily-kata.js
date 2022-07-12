//Logical calculator
//
//Your Task
//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
//Examples
//
//booleans = [True, True, False], operator = "AND"
//
//
//True AND True  -> True
//True AND False -> False
//return False
//
//
//booleans = [True, True, False], operator = "OR"
//
//
//True OR True  -> True
//True OR False -> True
//return True
//
//
//booleans = [True, True, False], operator = "XOR"
//
//
//True XOR True  -> False
//False XOR False -> False
//return False
//
//Input
//
//an array of Boolean values (1 <= array_length <= 50)
//a string specifying a logical operator: "AND", "OR", "XOR"
//
//Output
//A Boolean value (True or False).

function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}