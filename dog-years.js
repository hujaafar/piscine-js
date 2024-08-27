function dogYears(planet, ageInSeconds) {
    // Define the number of seconds in an Earth year
    const secondsInEarthYear = 31557600;

    // Orbital periods of each planet relative to Earth years
    const orbitalPeriods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    // Convert age in seconds to Earth years
    const ageInEarthYears = ageInSeconds / secondsInEarthYear;

    // Get the orbital period of the specified planet
    const planetOrbitalPeriod = orbitalPeriods[planet.toLowerCase()];

    // Convert the age in Earth years to the age in the specified planet's years
    const ageInPlanetYears = ageInEarthYears / planetOrbitalPeriod;

    // Convert the age in planet years to dog years
    const ageInDogYears = ageInPlanetYears * 7;

    // Round the result to two decimal places
    return ageInDogYears.toFixed(2);
}

