function zipList(l1, l2) {
  const totL = [];
  for (let i = 0; i < l1.length; i++) {
    totL.push(l1[i]);
    totL.push(l2[i]);
  }
  return totL;
}
function zipListTheSimpleWay(l1, l2) {
  const zipped = _.zip(l1, l2);
  return _.reduceRight(zipped, function (a, b) { return b.concat(a); }, []);
}
const l1 = [1, 2, 3];
const l2 = ['a', 'b', 'c'];
console.log(zipList(l1, l2));
console.log(zipListTheSimpleWay(l1, l2));
console.log('DONE!');
