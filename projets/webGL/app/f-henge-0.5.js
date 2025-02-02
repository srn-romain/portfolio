// version 0.5 : question 1 de l'exercice 1 (révisions du TP1)
"use strict";

//====================================
// Récupération canvas + WebGL
//====================================
const canvas = document.querySelector("canvas");

const gl = canvas.getContext("webgl2");
if (!gl) {
  throw new Error("No WebGL for you!");
}

//====================================
// Création et Association des shaders
//====================================
const vertex_GLSL = `#version 300 es
in vec3 a_position;
uniform mat4 m_projection;
uniform mat4 m_translate;
uniform mat4 m_camera;

in vec3 a_color;
out vec4 v_color;

void main() {
  gl_Position = m_projection * m_camera * m_translate * vec4(a_position,1);
  v_color = vec4(a_color,1);
}
`;

const fragment_GLSL = `#version 300 es
precision highp float;

in vec4 v_color;
out vec4 outColor;

void main() {
  outColor = v_color;
}
`;

const prg = creation_programme_shading(gl, [
  [gl.VERTEX_SHADER, vertex_GLSL],
  [gl.FRAGMENT_SHADER, fragment_GLSL],
]);

// Localisation des attributs
const positionLocation = gl.getAttribLocation(prg, "a_position");
const colorLocation = gl.getAttribLocation(prg, "a_color");

//====================================
// Création des buffers
//====================================
// Pour chaque attribut, définir un buffer de données
// et spécifier le parcours des données du buffer
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array(getFGeometry()),
  gl.STATIC_DRAW
);
gl.enableVertexAttribArray(positionLocation);
gl.enableVertexAttribArray(colorLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 6 * 4, 0);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

const matrix_projection = gl.getUniformLocation(prg, "m_projection");
const matrix_translate = gl.getUniformLocation(prg, "m_translate");
const matrix_camera = gl.getUniformLocation(prg, "m_camera");
//====================================
// Dessin de l'image
//====================================

// Spécifier le programme utilisé (i.e. les shaders utilisés)
gl.useProgram(prg);

const RAD = Math.PI / 180

function draw() {
  const time = performance.now() * 0.001;
  let lastTime = time;
  const deltaTime = time - lastTime;

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.5, 0.7, 1.0, 1.0); // couleur du canvas et non du viewport
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);

  const primitiveType = gl.TRIANGLES;
  const offset = 0;
  const count = 96; // 16 tuiles de 2 triangles avec 3 vertices chacun

  let u_projectionMatrix = projection(
    degToRad(60),
    canvas.width / canvas.height,
    1,
    1000
  );
  u_projectionMatrix = cleanArray(u_projectionMatrix);
  //console.log(u_projectionMatrix);

  let u_modelViewMatrix = translation(0, 0, -400); // translation objet
  u_modelViewMatrix = cleanArray(u_modelViewMatrix);

  let cameraMatrix = xRotation(degToRad(-20)); // transformation caméra
  cameraMatrix = math.multiply(
    cameraMatrix,
    yRotation(degToRad(0)),
    translation(0, 50, 700)
  );
  cameraMatrix = math.inv(cameraMatrix);
  cameraMatrix = cleanArray(cameraMatrix);
  gl.uniformMatrix4fv(matrix_camera, false, cameraMatrix);

  gl.uniformMatrix4fv(matrix_projection, false, u_projectionMatrix);
  gl.uniformMatrix4fv(matrix_translate, false, u_modelViewMatrix);

  const radius = 200;
  const numCopies = 10;

  for (let i = 0; i < numCopies; i++) {
    const angle = (i / numCopies) * 2 * Math.PI + time;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    const rotationY = -angle + degToRad(90)

    let u_modelViewMatrix = math.multiply(
      translation(x, 0, z),
      yRotation(rotationY),
      xRotation(time * 100 * RAD + (i * 0.6))
    );
    u_modelViewMatrix = cleanArray(u_modelViewMatrix);

    gl.uniformMatrix4fv(matrix_translate, false, u_modelViewMatrix);
    gl.drawArrays(primitiveType, offset, count);
  }

  requestAnimationFrame(draw);
}

draw();
