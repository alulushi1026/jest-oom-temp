beforeEach(() => {
  console.log("Memory Usage before:", process.memoryUsage());
});

afterEach(() => {
  console.log("Memory Usage after:", process.memoryUsage());
});

test("adds two numbers", () => {
  expect(1).toBe(1);
});
