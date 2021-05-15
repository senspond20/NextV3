import dynamic from 'next/dynamic';
const TuiEditor = dynamic(
    () => import('components/Editor/TuiEditor'),
    { ssr: false }
);
function writePost():JSX.Element {
    return (
        <>
            <TuiEditor/>
        </>
    )
}

export default writePost;