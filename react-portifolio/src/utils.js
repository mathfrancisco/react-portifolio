/**
 * Função para obter o endereço de uma imagem.
 * @param {string} path - O nome da imagem.
 * @returns {string} O endereço da imagem.
 */
export const getImageUrl = (path) => {
  return new URL(`./assets/${path}`, import.meta.url).href;
};
