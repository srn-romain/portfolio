function getFGeometry() {
  return [
          // face avant : tuile verticale
          -15,   0,  15, colors[0], colors[1], colors[2],
           15,   0,  15, colors[0], colors[1], colors[2],
          -15, 150,  15, colors[0], colors[1], colors[2],
          -15, 150,  15, colors[0], colors[1], colors[2],
           15,   0,  15, colors[0], colors[1], colors[2],
           15, 150,  15, colors[0], colors[1], colors[2],
          // face avant : grande tuile horizont
           15, 120,  15, colors[0], colors[1], colors[2],
           85, 120,  15, colors[0], colors[1], colors[2],
           15, 150,  15, colors[0], colors[1], colors[2],
           15, 150,  15, colors[0], colors[1], colors[2],
           85, 120,  15, colors[0], colors[1], colors[2],
           85, 150,  15, colors[0], colors[1], colors[2],
          // face avant : petite tuile horizont
           15,  60,  15, colors[0], colors[1], colors[2],
           52,  60,  15, colors[0], colors[1], colors[2],
           15,  90,  15, colors[0], colors[1], colors[2],
           15,  90,  15, colors[0], colors[1], colors[2],
           52,  60,  15, colors[0], colors[1], colors[2],
           52,  90,  15, colors[0], colors[1], colors[2],
          // face arrière : tuile vertic
          -15,   0, -15, colors[2], colors[3], colors[2],
          -15, 150, -15, colors[2], colors[3], colors[2],
           15,   0, -15, colors[2], colors[3], colors[2],
          -15, 150, -15, colors[2], colors[3], colors[2],
           15, 150, -15, colors[2], colors[3], colors[2],
           15,   0, -15, colors[2], colors[3], colors[2],
          // face arrière : grande tuile horizont
           15, 120, -15, colors[2], colors[3], colors[2],
           15, 150, -15, colors[2], colors[3], colors[2],
           85, 120, -15, colors[2], colors[3], colors[2],
           15, 150, -15, colors[2], colors[3], colors[2],
           85, 150, -15, colors[2], colors[3], colors[2],
           85, 120, -15, colors[2], colors[3], colors[2],
          // face arrière : petite tuile horizont
           15,  60, -15, colors[2], colors[3], colors[2],
           15,  90, -15, colors[2], colors[3], colors[2],
           52,  60, -15, colors[2], colors[3], colors[2],
           15,  90, -15, colors[2], colors[3], colors[2],
           52,  90, -15, colors[2], colors[3], colors[2],
           52,  60, -15, colors[2], colors[3], colors[2],

          // face supérieure de la grande barre horizontale
          -15, 150,  15, colors[2], colors[3], colors[2],
           85, 150,  15, colors[2], colors[3], colors[2],
          -15, 150, -15, colors[2], colors[3], colors[2],
          -15, 150, -15, colors[2], colors[3], colors[2],
           85, 150,  15, colors[2], colors[3], colors[2],
           85, 150, -15, colors[2], colors[3], colors[2],

          // extrémité de la grande barre horizontale
           85, 120,  15, colors[3], colors[7], colors[2],
           85, 120, -15, colors[3], colors[7], colors[2],
           85, 150,  15, colors[3], colors[7], colors[2],
           85, 150,  15, colors[3], colors[7], colors[2],
           85, 120, -15, colors[3], colors[7], colors[2],
           85, 150, -15, colors[3], colors[7], colors[2],

          // face inférieure de la grande barre horizontale
           15, 120,  15, colors[3], colors[7], colors[2],
           15, 120, -15, colors[3], colors[7], colors[2],
           85, 120,  15, colors[3], colors[7], colors[2],
           85, 120,  15, colors[3], colors[7], colors[2],
           15, 120, -15, colors[3], colors[7], colors[2],
           85, 120, -15, colors[3], colors[7], colors[2],

          // face séparant les deux barres horizontales
           15,  90,  15, colors[3], colors[7], colors[2],
           15,  90, -15, colors[3], colors[7], colors[2],
           15, 120,  15, colors[3], colors[7], colors[2],
           15, 120,  15, colors[3], colors[7], colors[2],
           15,  90, -15, colors[3], colors[7], colors[2],
           15, 120, -15, colors[3], colors[7], colors[2],

          // face supérieure de la petite barre horizontale
           52,  90,  15, colors[8], colors[1], colors[6],
           52,  90, -15, colors[8], colors[1], colors[6],
           15,  90,  15, colors[8], colors[1], colors[6],
           15,  90,  15, colors[8], colors[1], colors[6],
           52,  90, -15, colors[8], colors[1], colors[6],
           15,  90, -15, colors[8], colors[1], colors[6],

          // extrémité de la petite barre horizontale
           52,  60,  15,  colors[0], colors[9], colors[6],
           52,  60, -15,  colors[0], colors[9], colors[6],
           52,  90,  15,  colors[0], colors[9], colors[6],
           52,  90,  15,  colors[0], colors[9], colors[6],
           52,  60, -15,  colors[0], colors[9], colors[6],
           52,  90, -15,  colors[0], colors[9], colors[6],

          // face inférieure de la petite barre horizontale
           15,  60,  15, colors[0], colors[9], colors[6],
           15,  60, -15, colors[0], colors[9], colors[6],
           52,  60,  15, colors[0], colors[9], colors[6],
           52,  60,  15, colors[0], colors[9], colors[6],
           15,  60, -15, colors[0], colors[9], colors[6],
           52,  60, -15, colors[0], colors[9], colors[6],

          // face latérale sous la petite barre horizontale
           15,   0,  15, colors[0], colors[9], colors[6],
           15,   0, -15, colors[0], colors[9], colors[6],
           15,  60,  15, colors[0], colors[9], colors[6],
           15,  60,  15, colors[0], colors[9], colors[6],
           15,   0, -15, colors[0], colors[9], colors[6],
           15,  60, -15, colors[0], colors[9], colors[6],

          // face inférieure de la barre verticale
          -15,   0,  15, colors[8], colors[1], colors[6],
          -15,   0, -15, colors[8], colors[1], colors[6],
           15,   0,  15, colors[8], colors[1], colors[6],
           15,   0,  15, colors[8], colors[1], colors[6],
          -15,   0, -15, colors[8], colors[1], colors[6],
           15,   0, -15, colors[8], colors[1], colors[6],

          // grande face latérale de la barre verticale
          -15,   0, -15, colors[8], colors[1], colors[6],
          -15,   0,  15, colors[8], colors[1], colors[6],
          -15, 150, -15, colors[8], colors[1], colors[6],
          -15, 150, -15, colors[8], colors[1], colors[6],
          -15,   0,  15, colors[8], colors[1], colors[6],
          -15, 150,  15, colors[8], colors[1], colors[6]
        ];
}
