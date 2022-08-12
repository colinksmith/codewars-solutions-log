//Are there any arrows left?
//
//Check your arrows
//You need to verify that you have some good ones left, in order to prepare for battle:
//anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
//
//anyArrows([{'range': 5}, {'range': 10, 'damaged': True}, {'damaged': True}])
//
//anyArrows([{range=> 5}, {range=> 10, damaged=> true}, {damaged=> true}])
//
//any_arrows?([%{"range" => 5}, %{"range" => 10, "damaged" => true}, %{"damaged" => true}])
//
//If an arrow in the quiver does not have a damaged status, it means it's new.
//The expected result is a boolean, indicating whether you have any good arrows left.
//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function anyArrows(arrows){
    // arrow it
    return arrows.some(arrow => {
      return (!arrow.damaged)
    });
  }