module.exports.command = {
  name: "resettestchannelvar",
  code: `
  $resetUserVar[custom;$mentioned[1;yes]]
  Successfully Reseted!
  $onlyAdmin[Only Admin can run this command!]`
  }