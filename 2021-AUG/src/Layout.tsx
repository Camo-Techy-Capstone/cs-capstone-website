import React, {PropsWithChildren} from 'react'
import Header from "./Header";

const Layout: React.FC = (props: PropsWithChildren<any>) => {
    const { children } = props;
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout;