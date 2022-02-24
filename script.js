const inputFiles = document.getElementById('input').files;
const inputElement = document.getElementById('input');

const debug = document.getElementById('debug');

inputElement.addEventListener('change', handleFiles, false);

async function handleFiles() {
  const fileList = this.files;
  console.log(Array.from(fileList));

  for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
    const file = fileList[i];
    file
      .text()
      .then(processFiles)
      .catch((err) => {
        console.error(result);
      });
  }
}

var resultObj = {};

const processFiles = (result) => {
  console.log(JSON.parse(result));
  resultObj = merge(resultObj, JSON.parse(result));
  console.log(resultObj);
};

function merge(a, b) {
  return Object.entries(b).reduce((o, [k, v]) => {
    o[k] =
      v && typeof v === 'object'
        ? merge((o[k] = o[k] || (Array.isArray(v) ? [] : {})), v)
        : v;
    return o;
  }, a);
}

saveFile = (filename, content) => {
  let hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURI(content);
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  hiddenElement.click();
};

const log = (str) => {
  debug.innerHTML = str;
};
