export default function srt(current, processor, queue) {
  


  return {
    onArriveProcess(newProcess) {
      console.log('onArriveProcess')
      
    },
    onProcessEnd() {
      console.log('onProcessEnd')
      
    },
    onQuantum(quantums) {
      console.log('onQuantum', quantums, queue)
    },
    onStart() {
      console.log('onStart')
      
    },
    onStop() {
      console.log('onStop')

    },
  }
}