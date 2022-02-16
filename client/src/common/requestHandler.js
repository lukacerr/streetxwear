export default async (func) => {
  try {
    return { data: await func(), error: false };
  } catch (e) {
    console.log(e);
    return { data: e, error: true };
  }
};
