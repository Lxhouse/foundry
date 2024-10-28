import { create } from 'zustand';

const useComponentsStore = create(() => ({
  components: [],
}));

export default useComponentsStore;
