import { RUNNING } from '../utils/states';
import { estimateRemainingTime } from '../utils/timeEstimation';

// SRT escolhe os Jobs pelo menor tempo restante
export default function srt(jobs) {
  // Variável para armazenar o job com menor tempo restante
  let shortestRemainingTimeJob = null;

  // Percorre todos os jobs que não estão finalizados
  jobs
    .filter(job => !job.ended)
    .forEach(job => {
      // Verifica se o job iterado tem um tempo restante menor que o job anterior
      // Usa a função estimateRemainingTime para estimar o tempo restante
      if (
        !shortestRemainingTimeJob ||
        estimateRemainingTime(job) <
          estimateRemainingTime(shortestRemainingTimeJob)
      ) {
        // Se sim, seleciona o job iterado
        shortestRemainingTimeJob = job;
      }
    });

  // Verifica se encontrou um job com o menor tempo restante
  if (shortestRemainingTimeJob) {
    // Para todos que estejam rodando que não seja o com menor tempo restante
    // Provando então a preemptividade do escalonador!
    jobs
      .filter(
        job => job.currentState === RUNNING && job !== shortestRemainingTimeJob
      )
      .forEach(job => job.block());

    // Roda o que tem o menor tempo restante
    shortestRemainingTimeJob.dispatch();
  }

  return jobs;
}
