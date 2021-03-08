const compareImages = require("resemblejs/compareImages");
const fs = require("fs");
const directory = "../screenshots/";
let resultInfo = {};
let arrJ = [];
let html = "";

let now = new Date().toISOString().replace(/:/g, ".");

async function executeTest() {
  let resultInfo = {};

  fs.readdir(directory, (err, files) => {
    files.forEach((file) => {
      if (file != undefined) {
        fs.readdir(directory + "/" + file, (err, files) => {
          files.forEach((file1) => {
            fs.readdir(directory + "/" + file + "/" + file1, (err, files2) => {
              if (files2 != undefined) {
                arrJ = files2;
                prueba(files2, file1, file);
              }
            });
          });
        });
      }
    });
  });

  async function prueba(nameFile, folder, folderScenario) {
    const data = await compareImages(
      fs.readFileSync(
        `../screenshots/${folderScenario}/${folder}/${nameFile[0]}`
      ),
      fs.readFileSync(
        `../screenshots/${folderScenario}/${folder}/${nameFile[1]}`
      )
    );

    fs.writeFileSync(
      `../screenshots/${folderScenario}/${folder}/compare/compare-${folder}.png`,
      data.getBuffer()
    );

    resultInfo = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime,
    };

    html += browser(
      now,
      resultInfo,
      `../screenshots/${folderScenario}/${folder}/${nameFile[0]}`,
      `../screenshots/${folderScenario}/${folder}/${nameFile[1]}`,
      `../screenshots/${folderScenario}/${folder}/compare/compare-${folder}.png`
    );

    fs.writeFileSync(`../results/report.html`, createReport(html));
    //fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
  }
}
(async () =>
  console.log(
    await executeTest().catch((e) => {
      console.log(e);
    })
  ))();

function browser(
  datetime,
  info,
  imagenOrigen,
  imagenReferencia,
  imagenCompare
) {
  return `
		<body>
			<form id="form1">
			  <div class="div-table">
			    <div class="btitle">
					<h2>Browser: </h2>
					<br>
				</div>
					 <div class="div-table-row">
                     <div class="div-table-col" align="center"><strong>Fecha Ejecución</strong></div>
                     <div  class="div-table-col"><strong>Imagen Base</strong></div>
                     <div  class="div-table-col"><strong>Imagen Modificada</strong></div>
                     <div  class="div-table-col"><strong>Diferencias</strong></div>
                     <div  class="div-table-col"><strong>Descripción</strong></div>
                  </div>
					<div class="div-table-row">
						<div class="div-table-col">${datetime} </div>
						<div class="div-table-col"> <img class="img2 zoom" src="${imagenReferencia}" id="refImage" label="Reference"></div>
						<div class="div-table-col">   <img class="img2 zoom" src="${imagenOrigen}" id="testImage" label="Test"></div>
						<div class="div-table-col">   <img class="imgfull" src="${imagenCompare}" id="diffImage" label="Diff"></div>
						<div class="div-table-col">Data: ${JSON.stringify(info)}</div>
					</div>
			  </div>
			</form>
			</body>
        </body>`;
}

function createReport(html) {
  return `
    <html>
        <head>
            <title> Pruebas de Regresión Visual </title>
            <link href="index.css" type="text/css" rel="stylesheet">
			<!-- Latest compiled and minified CSS -->
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
			<!-- jQuery library -->
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			<!-- Latest compiled JavaScript -->	
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        <body>
            <h1>Pruebas de Regresión Visual
                  <a></a>
            </h1>
			<br>
			<body>
            <div id="visualizer">
            ${html}
            </div>
			</body>
        </body>
    </html>`;
}
