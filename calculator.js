// select the elements
const input_element = document.querySelector(".input");
const output_result_element = document.querySelector(".result .value");
const output_operation_element = document.querySelector(".operation .value");


// create calculator buttons
function createButtons() {
  const btns_per_row = 4;
  let added_btns = 0;

  calculator_buttons.forEach( button => {
    if (added_btns % btns_per_row == 0) {
      input_element.innerHTML += `<div class="row"></div>`;
    }
    const row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id="${button.name}">
                        ${button.symbol}
                      </button>`;
    added_btns++;
  })
}

createButtons();
