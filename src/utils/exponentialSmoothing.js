// Média exponencial faz com que métricas mais recentes pesem mais que antigas
export default function exponentialSmoothing(values, alpha = 0.5) {
  return values.slice(1).reduce((acc, next) => {
    return alpha * next + (1 - alpha) * acc;
  }, values[0]);
}
