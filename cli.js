/* eslint-disable no-console */
/* eslint-disable import/extensions */
import chalk from 'chalk';
import pegaArquivo from './index.js';
// eslint-disable-next-line no-unused-vars
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.cyanBright('Links validados'), await validaURLs(resultado));
  } else {
    console.log(chalk.cyanBright('lista de links'), resultado);
  }
}

processaTexto(caminho);
