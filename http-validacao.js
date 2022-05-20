/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
import fetch from 'node-fetch';

function manejaErro(erro) {
  throw new Error(erro.message);
}

// eslint-disable-next-line consistent-return
async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async (url) => {
          const res = await fetch(url);
          return res.status;
        }));
    return arrayStatus;
  } catch (erro) {
    manejaErro(erro);
  }
}

function geraArrayURLs(arrayLinks) {
  return arrayLinks
    .map((objetoLink) => Object
      .values(objetoLink).join());
}

export default async function validaURLs(arrayLinks) {
  const links = geraArrayURLs(arrayLinks);
  const statusLinks = await checaStatus(links);

  const resultados = arrayLinks.map((objeto, indice) => ({
    objeto,
    status: statusLinks[indice],
  }));
  return resultados;
}
