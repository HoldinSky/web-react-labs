import {ReactNode} from "react";
import "../styles/Layout.scss";
import "../styles/App.scss";

interface Props {
    children: {
        header?: ReactNode;
        body?: ReactNode;
        footer?: ReactNode
    }
}

function Layout({children}: Props) {
    const {header, body, footer} = children;

    return (
        <div className="layout-container">
            {header && <div className="layout header">
                {header}
            </div>}
            {body && <div className="layout body">{body}</div>}
            {footer && <div className="layout footer">{footer}</div>}
        </div>
    );
}

export default Layout;