const bilinear = (x, y, color00, color10, color01, color11) => {
  // BEGIN
  if (x < 0 || x > 1 || y < 0 || y > 1) {
    return undefined;
  }

  return color00 * (1 - x) * (1 - y) +
         color10 * x * (1 - y) +
         color01 * (1 - x) * y +
         color11 * x * y;
  // END
}

export default {
  bilinear
};
