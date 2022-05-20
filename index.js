/* eslint-disable no-shadow */
/* eslint-disable no-console */
import chalk from 'chalk';
import fs from 'fs';

// eslint-disable-next-line no-shadow
function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  // eslint-disable-next-line no-cond-assign
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro, 'não há um arquivo no caminho'));
}

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
export default async function pegaArquivo(caminho) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminho, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

// pegaArquivo('./arquivos/texto1.md');

// function pegaArquivo(caminho) {
//   const encoding = 'utf-8';
//   // eslint-disable-next-line no-console
//   fs.promises.readFile(caminho, encoding)
//     // eslint-disable-next-line no-console
//     .then((texto) => chalk.green(console.log(texto)))
//     .catch((erro) => trataErro(erro));
// }

// function pegaArquivo(caminho) {
//  const encoding = 'utf-8';
//  fs.readFile(caminho, encoding, (erro, texto) => {
//    if (erro) {
//      trataErro(erro);
//    }
//    // eslint-disable-next-line no-console
//    console.log(chalk.green(texto));
//  });
// }
