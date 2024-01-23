import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.70:3000',
});

const keyPixBay = "41696670-36ad9559a8abd5d5de8c5bad0";

const Urls = {
  API_URL: 'http://192.168.15.3:80',
  keyPixBay_API_URL: `https://pixabay.com/api/`,
  keyUnsplash_API_URL: `https://api.unsplash.com/`,
};

export async function UseAPI(
  ControllerMetodo,
  request,
  type = 1,
  dbiType = 1,
) {
  try {
    let response = null;
    let finalUrl = '';

    switch (dbiType) {
      case DBI_TYPE.PIXBAY:
        finalUrl = `${Urls.keyPixBay_API_URL}/${ControllerMetodo}`;
        break;
      case DBI_TYPE.UNSPLASH:
        finalUrl = `${Urls.keyUnsplash_API_URL}/${ControllerMetodo}`;
        break;
      default:
        break;
    }

    switch (type) {
      case HTTP_ACTIONS.POST:
        response = await axios.post(finalUrl, request);
        break;
      case HTTP_ACTIONS.GET:
        response = await axios.get(finalUrl, request ?? {});
        break;
      default:
        response = await axios.get(finalUrl, request ?? {});
        break;
    }
    return response.data ?? { Sucesso: false, Data: undefined };
  } catch (error) {
    console.log(error);
    return { Sucesso: false };
  }
}

export const HTTP_ACTIONS = {
  POST: 1,
  GET: 2,
  FORM_DATA: 3,
  FETCH_BLOB: 4,
};

export const DBI_TYPE = {
  PIXBAY: 1,
  UNSPLASH: 2,
};

// Função para gerar um número aleatório entre um intervalo específico
// export function getRandomNumber(min = 10000, max = 20000) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
