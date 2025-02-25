// // import FuseSearch from '@fuse/core/FuseSearch';
// import { NavShortcuts } from '../../../../cpanel-ui/src/components/NavShortcuts';
// import clsx from 'clsx';
// import { memo } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Hidden from '@mui/material/Hidden';
// import { Toolbar } from '..//Toolbar';
// import { ThemeProvider } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// // import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';

// // import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
// // import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';

// import AdjustFontSize from '~/core/widgets/AdjustFontSize';
// import FullScreenToggle from '~/core/widgets/FullScreenToggle'
// import LanguageSwitcher from '~/core/widgets/LanguageSwitcher'
// import UserNavbarHeader from '~/core/widgets/UserNavbarHeader';
// import NavbarToggleButton from '~/core/widgets/NavbarToggleButton';
// import { RootState } from '~/types';
// // import NotificationPanelToggleButton from '~/core/widgets/'

// const classes = makeStyles((theme) => ({
//     root: {},
// }));

// interface ToolbarLayoutProps {
//     theme: any;
//     navbar: any;
// }

// function ToolbarLayout({ theme, navbar }: ToolbarLayoutProps) {

//     return (
//         <ThemeProvider theme={theme}>
//             <AppBar
//                 id="ud-toolbar"
//                 elevation={1}
//                 className={clsx(classes.root, 'flex relative z-20')}
//                 color="default"
//                 style={{ backgroundColor: theme.palette.background.paper }}
//                 position="sticky"
//             >
//                 <Toolbar className="p-0 min-h-48 md:min-h-64">

//                     {/* {config.navbar.display && config.navbar.position === 'left' && (
//                             <>
//                                 <Hidden mdDown>
//                                     {(config.navbar.style === 'style-3' ||
//                                         config.navbar.style === 'style-3-dense') && (
//                                             <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
//                                         )}

//                                     {config.navbar.style === 'style-1' && !navbar.open && (
//                                         <NavbarToggleButton className="w-40 h-40 p-0 mx-0" sx={{ display: { xs: 'none', md: 'block' } }} />
//                                     )}
//                                 </Hidden>

//                                 <Hidden lgUp>
//                                     <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
//                                 </Hidden>
//                             </>
//                         )} */}

//                     {/* <NavShortcuts /> */}

//                     {/* <div className="flex items-center px-8 h-full overflow-x-auto">
//                         <LanguageSwitcher />

//                         <AdjustFontSize />

//                         <FullScreenToggle />

//                         <UserNavbarHeader />
//                     </div> */}
//                 </Toolbar>
//             </AppBar>
//         </ThemeProvider>
//     );
// }

// export default memo(ToolbarLayout);
