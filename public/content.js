chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_FLAGS' ) {
    document.dispatchEvent(new CustomEvent('TF_GET_FLAGS'));
  } else if (request.type === 'SET_FLAG') {
    document.dispatchEvent(new CustomEvent('TF_SET_FLAG', { detail: request.payload }));
  }
});

document.addEventListener('TF_FLAGS', ({ detail }) => {
  chrome.runtime.sendMessage({
    type: "GOT_FLAGS",
    payload: detail,
  });
});