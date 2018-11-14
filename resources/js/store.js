import Vue from 'vue'
import Vuex from 'vuex'
//import VuexPersist from 'vuex-persist'
// import { builtinModules } from 'module';

// const vuexPersist = new VuexPersist({
//   key: 'my-app',
//   storage: localStorage
// })

Vue.use(Vuex)
const sale = {
  state: {
    sale: {
      metodoPago: 'efectivo',
      comprobante: 'boleta',
      boucher: '',
      notaCredito: {},
      monedaPrecio: '',
    }
  },
  mutations: {
    setMonedaPrecio(state, monedaPrecio) {
      state.monedaPrecio = monedaPrecio;
    }
  }
}

const system = {
  state: {
    credentials: [],
    business: {},
    office: {},
    offices: [],
    businesses: [],
    user: {},
  },
  mutations: {
    addCredential(state, credential) {
      state.credentials.push(credential);
    },
    removeCredential(state, index) {
      state.credentials.splice(index, 1);
    },
    resetUser(state) {
      state.user = {};
      state.office = {};
      state.business = {};
    },
    setUser(state, user) {
      state.user = user;
    },
    setBusiness(state, data) {
      state.business = data.business;
      state.office = data.office;
    },
  },
  getters: {
    authenticated: (state) => Object.keys(state.user).length,
    setBusiness: (state) => Object.keys(state.office).length,
    userFullName: (state) => `${state.user.apellidos} ${state.user.nombres}`,
  }
}

const product = {
  state: {
    servicio: false,
    sinStock: true,
    sinSerie: true,
    marca: '',
    categoria: ''
  },
  mutations: {
    setBrand(state, brand) {
      state.marca = brand;
    },
    setCategory(state, category) {
      state.categoria = category;
    },
  }
}

const currentProduct = {
  state: {
    currentProduct: {}
  },
  mutations: {
    setCurrentProduct(state, product) {
      console.log(product);
      state.currentProduct = product;
    }
  }
}

const currentCategory = {
  state: {
    category: {}
  },
  mutations: {
    setCurrentCategory(state, category) {
      Object.assign(state.category, category);
    }
  }
}

const currentBrand = {
  state: {
    brand: {}
  },
  mutations: {
    setCurrentBrand(state, brand) {
      Object.assign(state.brand, brand);
    }
  }
}

const products = {
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
    plusProduct(state, index) {
      state.products[index].cantidad++;
    },
    minusProduct(state, index) {
      state.products[index].cantidad--;
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
    resetSale(state) {
      state.products = [];
    },
  }
}

export default new Vuex.Store({
  modules: {
    products: products,
    sale: sale,
    system: system,
    product: product,
    currentProduct: currentProduct,
    currentBrand: currentBrand,
  },
  //plugins: [vuexPersist.plugin],
})
