async function loadEnvFile(jsonEnvFile) {
  try {
    let response = await fetch(jsonEnvFile);
    if (response.ok) {
      return await response.json();
    } else throw new Error(response.statusText);
  } catch (error) {
    throw new Error(
      "JSON configuration file " + jsonEnvFile + " could not be loaded"
    );
  }
}

function enrichApiKeys(envVariables) {
  return {
    apiKey: envVariables.REMNOTE_API_KEY,
    userId: envVariables.REMNOTE_API_USER,
  };
}

async function getRemNoteAuth() {
  let envVariables = await loadEnvFile("./config.json");
  return enrichApiKeys(envVariables);
}
