import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { AppFrame, Loading, UpdateReadyDialogue, WorksOfflineDialogue } from './components';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import getTheme from './themes';

export function App() {
    const themeSetting: "dark" | "light" = window.localStorage.theme || 'dark';
    const [chosenTheme, setChosenThemeImpl] = React.useState<'dark' | 'light'>(themeSetting);
    function setChosenTheme(value: 'dark' | 'light') {
        document.body.classList.add("no-transition");
        setTimeout(() => setChosenThemeImpl(value), 10);
        setTimeout(() => document.body.classList.remove("no-transition"), 20);
    }
    const theme = React.useMemo(
        () => getTheme(chosenTheme),
        [chosenTheme]
    );
    const [updateReady, setUpdateReady] = React.useState(false);
    const [worksOffline, setWorksOffline] = React.useState(false);
    serviceWorkerRegistration.register({ onUpdate: _ => setUpdateReady(true), onSuccess: _ => setWorksOffline(true) });
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppFrame theme={chosenTheme} setTheme={setChosenTheme}>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/loading">
                        <Loading />
                    </Route>
                </Switch>
            </Suspense>
        </AppFrame>
        <WorksOfflineDialogue open={worksOffline} setOpen={setWorksOffline} />
        <UpdateReadyDialogue open={updateReady} setOpen={setUpdateReady} />
    </ThemeProvider>;
}
