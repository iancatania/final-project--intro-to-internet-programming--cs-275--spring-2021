let createOddDiamond = (diamond) => {

  let diamondPrint = ``;

  for (let length = 1; length <= diamond; length += 2) {

      for (let height = 0; height < length; height++) {

          diamondPrint += `*`;

      }

      diamondPrint += `<br>`;      
  }

  for (let length = diamond - 2; length > 0; length -= 2) {

      for (let height = 0; height < length; height++) {

          diamondPrint += `*`;

      }

      diamondPrint += `<br>`;
  }

  document.querySelector('div').innerHTML = diamondPrint;

};

let createEvenDiamond = (diamond) => {

};

let diamondAnimate = () => {

};

window.onload = () => {

    let diamond = parseInt(prompt('Enter diamond size as a number', '0'));

    if (diamond % 2 != 0) {
      createOddDiamond(diamond);
    }

    else {
      createEvenDiamond(diamond);
    }

    diamondAnimate;
};
