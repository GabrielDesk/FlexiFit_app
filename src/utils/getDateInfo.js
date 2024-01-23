export function getDateUtcNow() {
  const currentDate = new Date();
  currentDate.setUTCHours(currentDate.getUTCHours() - 3);

  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  const hours = String(currentDate.getUTCHours()).padStart(2, '0');
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function getFormattedDate() {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');

  return `${day}/${month}/${year}`;
}

export function getDayAtWeek(data) {
  const diasSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const dataAtual = new Date();
  return diasSemana[dataAtual.getDay()];
}
