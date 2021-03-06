import {Menubar} from 'primereact/menubar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './topbar.scss';
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {isAuthenticated} from "../Auth/auth.utils";

function TopBar(props) {

    const [loggedIn, setLoggedIn] = React.useState(false);

    const template = (item, options) => {
        return (
            <Link to={`${item.url}`} role="menuitem" className={options.className} target={item.target}
                  onClick={options.onClick}>
                {item.icon ? <span className={options.iconClassName}/> : <FontAwesomeIcon className={options.iconClassName} icon={item.faIcon} />}
                <span className="p-menuitem-text">{item.label}</span>
            </Link>
        );
    }

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: '/',
            template: template
        },
        loggedIn && {
            label: 'Rewards',
            icon: 'pi pi-money-bill',
            url: '/reward',
            template: template
        }
    ];

    const ThemeSwitchButton = (props) => {
        if (props.theme === 'light') {
            return <i className="pi pi-sun" />
        }
        return <i className="pi pi-moon" />

    };

    useEffect(() => {
        setLoggedIn(isAuthenticated());
    }, []);

    return (<div></div>);
}

export default TopBar;