1584087498619;

function mills2dt(mill) {
  const d = new Date(mill);

  const year = d.getFullYear();
  const mm2 = leftpadding(d.getMonth() + 1, 2);
  const dd2 = leftpadding(d.getDay(), 2);
  const result = year + "-" + mm2 + "-" + dd2;
  console.log(result);
  return result;
}

console.log(mills2dt(1584087498619) === "2020-03-13");

console.log(mills2dt(1584087498619 + 8640000) === "2020-03-14");

console.log(leftpadding("", 3)); // 001

console.log(leftpadding(1, 3)); // 001

console.log(leftpadding(11, 3)); // 011

console.log(leftpadding(113, 3)); // 113

function leftpadding(x, y) {
  const str = "" + x;
  let xlen = str.length;
  if (xlen === y) return str;
  else if (xlen === y - 1) return "0" + str;
  else if (xlen === y - 2) return "00" + str;
  else if (xlen === y - 3) return "000" + str;
}

console.log(leftpadding("", 3)); // 001
console.log(leftpadding(1, 3)); // 001
console.log(leftpadding(11, 3)); // 011
console.log(leftpadding(113, 3)); // 113

function leftpadding(x, y) {
  const str = "" + x;
  let xlen = str.length;
  if (xlen === y) return str;
  else if (xlen === y - 1) return "0" + str;
  else if (xlen === y - 2) return "00" + str;
  else if (xlen === y - 3) return "000";
}

console.log(mills2dt(1584087498619));

function mills2dt(mill) {
  const d = new Date(mill);

  return (
    d.getFullYear() +
    "-" +
    leftpadding(d.getMonth(), 2) +
    "-" +
    leftpadding(d.getDay(), 2)
  );
}
