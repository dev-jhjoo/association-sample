import moment from 'moment';

const now = () => moment().format( 'YYYY-MM-DD HH:mm:ss' );

const dateUtil = { now };
export default dateUtil;
