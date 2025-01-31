import { alpha, createTheme } from '@mui/material'
import type { ConcurrentTheme } from './model'
import { type DeepPartial } from './util'

export const Themes: Record<string, DeepPartial<ConcurrentTheme>> = {
    basic: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#7e7e7e'
            },
            secondary: {
                main: '#737373'
            },
            background: {
                default: '#9e9e9e',
                contrastText: '#ffffff'
            }
        }
    },
    red: {
        meta: {
            author: 'CCb72AAc9dcF088F7088b6718BE5a494fBB3861439', // totegamma
            comment: undefined
        },
        palette: {
            primary: {
                main: '#E0576F'
            },
            secondary: {
                main: '#81225b'
            },
            background: {
                default: '#C74E64',
                contrastText: '#ffffff'
            }
        }
    },
    blue: {
        meta: {
            author: 'CCb72AAc9dcF088F7088b6718BE5a494fBB3861439', // totegamma
            comment: 'コンカレで一番最初に作られたテーマです！'
        },
        palette: {
            primary: {
                main: '#0476d9'
            },
            secondary: {
                main: '#1e6476'
            },
            background: {
                default: '#023059',
                contrastText: '#ffffff'
            }
        }
    },
    orange: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#c52b26'
            },
            secondary: {
                main: '#663916'
            },
            background: {
                default: '#e07d43',
                contrastText: '#ffffff'
            }
        }
    },
    highcontrast_bw: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#ffffff'
            },
            secondary: {
                main: '#ffffff'
            },
            background: {
                default: '#000000',
                paper: '#000000',
                contrastText: '#ffffff'
            },
            text: {
                primary: '#ffffff',
                secondary: 'rgba(255, 255, 255, 0.797)',
                disabled: 'rgba(255, 255, 255, 0.703)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        shape: {
            borderRadius: 1
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px'
                    }
                }
            }
        }
    },
    highcontrast_yb: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#f7cd12'
            },
            secondary: {
                main: '#f7cd12'
            },
            background: {
                default: '#000057',
                paper: '#000000',
                contrastText: '#fffF46'
            },
            text: {
                primary: '#ffffff',
                secondary: 'rgba(255, 255, 255, 0.7)',
                disabled: 'rgba(255, 255, 255, 0.5)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        shape: {
            borderRadius: 1
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px'
                    }
                }
            }
        }
    },
    rabbuttz: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#c52b26'
            },
            secondary: {
                main: '#90591e'
            },
            background: {
                default: '#e07d43',
                paper: '#f8efdd',
                contrastText: '#ffffff'
            }
        }
    },
    gammalab: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#FFF',
                contrastText: '#000'
            },
            secondary: {
                main: '#156a84'
            },
            background: {
                default: '#0476D9',
                paper: '#FFF',
                contrastText: '#FFF'
            },
            divider: 'rgba(0, 0, 0, 0.2)'
        },
        shape: {
            borderRadius: 4
        }
    },
    tote: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#0469c1',
                contrastText: '#cffffe'
            },
            secondary: {
                main: '#154f90'
            },
            background: {
                default: '#ffd54c',
                paper: '#FFF',
                contrastText: '#423e3e'
            },
            text: {
                primary: '#363636',
                secondary: 'rgba(58, 35, 32, 0.8)',
                disabled: 'rgba(164, 164, 164, 0.6)'
            },
            divider: 'rgba(0, 0, 0, 0.2)'
        }
    },
    cafe: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#663741'
            },
            secondary: {
                main: '#663e37'
            },
            background: {
                default: '#a99996',
                paper: '#f7efea',
                contrastText: '#ffffff'
            }
        },
        shape: {
            borderRadius: 2
        }
    },
    rainyday: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#70868b'
            },
            secondary: {
                main: '#4d6662'
            },
            background: {
                default: '#839fa1',
                paper: '#ebf3f5',
                contrastText: '#ffffff'
            },
            text: {
                primary: '#232d31',
                secondary: 'rgba(52, 61, 66, 0.7)',
                disabled: 'rgba(0, 0, 0, 0.5)'
            },
            divider: 'rgba(0, 0, 0, 0.2)'
        },
        shape: {
            borderRadius: 0
        }
    },
    oldcomputing: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#939195'
            },
            secondary: {
                main: '#4b4b56'
            },
            background: {
                default: '#6d6d70',
                paper: '#f0edf1',
                contrastText: '#ffffff'
            }
        },
        shape: {
            borderRadius: 2
        }
    },
    redmond: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#00007C',
                contrastText: '#FFF'
            },
            secondary: {
                main: '#00007C'
            },
            background: {
                default: '#377E7F',
                paper: '#ffffff',
                contrastText: '#ffffff'
            }
        },
        shape: {
            borderRadius: 0
        }
    },
    ニンテン: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#7f2f2f',
                contrastText: '#ffeba8'
            },
            secondary: {
                main: '#5f4d3c'
            },
            background: {
                default: '#e3dccc',
                paper: '#f6f1e0',
                contrastText: '#514a29'
            },
            text: {
                primary: '#1a1a18',
                secondary: 'rgba(0, 0, 0, 0.7)',
                disabled: 'rgba(0, 0, 0, 0.5)'
            },
            divider: 'rgba(0, 0, 0, 0.2)'
        },
        shape: {
            borderRadius: 0
        }
    },
    sacher: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#c77e18',
                contrastText: '#fffefa'
            },
            secondary: {
                main: '#4a5a54'
            },
            background: {
                default: '#188aa3',
                paper: '#f6f1e0',
                contrastText: '#fffef8'
            },
            text: {
                primary: '#2e0d03',
                secondary: '#4c6675',
                disabled: 'rgba(0, 0, 0, 0.5)'
            },
            divider: 'rgba(0, 0, 0, 0.2)'
        },
        shape: {
            borderRadius: 3
        }
    },
    blue2: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#116691'
            },
            secondary: {
                main: '#b3f6ff'
            },
            background: {
                default: '#211a3d',
                paper: '#202c4b',
                contrastText: '#dbfafc'
            },
            text: {
                primary: '#fff',
                secondary: 'rgba(255, 255, 255, 0.8)',
                disabled: 'rgba(255, 255, 255, 0.6)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px'
                    }
                }
            }
        }
    },
    darkgray: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#555',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#d7d7d7'
            },
            background: {
                default: '#333333',
                paper: '#222',
                contrastText: '#ffffff'
            },
            text: {
                primary: '#fff',
                secondary: 'rgba(255, 255, 255, 0.7)',
                disabled: 'rgba(255, 255, 255, 0.5)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px'
                    }
                }
            }
        },
        shape: {
            borderRadius: 2
        }
    },
    messy: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#7f2f2f',
                contrastText: '#fff2c3'
            },
            secondary: {
                main: '#9b7298'
            },
            background: {
                default: '#18171d',
                paper: '#242023',
                contrastText: '#f1f1ca'
            },
            text: {
                primary: '#fbffd4',
                secondary: 'rgba(255, 255, 255, 0.7)',
                disabled: 'rgba(255, 255, 255, 0.5)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px'
                    }
                }
            }
        },
        shape: {
            borderRadius: 2
        }
    },
    trick: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#2f0931',
                contrastText: '#f4870a'
            },
            secondary: {
                main: '#393131'
            },
            background: {
                default: '#29232c',
                paper: '#9297ab',
                contrastText: '#d5d038'
            },
            text: {
                primary: '#2a0128',
                secondary: 'rgba(0, 0, 0, 0.7)',
                disabled: 'rgba(114, 114, 114, 0.5)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px'
                    }
                }
            }
        },
        shape: {
            borderRadius: 2
        }
    },
    sorcer: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#3b3845',
                contrastText: '#9ed952'
            },
            secondary: {
                main: '#393131'
            },
            background: {
                default: '#362136',
                paper: '#759697',
                contrastText: '#e6973e'
            },
            text: {
                primary: '#071f32',
                secondary: 'rgba(0, 0, 0, 0.7)',
                disabled: 'rgba(114, 114, 114, 0.5)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px'
                    }
                }
            }
        },
        shape: {
            borderRadius: 2
        }
    },
    christmas: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#1f6c29',
                contrastText: '#ffefb5'
            },
            secondary: {
                main: '#321f3f'
            },
            background: {
                default: '#730a0a',
                paper: '#edede2',
                contrastText: '#fafaa1'
            },
            text: {
                primary: '#1e1f1c',
                secondary: 'rgba(21, 20, 20, 0.7)',
                disabled: 'rgba(0, 0, 0, 0.5)'
            },
            divider: 'rgba(255, 255, 255, 0.2)'
        },
        shape: {
            borderRadius: 2
        }
    },
    winter_panache: {
        meta: {
            author: 'CCBFe6f64AEE52A200B7C47D3D83680A226967d83C', // waonme
            comment: undefined
        },
        palette: {
            primary: {
                main: '#ecd538',
                contrastText: '#fffefa'
            },
            secondary: {
                main: '#4a5a54'
            },
            background: {
                default: '#e2ecee',
                paper: '#f6fbff',
                contrastText: '#4d3721'
            },
            text: {
                primary: '#2e0d03',
                secondary: '#4c6675',
                disabled: 'rgba(0, 0, 0, 0.5)'
            },
            divider: 'rgba(0, 0, 0, 0.1)'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        borderRadius: '10px'
                    }
                }
            }
        },
        shape: {
            borderRadius: 3
        }
    }
}

export const ConcurrentDefaultTheme = {
    palette: {
        primary: {
            main: '#7e7e7e'
        },
        secondary: {
            main: '#737373'
        },
        background: {
            default: '#9e9e9e',
            contrastText: '#ffffff'
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
            disabled: 'rgba(0, 0, 0, 0.5)'
        }
    },
    typography: {
        fontSize: 14,
        body1: {
            fontSize: '1rem'
        },
        h1: {
            fontSize: 32,
            fontWeight: 700
        },
        h2: {
            fontSize: 24,
            fontWeight: 700
        },
        h3: {
            fontSize: 19.2,
            fontWeight: 700
        },
        h4: {
            fontSize: 16,
            fontWeight: 700
        },
        h5: {
            fontSize: 12.8,
            fontWeight: 700
        },
        h6: {
            fontSize: 11.2,
            fontWeight: 700
        }
    },
    transitions: {
        duration: {
            entieringScreen: 50,
            leavingScreen: 50
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '4px 16px'
                }
            },
            defaultProps: {
                variant: 'contained'
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '::-webkit-scrollbar': {
                    width: '10px',
                    height: '10px'
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px'
                },
                html: {
                    overscrollBehaviorY: 'none'
                },
                body: {
                    overflowX: 'hidden'
                },
                '.snackbar-container-mobile': {
                    bottom: 'calc(55px + env(safe-area-inset-bottom))'
                }
            }
        }
    },
    shape: {
        borderRadius: 4
    }
}

function isObject(item: any): item is object {
    return item && typeof item === 'object' && !Array.isArray(item)
}

export function deepMerge(target: Record<string, any>, source: Record<string, any>): ConcurrentTheme {
    const output = { ...target }

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key: string) => {
            if (isObject(source[key])) {
                if (!(key in target)) Object.assign(output, { [key]: source[key] })
                else output[key] = deepMerge(target[key], source[key])
            } else {
                Object.assign(output, { [key]: source[key] })
            }
        })
    }
    return output as ConcurrentTheme
}

export const createConcurrentThemeFromObject = (base: any): ConcurrentTheme => {
    if (base.palette.text !== undefined) {
        if (base.palette.text.hint === undefined) base.palette.text.hint = alpha(base.palette.text.primary, 0.5)
        if (base.palette.text.disabled === undefined) base.palette.text.disabled = alpha(base.palette.text.primary, 0.5)
        if (base.palette.divider === undefined) base.palette.divider = alpha(base.palette.text.primary, 0.12)
    }

    if (base.palette.text?.primary && !base.components)
        base.components = {
            MuiCssBaseline: {
                styleOverrides: {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: alpha(base.palette.text.primary, 0.2)
                    }
                }
            }
        }

    const theme: ConcurrentTheme = deepMerge(ConcurrentDefaultTheme, base)
    return createTheme(theme) as ConcurrentTheme
}

export const loadConcurrentTheme = (
    name: string,
    customs: Record<string, DeepPartial<ConcurrentTheme>> = {}
): ConcurrentTheme => {
    const base = customs[name] ?? Themes[name] ?? Themes.basic
    return createConcurrentThemeFromObject(base)
}
