export default async function (func) {
  try {
    return await func();
  } catch (e) {
    console.log(e);
    return e;
  }
}
