import { Box, IconButton, ListItem, Typography } from '@mui/material'
import { CCAvatar } from '../ui/CCAvatar'
import { type ProfileSchema, type ReplyMessageSchema, type SimpleNoteSchema } from '@concurrent-world/client'
import { MarkdownRenderer } from '../ui/MarkdownRenderer'
import { IconButtonWithNumber } from '../ui/IconButtonWithNumber'

import StarOutlineIcon from '@mui/icons-material/StarOutline'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import RepeatIcon from '@mui/icons-material/Repeat'
import ReplyIcon from '@mui/icons-material/Reply'
import { TimeDiff } from '../ui/TimeDiff'

export interface DummyMessageViewProps {
    message?: SimpleNoteSchema | ReplyMessageSchema
    user?: ProfileSchema
    userCCID?: string
    timestamp?: JSX.Element
}

export const DummyMessageView = (props: DummyMessageViewProps): JSX.Element => {
    return (
        <ListItem
            sx={{
                wordBreak: 'break-word',
                alignItems: 'flex-start',
                flex: 1,
                gap: { xs: 1, sm: 2 }
            }}
            disablePadding
        >
            {props.message && (
                <>
                    <IconButton
                        sx={{
                            width: { xs: '38px', sm: '48px' },
                            height: { xs: '38px', sm: '48px' },
                            mt: { xs: '3px', sm: '5px' }
                        }}
                    >
                        <CCAvatar
                            alt={props.user?.username ?? 'Unknown'}
                            avatarURL={props.user?.avatar}
                            identiconSource={props.userCCID ?? 'concurrent'}
                            sx={{
                                width: { xs: '38px', sm: '48px' },
                                height: { xs: '38px', sm: '48px' }
                            }}
                        />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column',
                            width: '100%',
                            overflow: 'auto'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'baseline',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography
                                    component="span"
                                    sx={{
                                        fontWeight: '700',
                                        fontSize: { xs: '0.9rem', sm: '0.95rem' }
                                    }}
                                >
                                    {props.user?.username ?? 'Unknown'}
                                </Typography>
                            </Box>
                            {props.timestamp ?? (
                                <Typography
                                    sx={{
                                        px: 1
                                    }}
                                >
                                    <TimeDiff date={new Date()} />
                                </Typography>
                            )}
                        </Box>
                        <MarkdownRenderer messagebody={props.message.body} emojiDict={props.message.emojis ?? {}} />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                height: '1.5rem',
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: { xs: 1, sm: 4 }
                                }}
                            >
                                {/* left */}
                                <IconButtonWithNumber
                                    icon={<ReplyIcon sx={{ fontSize: { xs: '70%', sm: '80%' } }} />}
                                    onClick={() => {}}
                                    message={0}
                                />
                                <IconButtonWithNumber
                                    icon={<RepeatIcon sx={{ fontSize: { xs: '70%', sm: '80%' } }} />}
                                    onClick={() => {}}
                                    message={0}
                                />
                                <IconButtonWithNumber
                                    icon={<StarOutlineIcon sx={{ fontSize: { xs: '70%', sm: '80%' } }} />}
                                    onClick={() => {}}
                                    message={0}
                                />
                                <IconButtonWithNumber
                                    icon={<AddReactionIcon sx={{ fontSize: { xs: '70%', sm: '80%' } }} />}
                                    onClick={() => {}}
                                    message={0}
                                />
                                <IconButtonWithNumber
                                    icon={<MoreHorizIcon sx={{ fontSize: { xs: '70%', sm: '80%' } }} />}
                                    onClick={() => {}}
                                    message={0}
                                />
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
        </ListItem>
    )
}
