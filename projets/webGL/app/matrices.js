//=========================================================
// Library: canonical matrices
//=========================================================

function ndc(width, height, near, far) {
  return math.matrix([
    [1/width, 0, 0, 0],
    [0, 1/height, 0, 0],
    [0, 0, 2/(near-far), (near+far)/(near-far)],
    [0, 0, 0, 1]
  ]);
}

function perspective(near, far) {
  return math.matrix([
    [near, 0, 0, 0],
    [0, near, 0, 0],
    [0, 0, near+far, near*far],
    [0, 0, -1, 0]
  ]);
}

function projection(fieldOfViewInRadians, aspect, near, far) {
  const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
  const rangeInv = 1.0 / (near - far);

  return math.matrix([
    [f / aspect, 0, 0, 0],
    [0, f, 0, 0],
    [0, 0, (near + far) * rangeInv, near * far * rangeInv * 2],
    [0, 0, -1, 0]
  ]);
}

function  scaling(sx, sy, sz) {
    return math.matrix([
      [sx, 0,  0,  0],
      [0, sy,  0,  0],
      [0,  0, sz,  0],
      [0,  0,  0,  1]
    ]);
  }

function translation(tx, ty, tz) {
    return math.matrix([
      [ 1,  0,  0,  tx],
      [ 0,  1,  0,  ty],
      [ 0,  0,  1,  tz],
      [ 0,  0,  0,   1]
    ]);
  }

function  xRotation(angleInRadians) {
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);

    return math.matrix([
      [1, 0, 0, 0],
      [0, c, -s, 0],
      [0, s, c, 0],
      [0, 0, 0, 1]
    ]);
  }

function  yRotation(angleInRadians) {
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);

    return math.matrix([
      [c, 0, s, 0],
      [0, 1, 0, 0],
      [-s, 0, c, 0],
      [0, 0, 0, 1]
    ]);
  }

function  zRotation(angleInRadians) {
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);

    return math.matrix([
      [ c, -s, 0, 0],
      [ s, c, 0, 0],
      [ 0, 0, 1, 0],
      [ 0, 0, 0, 1]
    ]);
  }

function cleanArray(arr){
  arr = math.transpose(arr);
  arr = math.flatten(arr);
  arr = arr.valueOf();
  
  return new Float32Array(arr);
}