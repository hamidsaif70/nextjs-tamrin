import {jsx} from 'next'
export default function Layout({ children }) {
    return (
        <>
            <h1 style={{backgroundColor:"lightgrey"}}>this is main Layout for all pages</h1>
            {children}
        </>
    );
};
