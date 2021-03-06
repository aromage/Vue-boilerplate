/**
 * Automatically imports all the modules and exports as a single module object
 */

const requireModule = require.context('.', false, /\.store\.ts$/);
const modules = {};

requireModule.keys().forEach((filename) => {
  // create the module name from fileName
  // remove the store.js extension and capitalize
  const moduleName = filename.replace(/(\.\/|\.store\.ts)/g, '').toUpperCase();

  modules[moduleName] = requireModule(filename).default || requireModule(filename);
});

export default modules;

/**
 * ! boilerplate
 *   */

// const state = {};

// const getters = {};

// const mutations = {};

// const actions = {};

// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions,
// };
