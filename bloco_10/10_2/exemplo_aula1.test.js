test("Não deveria passar!", () => {
  setTimeout(() => {
    expect(11).toBe(6);
    console.log('Deveria falhar!')
  }, 600);
});
  
  // setTimeout(() => {
  //   console.log("Hi Leo")
  // }, 2000);

  test("Não deveria passar2!", done => {
    setTimeout(() => {
      expect(10).toBe(10);
      console.log('Deveria falhar2!')
      done();
    }, 500);
  });