import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
interface UpdateReadyDialogueProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function UpdateReadyDialogue(props: UpdateReadyDialogueProps) {
    const { t } = useTranslation(['service', 'core']);
    return <Dialog open={props.open} onClose={() => props.setOpen(false)}>
        <DialogTitle>{t('service:available_update.title')}</DialogTitle>
        <DialogContent>
            {t('service:available_update.content')}
        </DialogContent>
        <DialogActions>
            <Button variant="text" onClick={() => props.setOpen(false)}>{t('core:button.dismiss')}</Button>
        </DialogActions>
    </Dialog>
}