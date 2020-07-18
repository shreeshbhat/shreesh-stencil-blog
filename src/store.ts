import { createStore } from "@stencil/store";

export interface State {
  pageTheme: 'light' | 'dark';
  prismLanguagesLoaded: any;
}

const { state } = createStore({
  pageTheme: 'dark',
  prismLanguagesLoaded: {
  }
} as State);

export default state;