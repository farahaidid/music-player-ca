
import { API, API_FORM_DATA } from "../../axios/config.axios"

const initialState = {
   trips: []
}

const state = { ...initialState }

const getters = { TRIPS: state => state.trips }

const mutations = {
   SET_STATE: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   },
   SET_TRIP_STATE: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   }
}

const actions = {
   SAVE_FILES: ({ commit, state, rootState }, files) => new Promise(async resolve => {
      console.log("files hello", files);
      
      try {
         let { _id, token } = rootState.AUTH.loggedUser
         let formData = new FormData()
         formData.append('file',files)
         let data = {file: files}
         let file = (await API_FORM_DATA.post(`file/upload?token=${token}`, formData)).data
         console.log("file", file);
         resolve({ message: "File saved successfully!" })
      }
      catch (error) { resolve({ error: error.message }) }
   }),
   FETCH_TRIPS: ({ commit, rootState }) => new Promise(async resolve => {
      try {
         let { _id, token } = rootState.AUTH.loggedUser
         let trips = (await API.get(`user/${_id}/trips?token=${token}`)).data
         console.log("TRIPS", trips)
         commit("SET_STATE", { trips })
      }
      catch (error) { resolve({ error: error.message }) }
   }),
   DELETE_TRIP: ({ dispatch, state, rootState }, tripId) => new Promise(async resolve => {
      try {
         let { _id, token } = rootState.AUTH.loggedUser
         await API.delete(`user/${_id}/trip/${tripId}?token=${token}`)
         dispatch("FETCH_TRIPS")
      }
      catch (error) { resolve({ error: error.message }) }
   })
}

export default {
   namespaced: true, state,
   getters, mutations, actions
}