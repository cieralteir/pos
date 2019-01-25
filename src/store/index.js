import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  items: [],
  orders: []
}

const getters = {
  itemComputedQty: (state) => (id) => {
    const item = state.items.find(item => {
      return item.id === id;
    });
    const order = state.orders.find(order => {
      return order.id === id;
    });
  
    return item.quantity - (order ? order.quantity : 0);
  },
  totalOrderPrice: (state) => {
    let total = 0;

    state.orders.forEach(order => {
      total += (order.quantity * order.price);
    });

    return total;
  }
}

const actions = {
  addItemToOrders({
    state,
    commit
  }, item) {
    const found = state.orders.find(order => {
      return order.id === item.id;
    });

    if (found) {
      commit("incrementOrderQty", item.id);
    } else {
      const order = { ...item,
        quantity: 1
      };
      commit("addOrder", order);
    }
  },
  updateOrderQty({
    commit
  }, {
    id,
    value
  }) {
    const item = state.items.find(item => {
      return item.id === id;
    });

    if (value > item.quantity) {
      alert(`Qty must not be greater than ${item.quantity}`);
      return false;
    }
    
    if (value < 0) {
      alert("Qty must not be less thatn 0");
      return false;
    }

    commit("updateOrderQty", {
      id,
      value
    });

    return true;
  }
}

const mutations = {
  addItem(state, item) {
    item = Object.assign({
      id: Date.now()
    }, item);
    state.items.push(item);
  },
  addOrder(state, item) {
    state.orders.push(item);
  },
  incrementOrderQty(state, id) {
    const index = state.orders.findIndex(order => {
      return order.id === id;
    });
    state.orders[index].quantity++;
  },
  updateOrderQty(state, {
    id,
    value
  }) {
    const index = state.orders.findIndex(order => {
      return order.id === id;
    });
    state.orders[index].quantity = value;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});