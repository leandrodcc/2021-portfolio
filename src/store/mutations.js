export default {
  callForWarning(state, warningIsNeeded) {
    state.warningIsNeeded = warningIsNeeded;
  },
  getClipboardText(state, payload) {
    state.copyToClipboardText = payload;
  }
};
