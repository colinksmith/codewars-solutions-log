//Linked Lists - Push & BuildOneTwoThree
//
//Linked Lists - Push & BuildOneTwoThree
//Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.
//Here's an example of push() usage:
//var chained = null
//chained = push(chained, 3)
//chained = push(chained, 2)
//chained = push(chained, 1)
//push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
//
//The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.
//The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null
//Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count
// Linked Lists - Get Nth Node
//Linked Lists - Insert Nth Node
//Linked Lists - Sorted Insert
//Linked Lists - Insert Sort
//Linked Lists - Append
//Linked Lists - Remove Duplicates
//Linked Lists - Move Node
//Linked Lists - Move Node In-place
//Linked Lists - Alternating Split
//Linked Lists - Front Back Split
//Linked Lists - Shuffle Merge
//Linked Lists - Sorted Merge
//Linked Lists - Merge Sort
//Linked Lists - Sorted Intersect
//Linked Lists - Iterative Reverse
//Linked Lists - Recursive Reverse
//Inspired by Stanford Professor Nick Parlante's excellent Linked List teachings.
//I'm aware that there are better ways to create linked lists (class methods, reference pointers, etc.), but not all languages have the same features. I'd like to keep the basic API consistent between language translations for this kata.

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    return {data: data, next: head}
  }
  
  function buildOneTwoThree() {
    output = push(null, 3)
    output = push(output, 2)
    output = push(output, 1)
    return output
  }