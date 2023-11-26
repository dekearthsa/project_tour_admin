import {createStore} from 'vuex'

export default createStore({
    state:{
        popContentTitle: "",
        popContentDetail: "",
        popContentBase64: [],
        isProductPopup: false,

        isProductRegion: "",
        isProductName: "",
        isProductArrayBase64: [],
        isProductContent: [],
        isProductInclude: [],
        isProductExclusive: [],
        isProductPrice: [],
        isProductIntro: "",
        isProductObj: []

    }
})