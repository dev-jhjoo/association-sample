const info = ( msg?:string ) => {
  console.log( `[info] ${msg}` );
};

const error = ( msg?:string ) => {
  console.log( `[error] ${msg}` );
};

const logUtil = { info, error };
export default logUtil;
