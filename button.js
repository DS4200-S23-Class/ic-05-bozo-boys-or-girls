const totalCount = document.getElementById("total__count");

let count = 0;
const incrementCounter = () => {
  count++;
  totalCount.innerHTML = count;
};
