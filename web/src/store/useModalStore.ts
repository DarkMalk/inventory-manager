import { create } from 'zustand'

export const useModalStore = create<IStoreModal>(set => ({
  isOpenModal: false,
  toggleModal: () => set(state => ({ isOpenModal: !state.isOpenModal }))
}))
