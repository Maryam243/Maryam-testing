import { PipetestPipe } from './pipetest.pipe';

describe('PipetestPipe', () => {
  const pipe = new PipetestPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Test that num is 14',()=>{
    expect(pipe.transform("10101010101010")).toEqual("it is national id");
  
  });
  
  it('Test that num is 14',function(){
    expect(pipe.transform("12345678912")).toEqual("it is not national id");
  
  });

});
