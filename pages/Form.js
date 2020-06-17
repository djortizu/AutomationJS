const { I } = inject();

module.exports = {

  elements: {
    inputBox: '#hello-input',
    submissionBtn: '#hello-submit'
  },

  submitData(name) {
    I.fillField(this.inputBox, name)
    I.click(this.submissionBtn)
  },
}
