for (const property in statistics) {
  if (`${property}`.charAt(0) == 'r' || `${object[property]}` % 2 == 1) {
    console.log(`${object[property]}`);
  }
}
