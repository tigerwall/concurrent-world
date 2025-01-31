import { memo } from 'react'
import { IconButton, Box, useTheme, AppBar, Toolbar } from '@mui/material'
import { ConcurrentLogo } from './theming/ConcurrentLogo'
import type { ConcurrentTheme } from '../model'
import { useGlobalActions } from '../context/GlobalActions'

export interface TimelineHeaderProps {
    title?: string
    titleIcon?: JSX.Element
    onTitleClick?: () => void
    secondaryAction?: JSX.Element
    onSecondaryActionClick?: () => void
    useRawSecondaryAction?: boolean
}

export const TimelineHeader = memo<TimelineHeaderProps>((props: TimelineHeaderProps): JSX.Element => {
    const theme = useTheme<ConcurrentTheme>()
    const actions = useGlobalActions()

    const color =
        theme.components?.MuiAppBar?.defaultProps?.color === 'transparent'
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText

    return (
        <AppBar
            elevation={0}
            position="relative"
            sx={{
                borderLeft: 'none',
                borderTop: 'none',
                borderRight: 'none'
            }}
        >
            <Toolbar variant="dense">
                <Box width="40px" height="40px">
                    <IconButton
                        sx={{
                            display: { xs: 'inherit', sm: 'none' }
                        }}
                        onClick={() => {
                            actions.openMobileMenu(true)
                        }}
                    >
                        <ConcurrentLogo size="25px" upperColor={color} lowerColor={color} frameColor={color} />
                    </IconButton>
                </Box>
                <Box display="flex" flex={1} color={color} alignItems="center" justifyContent="center">
                    {props.titleIcon}
                    <b>{props.title}</b>
                </Box>
                <Box width="40px" height="40px">
                    {props.useRawSecondaryAction ? (
                        props.secondaryAction
                    ) : (
                        <IconButton
                            sx={{
                                p: 1,
                                position: 'absolute',
                                color: { color }
                            }}
                            onClick={props.onSecondaryActionClick}
                        >
                            {props.secondaryAction}
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
})
TimelineHeader.displayName = 'TimelineHeader'
