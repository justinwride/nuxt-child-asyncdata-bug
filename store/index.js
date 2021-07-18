export const state = () => ({
    parentData: null,
    childData: null
});

export const mutations = {
    parentData(state, data) {
        state.parentData = data;
    },
    childData(state, data) {
        state.childData = data;
    }
};