export default (store:any) => (next: Function) => (action: any) => {
    console.log('before:', store.getState());
    console.log('----', 'dispatching', action);
    // const id = (new Date()).getTime();

    !action.payload && (action.payload = {});
    action['payload']['generatedId'] = (new Date()).getTime();
    
    console.log('---', action);
    next(action);
    console.log('after:', store.getState());
}