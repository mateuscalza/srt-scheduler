export default function srt(current, queue) {
  


  return {
    onArriveProcess(newProcess) {
      console.log('onArriveProcess')
      
    },
    onProcessEnd() {
      console.log('onProcessEnd')
      
    },
    onQuantum(quantums) {
      console.log('onQuantum', quantums)
    },
    onStart() {
      console.log('onStart')
      
    },
    onStop() {
      console.log('onStop')

    },
  }
}