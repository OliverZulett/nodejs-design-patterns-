export default function createImage(name) {
  if (name.match(/\.jpe?g$/)) {
    return new ImageJpeg(name);
  } else if(name.match(/\.gif$/)) {
    return new ImageGif(name);
  } else if(name.match(/\.png$/)) {
    return new ImagePng(name);
  } else {
    throw new Error('Formato de imagen invalido')
  }
}