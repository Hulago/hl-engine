

describe('Server', () => {
  describe('Producer', () => {
    it('should get a process unit');
    it('should dispatch/notify the process unit to the consumer');
    it('if no process unit found it should sleep');
  })

  describe('Consumer', () => {
    it('should receive a process unit from the producer');
    it('should process the process unit and update process unit state');
    it('should notify producer when finish or error');
  })
})