let logoutCallback: () => void = () => null;

export function registerLogout(registeredLogoutCallback: () => void) {
  logoutCallback = registeredLogoutCallback;
}

export function triggerLogout() {
  return logoutCallback();
}
