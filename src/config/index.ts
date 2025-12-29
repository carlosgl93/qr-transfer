const title = 'QR Transferencias';

const email = 'cgumucio93@gmail.com';

const repository = 'https://github.com/carlosgl93/qr-transfer';

const dateFormat = 'DD MMMM, YYYY';

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Genera QRs para transferir rapidamente!',
};

export { loader, dateFormat, repository, email, title, defaultMetaTags };
