import * as math from 'mathjs';

// Estima o tempo restante
export function estimateRemainingTime(job) {
  // Busca os dados armazenados
  const currentTimesStorage = localStorage.getItem(job.id);

  // Se não houver precedentes, esperado que o tempo seja infinito
  if (!currentTimesStorage) {
    return Infinity;
  }

  // Converte para um Array
  const currentTimes = JSON.parse(currentTimesStorage);

  // Faz a média do tempo de execução
  const commonElapsedTime = math.divide(
    math.sum(...currentTimes),
    currentTimes.length
  );

  // Descobre o tempo restante diminuindo o que já foi rodado do prazo estimado
  const remainingTime = commonElapsedTime - job.elapsedTime;

  console.info(`Job ${job.name} estimado em ${commonElapsedTime} quantuns.`);

  return remainingTime;
}

// Salva nova métrica no armazenamento
export function saveMetric(job) {
  // Busca os atuais
  const currentTimesStorage = localStorage.getItem(job.id);
  const currentTimes = currentTimesStorage
    ? JSON.parse(currentTimesStorage)
    : [];

  // Junta com o novo
  const newTimes = [...currentTimes, job.elapsedTime];

  // Limita para os 15 resultados mais recentes
  const lastNewTimes = newTimes.slice(Math.max(newTimes.length - 15, 0));

  // Salva
  localStorage.setItem(job.id, JSON.stringify(lastNewTimes));
}
