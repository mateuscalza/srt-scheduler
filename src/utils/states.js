export const READY = 0
export const RUNNING = 1
export const BLOCKED = 2

export const styles = {
  [READY]: {
    backgroundColor: '#f39c12',
    borderColor: '#e67e22',
  },
  [RUNNING]: {
    backgroundColor: '#2ecc71',
    borderColor: '#27ae60',
  },
  [BLOCKED]: {
    backgroundColor: '#e74c3c',
    borderColor: '#c0392b',
  },
}
