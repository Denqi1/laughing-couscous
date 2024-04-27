export const pathKeys = {
  root: '/',
  introduction() {
    return this.root;
  },
  page404() {
    return this.root.concat('404/');
  },
};
