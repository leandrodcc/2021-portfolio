export const copyEmailToClipboard = async ({ commit }, payload) => {
  if (!navigator.clipboard) {
    return;
  }
  commit("getClipboardText", payload);
  // try {
  //   await navigator.clipboard.writeText(this.$store.getters.copyToClipboardText);
  //   this.callForWarning = true;
  //   setTimeout(() => (this.callForWarning = false), 1200);
  // } catch (err) {
  //   alert("Failed to copy e-mail to clipboard!", err);
  // }
};
