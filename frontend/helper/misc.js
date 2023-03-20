export default function encodeImageFileAsURL(file) {
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    return reader.result
    // reader.readAsDataURL(file);
  }