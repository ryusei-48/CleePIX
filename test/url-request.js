const {} = require('req')

async function url_request() {
  return await fetch('https://vivaldi.com/bk/amazon-jp', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    }
  })
}

async function run() {
  const response = await url_request();
  console.log(response);
  if (response.ok) {
    console.log(response.status);
    console.log(await response.text());
  } else {
    console.log(response.status);
    console.log(response.statusText);
  }
}

run();