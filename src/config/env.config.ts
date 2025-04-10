export const EnvConfiguration = () => {
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;
  const dbHost = process.env.DB_HOST;
  const dbPort = +process.env.DB_PORT;
  const dbUsername = process.env.DB_USERNAME;
  const localHostPort = +process.env.PORT;
  
  if (!dbPassword || !dbName || !dbHost || !dbUsername) {
    throw new Error('Missing required environment variables');
  }

  return {
    dbPassword,
    dbName,
    dbHost,
    dbPort,
    dbUsername,
    localHostPort,
  };
};