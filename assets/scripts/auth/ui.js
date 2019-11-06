'use strict'

const store = require('../store.js')

// Creating Bootstrap alert box by adding class and role to
// a div `.alert`
const successAlert = function(newText) {
  $('.alert').removeClass('alert-danger')
  $('.alert').addClass('alert-success')
  $('.alert').attr('role', 'alert')
  $('.alert').text(newText)
}

// Creating Bootstrap alert box by adding class and role to
// a div `.alert`
const failureAlert = function(newText) {
  $('.alert').removeClass('alert-success')
  $('.alert').addClass('alert-danger')
  $('.alert').attr('role', 'alert')
  $('.alert').text(newText)
}

const alert = function() {
  $('.alert').show()
  window.setTimeout($('.alert').fadeTo(5000, 0).slideUp(5000, function() {
    $(this).remove()
  }), 2000)
}

const modalToggleFix = function() {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const onSignUpSuccess = function(data) {
  successAlert('Signed up successfully!')
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').trigger('reset')
  // show the div element that was hidden with onload event and hide it after
  alert()
  $('#sign-up-modal').modal('hide')
  modalToggleFix()
}

const onSignUpFailure = function(event) {
  failureAlert('Signed up failed')
  $('#sign-up').trigger('reset')
  alert()
  $('#sign-up-modal').modal('hide')
  modalToggleFix()
}

const onSignInSuccess = function(data) {
  successAlert('Signed in successfully!')
  store.user = data.user
  $('#sign-in').trigger('reset')
  alert()
  $('#sign-in-modal').modal('hide')
  modalToggleFix()
  $('#landing-page').hide()
  $('#main-page').show()
  $('#main-content-wrapper').show()
  $('#navigation-bar').show()
}

const onSignInFailure = function(event) {
  failureAlert('Signed in failed')
  $('#sign-in').trigger('reset')
  alert()
  $('#sign-in-modal').modal('hide')
  modalToggleFix()
}

const onChangePasswordSuccess = function(data) {
  successAlert('Changed password successfully!')
  $('#change-password').trigger('reset')
  alert()
  $('#change-password-modal').modal('hide')
  modalToggleFix()
}

const onChangePasswordFailure = function(event) {
  failureAlert('Changed password failed')
  $('#change-password').trigger('reset')
  alert()
  $('#change-password-modal').modal('hide')
  modalToggleFix()
}

const onSignOutSuccess = function() {
  // may not need this alert if we go back to landing page
  successAlert('Signed out successfully!')
  alert()
  $('#landing-page').show()
  $('#main-page').hide()
  $('#main-content-wrapper').hide()
  $('#navigation-bar').hide()
}

const onSignOutFailure = function() {
  failureAlert('Signed out failed')
  alert()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
