import { UseAPI } from '../../ApiUsage'; 

const keyPixBay = "41696670-36ad9559a8abd5d5de8c5bad0";
const keyUnsplash = "Q-t7a-uXwRxwlp0f8Q8CtRr3FtI0FUu-6ZmfFrrVzNg";

const customParameters = [
    "nature",
];

const imgType = "photo";
const orientationType = "vertical";


const urlToImagesPixBay = `?key=${keyPixBay}&q=${customParameters}&image_type=${imgType}&pretty=true&orientation=${orientationType}&per_page=200`;

// const Actions = ENDPOINTS.CONTROLLERS.PAINT_CONFIG_CONTROLLER.ACTIONS;

export async function getImagesFromPixBay() {
  try {
    const request = {};

    const response = await UseAPI(urlToImagesPixBay, request, 2, 1);

    // Verificar se a resposta possui um erro
    if (response.error) {
      console.error('Erro ao buscar dados usando fetchData:', response.error);
      return { success: false, error: response.error }; // Retornar detalhes do erro
    }

    // Se não houver erro, retornar os dados
    return { success: true, data: response };
  } catch (error) {
    console.error('Erro na solicitação:', error);
    return { success: false, error: error.message }; // Retornar detalhes do erro
  }
}

export async function getRandomImagesFromUnsplash(paramPage) {
  try {
    const request = {};
    const urlToImagesUnsplash = `photos?page=${paramPage}&client_id=${keyUnsplash}`;

    const response = await UseAPI(urlToImagesUnsplash, request, 2, 2);
    // console.log(response)

    // Verificar se a resposta possui um erro
    if (response.error) {
      console.error('Erro ao buscar dados usando fetchData:', response.error);
      return { success: false, error: response.error }; // Retornar detalhes do erro
    }

    // Se não houver erro, retornar os dados
    return { success: true, data: response };
  } catch (error) {
    console.error('Erro na solicitação:', error);
    return { success: false, error: error.message }; // Retornar detalhes do erro
  }
}
