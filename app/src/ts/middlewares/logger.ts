export default (store:any) => (next: Function) => (action: any) => {
    console.log('before:', store.getState());
    console.log('----', 'dispatching', action);
    next(action);
    console.log('after:', store.getState());
}