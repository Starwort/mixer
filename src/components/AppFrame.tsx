import { List, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, DrawerAdjust, ListItemLink, NavigationDrawer } from '.';
import { Dict } from '../misc';

interface PageData {
    title: string;
    icon: React.ReactNode;
}
export const pageData: Dict<PageData> = {
    '/': {
        title: 'Home',
        icon: <HomeIcon />,
    },
}

interface AppFrameProps {
    setTheme: (value: "dark" | "light") => void;
    theme: "dark" | "light";
    children: React.ReactNode;
}
let initialRenders = 2;
export default function AppFrame(props: AppFrameProps) {
    const theme = useTheme();
    const startOpen = useMediaQuery(theme.breakpoints.up('lg'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    if (initialRenders) {
        if (startOpen) {
            setDrawerOpen(true);
        }
        initialRenders--;
    }
    const { t } = useTranslation('core');
    return (
        <>
            <AppBar setTheme={props.setTheme} setDrawerOpen={setDrawerOpen} theme={props.theme} drawerOpen={drawerOpen} title={<Typography variant="h6">
                {t('core:title.generic')}
            </Typography>} />
            <NavigationDrawer open={drawerOpen} setOpen={setDrawerOpen}>
                <List>
                    {Object.entries<PageData>(pageData).map(([route, data]) => (
                        <ListItemLink to={route} icon={data.icon} primary={t(data.title)} />
                    ))}
                </List>
            </NavigationDrawer>
            <DrawerAdjust active={drawerOpen}>
                {props.children}
            </DrawerAdjust>
        </>
    );
}
