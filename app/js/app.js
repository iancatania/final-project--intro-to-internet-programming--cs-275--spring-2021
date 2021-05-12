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



window.onload = () => {

    let diamond = parseInt(prompt('Enter diamond size as a number', '0'));
    let diamondSet = document.querySelector('div');

    if (diamond % 2 != 0) {
      createOddDiamond(diamond);
    }

    let pos = 1;
    let left = diamondSet.offsetLeft;

    setInterval(() => {

        let windowSize = window.innerWidth;
        let width = diamondSet.offsetWidth;

        if (left > windowSize - width) {
            pos = -1;
        }

        if (left < 0) {
            pos = 1;
        }

        left += pos;
        diamondSet.style.left = left + `px`;
    }, 1); //interval for animation set at 1
};
