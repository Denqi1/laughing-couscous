export const pathKeys = {
  root: '/',
  introduction() {
    return this.root;
  },
  page404() {
    return this.root.concat('404/');
  },
  choosing() {
    return this.root.concat('choosing/');
  },
  difficulty() {
    return this.root.concat('difficulty/');
  },
};
