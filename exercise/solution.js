// BEGIN
const bilinear = (x, y, color00, color01, color10, color11)  {
  // if (x > 1 || x < 0 || y > 1 || y < 0) {
  //    return Undefined;
  // }
  return color00 * (1 - x) * (1 - y) + color10 * x * (1 - y) + color01 * (1 - x) * y + color11 * x * y;
}
// END

export default {
  bilinear
};
