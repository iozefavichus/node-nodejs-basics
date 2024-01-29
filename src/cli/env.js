const pre = 'RSS_';

const parseEnv = () => {

    const partsArray = Object.entries(process.env).reduce((result, [key, value]) => {
    if (key.startsWith(pre)) {
      result.push(`${key}=${value}`);
    }
    return result;
  }, []);

  const output = partsArray.join('; ');
  console.log(output);
};

parseEnv();