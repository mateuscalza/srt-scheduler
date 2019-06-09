import { RUNNING } from '../utils/states';

// SRT escolhe os Jobs pelo menor tempo restante
export default function srt(jobs) {
  // Seleciona o primeiro job
  let shortestRemainingTimeJob = null;

  // Percorre todos os jobs que não estão finalizados
  jobs
    .filter(job => !job.ended)
    .forEach(job => {
      // Verifica se o job iterado tem um tempo restante menor que o job anterior
      if (
        !shortestRemainingTimeJob ||
        job.remainingTime < shortestRemainingTimeJob.remainingTime
      ) {
        // Se sim, seleciona o job iterado
        shortestRemainingTimeJob = job;
      }
    });

  // Verifica se encontrou um job com o menor tempo restante
  console.log('shortestRemainingTimeJob', shortestRemainingTimeJob);
  if (shortestRemainingTimeJob) {
    // Para todos que estejam rodando que não seja o com menor tempo restante
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
