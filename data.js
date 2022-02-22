var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.9922587093579907,
        "pitch": -0.06713397708071511,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.9922587093579907,
          "pitch": -0.06713397708071511,
          "rotation": 0,
          "target": "1-recepcin"
        },
        {
          "yaw": 1.7113003813509886,
          "pitch": 0.10443339415204278,
          "rotation": 0,
          "target": "19-entrada-parroquia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6479398005590404,
          "pitch": -0.23104904500638312,
          "title": "Recorrido virtual",
          "text": "Para poder navegar hacer clic en los iconos.&nbsp;<div>Para mover la imagen hacer clic con el mouse y sin soltar arrastrar hacia los costados o hacia arriba y abajo.</div>"
        },
        {
          "yaw": 2.736169910514853,
          "pitch": -0.224150731840842,
          "title": "Instituto San Alberto y San Enrique",
          "text": "1922 - 2022&nbsp;<div>En el año del Centenario te invitamos a disfrutar de un recorrido virtual de la Parroquia e Instituto San Alberto y San Enrique.</div><div><br></div><div><br></div><div>Serrano - Pcia de Córdoba.</div>"
        }
      ]
    },
    {
      "id": "1-recepcin",
      "name": "Recepción",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.111109957650454,
        "pitch": 0.025864954843468624,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -0.1098253655457686,
          "pitch": 0.010968849539059633,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 2.265747459649006,
          "pitch": 0.10614586822549299,
          "rotation": 0,
          "target": "3-biblioteca"
        },
        {
          "yaw": 3.019585249657788,
          "pitch": 0.13618633934339286,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.044965181335934,
        "pitch": 0.11668615821785266,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.11052078015088895,
          "pitch": 0.0431288256994975,
          "rotation": 0,
          "target": "1-recepcin"
        },
        {
          "yaw": -1.8413112961327744,
          "pitch": 0.1821640694407769,
          "rotation": 0,
          "target": "4-pasillo-de-directivos"
        },
        {
          "yaw": 1.642549413174999,
          "pitch": 0.21373654126172426,
          "rotation": 0,
          "target": "12-pasillo-de-computacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-biblioteca",
      "name": "Biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.5350884666416658,
        "pitch": 0.03520897617405083,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -0.1445692102868108,
          "pitch": 0.08166732349672756,
          "rotation": 0,
          "target": "1-recepcin"
        },
        {
          "yaw": -2.55958464848144,
          "pitch": 0.044111156512755656,
          "rotation": 0,
          "target": "12-pasillo-de-computacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pasillo-de-directivos",
      "name": "Pasillo de Directivos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.402235692235724,
        "pitch": 0.07433031299340342,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.834734306619267,
          "pitch": 0.1423981417991662,
          "rotation": 0,
          "target": "2-hall"
        },
        {
          "yaw": -2.3309053409297356,
          "pitch": 0.1718565214353056,
          "rotation": 0,
          "target": "5-pasillo-aulas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo-aulas",
      "name": "Pasillo Aulas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.003554506352426,
        "pitch": 0.03294859051691468,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.845333228764469,
          "pitch": 0.10803090606885313,
          "rotation": 0,
          "target": "6-saln-de-2-ao"
        },
        {
          "yaw": 3.1074308563975706,
          "pitch": 0.0382659391598299,
          "rotation": 0,
          "target": "7-patio-cubierto"
        },
        {
          "yaw": 2.907754539203287,
          "pitch": 0.10196316805673611,
          "rotation": 0,
          "target": "11-pasillo-3-ao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-saln-de-2-ao",
      "name": "Salón de 2° Año",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.0387850732689365,
        "pitch": -0.04546415473116738,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.006545074057864753,
          "pitch": 0.14091516418093164,
          "rotation": 0,
          "target": "5-pasillo-aulas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-patio-cubierto",
      "name": "Patio Cubierto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.3560563239215107,
        "pitch": -0.027309526391416483,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.06829222711898097,
          "pitch": 0.07171512612979924,
          "rotation": 0,
          "target": "8-patio-san-francisco"
        },
        {
          "yaw": 1.612088436372483,
          "pitch": 0.03902376801485019,
          "rotation": 0,
          "target": "10-entrada-de-alumnos"
        },
        {
          "yaw": -1.7290960160423303,
          "pitch": 0.04856799910550613,
          "rotation": 0,
          "target": "5-pasillo-aulas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-patio-san-francisco",
      "name": "Patio San Francisco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.088483918619872,
        "pitch": -0.07886173396451213,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.49074085908060994,
          "pitch": -0.02497245520984137,
          "rotation": 0,
          "target": "7-patio-cubierto"
        },
        {
          "yaw": -3.006825664891812,
          "pitch": 0.049149930473118886,
          "rotation": 0,
          "target": "9-escenario"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-escenario",
      "name": "Escenario",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.08315067435784584,
        "pitch": 0.09185931604385544,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -1.2039443385717963,
          "pitch": 0.07864190246904812,
          "rotation": 0,
          "target": "8-patio-san-francisco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-entrada-de-alumnos",
      "name": "Entrada de alumnos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.7606483503259334,
        "pitch": 0.17627057943548863,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.22176904902793382,
          "pitch": 0.005569493561353056,
          "rotation": 0,
          "target": "7-patio-cubierto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pasillo-3-ao",
      "name": "Pasillo 3 Año",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.031062805314743258,
        "pitch": 0.11257702675868231,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -3.078255925529618,
          "pitch": 0.07797227233455573,
          "rotation": 0,
          "target": "5-pasillo-aulas"
        },
        {
          "yaw": 0.07514814926046753,
          "pitch": 0.04195778715324572,
          "rotation": 0,
          "target": "12-pasillo-de-computacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pasillo-de-computacin",
      "name": "Pasillo de Computación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.42251651499081255,
        "pitch": 0.27531823768446806,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.834787264586197,
          "pitch": 0.07304259499893107,
          "rotation": 0,
          "target": "11-pasillo-3-ao"
        },
        {
          "yaw": 3.105549127972731,
          "pitch": 0.1033802327907587,
          "rotation": 0,
          "target": "13-sala-de-informtica"
        },
        {
          "yaw": 0.3818846716859685,
          "pitch": 0.08606869051588362,
          "rotation": 0,
          "target": "14-laboratorio-i"
        },
        {
          "yaw": 0.1881202252339893,
          "pitch": 0.012349583406713549,
          "rotation": 0,
          "target": "3-biblioteca"
        },
        {
          "yaw": 1.4983575652411512,
          "pitch": 0.13239642690903253,
          "rotation": 0,
          "target": "16-parte-antigua-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sala-de-informtica",
      "name": "Sala de Informática",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.2100484904817659,
        "pitch": 0.21343774683488093,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -0.19628359167213993,
          "pitch": 0.03354523124277975,
          "rotation": 0,
          "target": "12-pasillo-de-computacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-laboratorio-i",
      "name": "Laboratorio I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.4338791744740185,
        "pitch": 0.06640593596369371,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": 1.4932769599312854,
          "pitch": 0.04343262210178267,
          "rotation": 0,
          "target": "12-pasillo-de-computacin"
        },
        {
          "yaw": 2.752281837241263,
          "pitch": 0.1528617125283489,
          "rotation": 0,
          "target": "15-laboratorio-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-laboratorio-ii",
      "name": "Laboratorio II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.7679397537485837,
        "pitch": 0.042790344247119805,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": 0.8166669100646615,
          "pitch": 0.03768219532683581,
          "rotation": 0,
          "target": "14-laboratorio-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-parte-antigua-i",
      "name": "Parte antigua I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.7707247716474761,
        "pitch": -0.11004179361839483,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": 1.4884748163443344,
          "pitch": -0.011656678619894834,
          "rotation": 0,
          "target": "12-pasillo-de-computacin"
        },
        {
          "yaw": 0.4836883737370261,
          "pitch": -0.4189666376877774,
          "rotation": 0,
          "target": "18-techo-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-techo-i",
      "name": "Techo I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9359661216693347,
          "pitch": 0.13265996141933734,
          "rotation": 0,
          "target": "18-techo-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-techo-ii",
      "name": "Techo II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.8882608386746931,
        "pitch": -0.018965589765645774,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": 1.6443333697896243,
          "pitch": 0.11823851636340876,
          "rotation": 0,
          "target": "16-parte-antigua-i"
        },
        {
          "yaw": 3.115831407329348,
          "pitch": 0.15966664908443917,
          "rotation": 0,
          "target": "17-techo-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-entrada-parroquia",
      "name": "Entrada Parroquia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.2932143782233503,
        "pitch": -0.10817409804391076,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.596520055752932,
          "pitch": 0.07312185621480083,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 0.07074767780279956,
          "pitch": -0.0887030837574656,
          "rotation": 0,
          "target": "20-saln-parroquial"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4674696220176582,
          "pitch": -0.12160050681333878,
          "title": "Parroquia Asunción de la Santísima Virgen",
          "text": "La iglesia parroquial es obra del reconocido arquitecto de origen noruego Alejandro Christophersen autor, entre otras obras, del Hospital de Niños Dr. Ricardo Gutiérrez, del Palacio San Martín y del afamado Café Tortoni."
        }
      ]
    },
    {
      "id": "20-saln-parroquial",
      "name": "Salón Parroquial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.1143962252089388,
        "pitch": -0.008360627422801414,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.049145745683494724,
          "pitch": 0.009427774868211003,
          "rotation": 0,
          "target": "19-entrada-parroquia"
        },
        {
          "yaw": 3.1085086708473373,
          "pitch": 0.07100406771624179,
          "rotation": 0,
          "target": "22-templo---altar"
        },
        {
          "yaw": 0.37949137683458467,
          "pitch": 0.04150436445197414,
          "rotation": 0,
          "target": "26-escaleras-del-coro"
        },
        {
          "yaw": -0.36891972568763975,
          "pitch": 0.085042460731664,
          "rotation": 0,
          "target": "25-confesionario"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-coro",
      "name": "Coro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.049954772640924,
        "pitch": 0.3645023840471602,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 3.009836580643279,
          "pitch": 0.7064913486910882,
          "rotation": 0,
          "target": "20-saln-parroquial"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-templo---altar",
      "name": "Templo - Altar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07675481823136465,
          "pitch": 0.19744813794354954,
          "rotation": 0,
          "target": "20-saln-parroquial"
        },
        {
          "yaw": -1.7674578287602785,
          "pitch": 0.04793315135132126,
          "rotation": 0,
          "target": "23-mausoleo"
        },
        {
          "yaw": 1.7555060555809607,
          "pitch": 0.049979609720413265,
          "rotation": 0,
          "target": "24-capilla-de-oracin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-mausoleo",
      "name": "Mausoleo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.079266239273493,
        "pitch": 0.03972294747842042,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.05792825556327941,
          "pitch": 0.03841957639165017,
          "rotation": 0,
          "target": "22-templo---altar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-capilla-de-oracin",
      "name": "Capilla de oración",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.104238294319531,
        "pitch": 0.04086555193704733,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.7991320089181642,
          "pitch": 0.10361592423131327,
          "rotation": 0,
          "target": "22-templo---altar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-confesionario",
      "name": "Confesionario",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.1286419012396074,
        "pitch": -0.08359608395589824,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.14641285688705352,
          "pitch": -0.006632873216457114,
          "rotation": 0,
          "target": "20-saln-parroquial"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-escaleras-del-coro",
      "name": "Escaleras del Coro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.400295215333472,
        "pitch": 0.22844167228221934,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -0.4235069798607345,
          "pitch": 0.07088070307290906,
          "rotation": 0,
          "target": "20-saln-parroquial"
        },
        {
          "yaw": -2.7859623067836203,
          "pitch": -1.054297395535059,
          "rotation": 0,
          "target": "21-coro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Recorrido 360 grados",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
