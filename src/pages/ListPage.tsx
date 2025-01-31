import { Box, Button, Divider, Tab, Tabs, Typography } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom'
import { usePreference } from '../context/PreferenceContext'
import { Timeline } from '../components/Timeline'
import { Draft } from '../components/Draft'
import { useApi } from '../context/api'
import { type CreateCurrentOptions, type CommonstreamSchema, type Stream } from '@concurrent-world/client'
import InfoIcon from '@mui/icons-material/Info'
import ExploreIcon from '@mui/icons-material/Explore'
import { ListSettings } from '../components/ListSettings'
import ListIcon from '@mui/icons-material/List'
import { CCDrawer } from '../components/ui/CCDrawer'
import { TimelineHeader } from '../components/TimelineHeader'
import { type VListHandle } from 'virtua'

export function ListPage(): JSX.Element {
    const client = useApi()
    const path = useLocation()
    const navigate = useNavigate()
    const [lists, setLists] = usePreference('lists')
    const [showEditorOnTop] = usePreference('showEditorOnTop')
    const [showEditorOnTopMobile] = usePreference('showEditorOnTopMobile')
    const rawid = path.hash.replace('#', '')
    const id = lists[rawid] ? rawid : Object.keys(lists)[0]
    const [tab, setTab] = useState<string>(id)

    const [streams, setStreams] = useState<Array<Stream<CommonstreamSchema>>>([])
    const [postStreams, setPostStreams] = useState<Array<Stream<CommonstreamSchema>>>([])
    const [listSettingsOpen, setListSettingsOpen] = useState<boolean>(false)

    const timelineRef = useRef<VListHandle>(null)

    useEffect(() => {
        if (!id) return
        const list = lists[id]
        if (!list) return
        Promise.all(list.streams.map((streamID) => client.getStream(streamID))).then((streams) => {
            setStreams(streams.filter((e) => e !== null) as Array<Stream<CommonstreamSchema>>)
        })

        Promise.all(list.defaultPostStreams.map((streamID) => client.getStream(streamID))).then((streams) => {
            setPostStreams(streams.filter((e) => e !== null) as Array<Stream<CommonstreamSchema>>)
        })
    }, [id, lists])

    useEffect(() => {
        if (id) {
            setTab(id)
        }
    }, [id])

    useEffect(() => {
        navigate(`#${tab}`)
    }, [tab])

    const streamIDs = useMemo(() => {
        return [...(lists[id]?.streams ?? []), lists[id]?.userStreams.map((e) => e.streamID) ?? []].flat()
    }, [id, lists])

    if (!lists[id]) {
        return (
            <Box>
                <div>list not found</div>
                <Button
                    onClick={() => {
                        setLists({
                            home: {
                                label: 'Home',
                                pinned: true,
                                streams: [],
                                userStreams: [],
                                expanded: false,
                                defaultPostStreams: []
                            }
                        })
                        window.location.reload()
                    }}
                >
                    治す
                </Button>
            </Box>
        )
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '100%',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <TimelineHeader
                    title={lists[id].label}
                    titleIcon={<ListIcon />}
                    secondaryAction={<InfoIcon />}
                    onSecondaryActionClick={() => {
                        setListSettingsOpen(true)
                    }}
                    onTitleClick={() => {
                        timelineRef.current?.scrollTo(0)
                    }}
                />
                <Tabs
                    value={tab}
                    onChange={(_, newValue) => {
                        setTab(newValue)
                    }}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    {Object.keys(lists)
                        .filter((e) => lists[e].pinned)
                        .map((e) => (
                            <Tab
                                key={e}
                                value={e}
                                label={lists[e].label}
                                onClick={() => {
                                    console.log('click', e, tab)
                                    if (e === tab) {
                                        timelineRef.current?.scrollTo(0)
                                    }
                                }}
                            />
                        ))}
                </Tabs>

                {streamIDs.length > 0 ? (
                    <Timeline
                        header={
                            <>
                                <Box
                                    sx={{
                                        display: {
                                            xs: showEditorOnTopMobile ? 'block' : 'none',
                                            sm: showEditorOnTop ? 'block' : 'none'
                                        }
                                    }}
                                >
                                    <Draft
                                        streamPickerOptions={streams}
                                        streamPickerInitial={postStreams}
                                        onSubmit={async (
                                            text: string,
                                            destinations: string[],
                                            options?: CreateCurrentOptions
                                        ): Promise<Error | null> => {
                                            await client.createCurrent(text, destinations, options).catch((e) => e)
                                            return null
                                        }}
                                        sx={{
                                            p: 1
                                        }}
                                    />
                                    <Divider
                                        sx={{
                                            mb: 1
                                        }}
                                    />
                                </Box>
                            </>
                        }
                        streams={streamIDs}
                        ref={timelineRef}
                    />
                ) : (
                    <Box
                        sx={{
                            marginTop: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                marginTop: 8,
                                marginLeft: 8,
                                marginRight: 8,
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Button component={RouterLink} to="/explorer">
                                <Typography variant="h1" sx={{ fontWeight: 600, mx: 1 }}>
                                    Go Explore
                                </Typography>
                                <ExploreIcon sx={{ fontSize: '10rem', verticalAlign: 'middle' }} />
                            </Button>
                            <p>フォローするユーザー・ストリームを探しに行く</p>
                        </Box>
                    </Box>
                )}
            </Box>
            <CCDrawer
                open={listSettingsOpen}
                onClose={() => {
                    setListSettingsOpen(false)
                }}
            >
                <ListSettings id={id} />
            </CCDrawer>
        </>
    )
}
