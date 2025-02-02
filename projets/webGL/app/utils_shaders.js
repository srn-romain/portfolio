//
// Création d'un module de shading et compilation du code
//
function charger_code_shader(gl, type_shader, code_source_shader) {
  // Création d'un module de shading
  const shader = gl.createShader(type_shader);

  // Envoi du code source au shader
  gl.shaderSource(shader, code_source_shader);

  // Compilation du code source
  gl.compileShader(shader);

  // Vérification
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(`Problème de compilation: ${gl.getShaderInfoLog(shader)}`);
    gl.deleteShader(shader);
    
    return null;
  }

  return shader;
}

//
// Création d'un programme de shading et association de modules de shading
//
function creation_programme_shading(gl, shading_modules) {
  // Creation du programme de shading
  const shader_program = gl.createProgram();
  
  // Association de chaque shader au programme
  for(const entry of shading_modules) {
     // [0] => type de shader, [1] => code source
     const shader = charger_code_shader(gl, entry[0], entry[1]);
     
     // Attache le module de shading au programme
     gl.attachShader(shader_program, shader)
  }
  gl.linkProgram(shader_program);

  // Vérification
  if (!gl.getProgramParameter(shader_program, gl.LINK_STATUS)) {
    alert(`Pb init programme de shading : ${gl.getProgramInfoLog(shader_program)}`);
    return null;
  }

  return shader_program;
}