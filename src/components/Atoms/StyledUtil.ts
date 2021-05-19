import { ThemedStyledFunction } from 'styled-components';


/**
 * styled-component with props util
 */
// @ts-ignore
const withProps = <U>() => <P, T, O>(fn: ThemedStyledFunction<P, T, O>) =>
    // @ts-ignore
    fn as ThemedStyledFunction<P & U, T, O & U>;
export default withProps;