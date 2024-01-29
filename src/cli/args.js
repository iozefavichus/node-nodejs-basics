const prefix = '--';

const parseArgs = () => {
  const args = process.argv.slice(2);

  const partsArray = args.reduce((result, value, index) => {
    if (index % 2 === 0) {
      if (value.startsWith(prefix)) {
        const propName = value.substring(2);
        const valueName = args[index + 1];
        result.push(`${propName} is ${valueName}`);
      }
    }
    return result;
  }, []);

  const output = partsArray.join(', ');
  console.log(output);
};

parseArgs();