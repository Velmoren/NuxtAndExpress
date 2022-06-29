import {dateNow} from 'assets/js/helpers'

export const state = () => ({
  startDate: '',
  endDate: '',
  pdfInfo: {},
  linkInfo: {}
})

export const mutations = {
  setChangeStartDate(state, val) {
    state.startDate = val
  },
  setChangeEndDate(state, val) {
    state.endDate = val
  },
  resetInputsDate(state) {
    state.startDate = ''
    state.endDate = ''
  },
  setPDFInfo(state, pdfInfo) {
    state.pdfInfo = pdfInfo
  },
  setPDFInfoClear(state) {
    state.pdfInfo = {}
  },
  setPaymentLinkInfo(state, linkInfo) {
    state.linkInfo = linkInfo
  },
  setPaymentLinkInfoClear(state) {
    state.pdfInfo = {}
  },
}

export const actions = {
  setChangeStartDate({commit}, val) {
    commit('setChangeStartDate', val)
  },
  setChangeEndDate({commit}, val) {
    commit('setChangeEndDate', val)
  },
  resetInputsDate({commit}) {
    commit('resetInputsDate')
  },
  setPDFInfo({commit}, pdfInfo) {
    commit('setPDFInfo', pdfInfo)
  },
  setPDFInfoClear({commit}) {
    commit('setPDFInfoClear')
  },
  setPaymentLinkInfo({commit}, linkInfo) {
    commit('setPaymentLinkInfo', linkInfo)
  },
  setPaymentLinkInfoClear({commit}) {
    commit('setPaymentLinkInfoClear')
  }
}

export const getters = {
  getStartDate(state) {
    return state.startDate
  },
  getEndDate(state) {
    return state.endDate
  },
  getPDFInfo(state) {
    return state.pdfInfo
  },
  getPaymentLinkInfo(state) {
    return state.linkInfo
  },
}
