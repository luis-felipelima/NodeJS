import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
  throw new Error(chalk.red(erro));
}

function pegaArquivo(caminho) {
  const encoding = 'utf-8';
  fs.readFile(caminho, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  });
}

pegaArquivo('./arquivos/texto1.md');
