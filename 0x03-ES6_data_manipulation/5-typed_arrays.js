export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length - 1) {
    throw new Error('Position outside range');
  }
  const newBuff = new ArrayBuffer(length);
  const dv = new DataView(newBuff);
  dv.setUint8(position, value);
  return dv;
}
