/* */
// gomb
let submitbutton = document.querySelector("button");
submitbutton.onclick = () => {
  costOfTravel.dataIn();
};
// fogyasztasszamolo OBJ
let costOfTravel = {
  km: null,
  gasPrice: null,
  consumption: null,
  calcOfTravelCost: function () {
    this.sum = Math.round((this.km / 100) * this.consumption * this.gasPrice);
    console.log(this.sum);
    return this.sum;
  },
  dataIn: function () {
    this.km = document.getElementById("tav").value;
    this.consumption = document.getElementById("fogyasztas").value;
    this.gasPrice = document.getElementById("uzemanyagAr").value;
    if (this.km && this.consumption && this.gasPrice > 0) {
      costOfTravel.calcOfTravelCost();
      costOfTravel.dataOut();
    } else {
      alert(`Add meg az adatokat!`);
    }
  },
  sum: 0,
  dataOut: function () {
    let finalOut = document.getElementById("eredmeny");
    let result = this.sum.toLocaleString();
    finalOut.textContent = `Az útiköltség: ${result}ft`;
  },
};
