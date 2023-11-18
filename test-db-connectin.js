const config = require('./config/config');
const { Sequelize } = require('./models');

const seq = new Sequelize(config.database, config.username, config.password, config);

(async () => {
  try {
    await seq.authenticate();
    // eslint-disable-next-line no-console
    console.log('koneksi sukses');
    await seq.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
})();
