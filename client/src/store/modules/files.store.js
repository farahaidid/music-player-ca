
import { API, API_FORM_DATA } from "../../axios/config.axios"

const initialState = {
   trips: []
}

const state = { ...initialState }

const getters = { FILES: state => state.files }

const mutations = {
   SET_STATE: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   },
   // SET_TRIP_STATE: (state, payload) => {
   //    Object.keys(payload).forEach(key => state[key] = payload[key])
   // }
}

const actions = {
   SAVE_FILES: ({ commit, state, rootState }, files) => new Promise(async resolve => {
      try {
         let { _id, token } = rootState.AUTH.loggedUser
         files.userId = _id;
         let formData = new FormData()
         formData.append('file',files)
         let data = {file: files}
         let file = (await API_FORM_DATA.post(`file/upload?token=${token}`, formData)).data
         console.log("file", file);
         resolve({ message: "File saved successfully!" })
      }
      catch (error) { resolve({ error: error.message }) }
   }),
   FETCH_FILES: ({ commit, rootState }) => new Promise(async resolve => {
      try {
         let { _id, token } = rootState.AUTH.loggedUser
         let files = (await API.get(`file/${_id}/files?token=${token}`)).data
         commit("SET_STATE", { files })
      }
      catch (error) { resolve({ error: error.message }) }
   }),
   DELETE_FILE: ({ dispatch, state, rootState }, fileId) => new Promise(async resolve => {
      try {
         let { _id, token } = rootState.AUTH.loggedUser
         await API.delete(`file/${_id}/files/${fileId}?token=${token}`)
         dispatch("FETCH_FILES")
      }
      catch (error) { resolve({ error: error.message }) }
   })
}

export default {
   namespaced: true, state,
   getters, mutations, actions
}