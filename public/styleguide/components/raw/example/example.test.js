// import test from 'ava';
const test = function () {
  console.log('meh');
};

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

export default {};
