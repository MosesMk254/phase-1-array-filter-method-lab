// Code your solution here
// findMatching function
function findMatching(drivers, string) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
}

// fuzzyMatch function
function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(string.toLowerCase())
  );
}

// matchName function
function matchName(driverObjects, string) {
  return driverObjects.filter(
    (driver) => driver.name.toLowerCase() === string.toLowerCase()
  );
}
