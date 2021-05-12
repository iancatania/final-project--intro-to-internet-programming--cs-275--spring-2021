let createDiamond = (diamond) => {

  let diamondPrint = ``;

  if (diamond % 2 != 0) {

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
  }

  else if (diamond % 2 == 0) {

    let diamondPrint = ``;

    for (let length = 1; length <= diamond + 1; length += 2) {

        for (let height = 0; height < length; height++) {

            diamondPrint += `*`;

        }

        diamondPrint += `<br>`;
    }

    for (let length = diamond - 1; length > 0; length -= 2) {

        for (let height = 0; height < length; height++) {

            diamondPrint += `*`;

        }

        diamondPrint += `<br>`;
    }
  }

  document.querySelector('div').innerHTML = diamondPrint;

};

let diamondAnimate = (diamondSet) => {

    let pos = 1;
    let left = diamondSet.offsetLeft;
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

};


window.onload = () => {

    let diamond = parseInt(prompt('Enter diamond size as a number', '0'));
    let diamondSet = document.querySelector('div');

    if (diamond > 0) {
      createDiamond(diamond);
    }

    setInterval(() => {

      diamondAnimate(diamondSet);

    }, 1); //interval for animation set at 1 ms)
};
