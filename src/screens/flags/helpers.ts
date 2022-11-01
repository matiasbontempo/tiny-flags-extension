import { ExtensionMessage } from './types';

export const sendExtensionMessage = <T>(message: ExtensionMessage<T>) => {
  if (!chrome?.tabs) return;

  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    const activeTab = tabs[0];
    if (!activeTab || !activeTab.id) return;

    chrome.tabs.sendMessage(activeTab.id, message);
  });
};

export const addMessageListener = <T>(cb: (data: T) => void) => {
  if (!chrome?.runtime) return;
  chrome.runtime.onMessage.addListener(cb);
};

export const removeMessageListener = <T>(cb: (data: T) => void) => {
  if (!chrome?.runtime) return;
  chrome.runtime.onMessage.removeListener(cb);
};
