import {
    createStyles,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Theme, withStyles,
} from '@material-ui/core';
import React from 'react';

const data = [{
    'company': 'Hegmann Group',
    'app': 'Holdlamis',
    'purpose': 'Switchable didactic contingency',
}, {
    'company': 'O\'Reilly LLC',
    'app': 'Solarbreeze',
    'purpose': 'Universal composite model',
}, {
    'company': 'Steuber, Fadel and Brakus',
    'app': 'Fix San',
    'purpose': 'Re-contextualized fresh-thinking website',
}, {
    'company': 'Herman-Bogisich',
    'app': 'Ventosanzap',
    'purpose': 'Advanced user-facing workforce',
}, {
    'company': 'Beahan Inc',
    'app': 'Bamity',
    'purpose': 'Stand-alone bandwidth-monitored methodology',
}, {
    'company': 'Moen-Hodkiewicz',
    'app': 'Bitwolf',
    'purpose': 'Customizable 5th generation attitude',
}, {
    'company': 'Klocko Inc',
    'app': 'Stringtough',
    'purpose': 'Synergistic zero defect forecast',
}, {
    'company': 'O\'Connell Group',
    'app': 'Tempsoft',
    'purpose': 'Persevering heuristic alliance',
}, {
    'company': 'Huels-Nitzsche',
    'app': 'Viva',
    'purpose': 'Function-based 4th generation groupware',
}, {
    'company': 'Roob-Armstrong',
    'app': 'Cardguard',
    'purpose': 'Right-sized hybrid superstructure',
}, {
    'company': 'Bednar-Hammes',
    'app': 'Prodder',
    'purpose': 'Configurable human-resource flexibility',
}, {
    'company': 'Jaskolski-Stokes',
    'app': 'Treeflex',
    'purpose': 'Customizable foreground application',
}, {
    'company': 'Weber and Sons',
    'app': 'Cardguard',
    'purpose': 'User-friendly asynchronous help-desk',
}, {
    'company': 'Koss-Bogisich',
    'app': 'Regrant',
    'purpose': 'Inverse demand-driven function',
}, {
    'company': 'Hauck, Wuckert and Kling',
    'app': 'Home Ing',
    'purpose': 'Polarised contextually-based neural-net',
}, {
    'company': 'Gorczany Group',
    'app': 'Rank',
    'purpose': 'Synergized bi-directional policy',
}, {
    'company': 'Robel, Becker and O\'Keefe',
    'app': 'Latlux',
    'purpose': 'Integrated dedicated capacity',
}, {
    'company': 'Hoeger-Daniel',
    'app': 'Domainer',
    'purpose': 'Persevering explicit customer loyalty',
}, {
    'company': 'Hauck-Abbott',
    'app': 'Bitwolf',
    'purpose': 'User-friendly directional help-desk',
}, {
    'company': 'Kunze-Pollich',
    'app': 'Lotlux',
    'purpose': 'Re-contextualized contextually-based emulation',
}, {
    'company': 'Franecki-Bergnaum',
    'app': 'Latlux',
    'purpose': 'Up-sized systemic hardware',
}, {
    'company': 'Stiedemann Group',
    'app': 'Stringtough',
    'purpose': 'Persistent 5th generation installation',
}, {
    'company': 'Leffler and Sons',
    'app': 'Lotstring',
    'purpose': 'Universal tangible functionalities',
}, {
    'company': 'Douglas-Aufderhar',
    'app': 'Y-Solowarm',
    'purpose': 'Operative reciprocal utilisation',
}, {
    'company': 'Kozey and Sons',
    'app': 'Solarbreeze',
    'purpose': 'Reverse-engineered demand-driven productivity',
}, {
    'company': 'Hermiston-Bogisich',
    'app': 'Bamity',
    'purpose': 'Assimilated transitional open system',
}, {
    'company': 'Cormier and Sons',
    'app': 'Flexidy',
    'purpose': 'User-centric 3rd generation alliance',
}, {
    'company': 'Ledner Inc',
    'app': 'Gembucket',
    'purpose': 'Operative asymmetric groupware',
}, {
    'company': 'Nolan LLC',
    'app': 'Ronstring',
    'purpose': 'Seamless systematic application',
}, {
    'company': 'Dooley, Huel and Olson',
    'app': 'Stronghold',
    'purpose': 'Organized zero tolerance toolset',
}];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            '& .MuiTableContainer-root': {
                minWidth: 650,
                maxWidth: 1000,
            },
        },
    }),
);

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

export default function AppList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Company</StyledTableCell>
                            <StyledTableCell align="right">Application</StyledTableCell>
                            <StyledTableCell align="right">Purpose</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => (
                                <TableRow key={row.company}>
                                    <TableCell component="th" scope="row">
                                        {row.company}
                                    </TableCell>
                                    <TableCell align="right">{row.app}</TableCell>
                                    <TableCell align="right">{row.purpose}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
}
