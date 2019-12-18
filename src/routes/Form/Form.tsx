import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    Checkbox,
    Chip,
    createStyles,
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    InputLabel,
    makeStyles,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Theme,
} from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik } from 'formik';
import React from 'react';

const titles = ['Senior Financial Analyst', 'Biostatistician III', 'VP Marketing', 'Senior Sales Associate', 'Nuclear Power Engineer'];
const movies = ['Blue Ruin', 'Widows\' Peak', 'Tale of Sweeney Todd', 'Destiny', 'G.I. Jane', 'The Heart Machine', 'Secret of the Grain, The Matrix', 'White Shadows in the South Seas'];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputFieldRoot: {
            '& > *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 200,
            maxWidth: 300,
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
        },
    }),
);

export default function Form() {
    const classes = useStyles();

    return (
        <div>
            <h2>Simple form</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    languages: [''],
                    gender: '',
                    title: '',
                    movies: [],
                    nativeDate: '',
                    nativeTime: '',
                    materialDate: new Date(),
                    materialDialogDate: new Date(),
                    materialTime: new Date(),
                }}
                onSubmit={values => alert(JSON.stringify(values, null, 2))}
            >
                {formik => (
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className={classes.inputFieldRoot}>
                            <TextField
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                label="Name"
                            />
                            <TextField
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                label="Email"
                            />
                        </div>
                        <br/>
                        <div>
                            <FormLabel component="legend">Language</FormLabel>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={formik.values.languages.includes('english')} onChange={formik.handleChange}
                                              value="english" name="languages" color="primary"/>
                                }
                                label="English"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={formik.values.languages.includes('german')} onChange={formik.handleChange}
                                              value="german" name="languages" color="primary"/>
                                }
                                label="German"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox indeterminate onChange={formik.handleChange} value="indeterminate" name="languages"
                                              color="secondary"/>
                                }
                                label="Indeterminate"
                            />
                        </div>
                        <br/>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                <Select
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                >
                                    {titles.map(item => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Favorite movies</InputLabel>
                                <Select
                                    name="movies"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={formik.values.movies}
                                    onChange={formik.handleChange}
                                    input={<Input id="select-multiple-chip"/>}
                                    renderValue={selected => (
                                        <div className={classes.chips}>
                                            {(selected as string[]).map(value => (
                                                <Chip key={value} label={value} className={classes.chip}/>
                                            ))}
                                        </div>
                                    )}
                                >
                                    {movies.map(movie => (
                                        <MenuItem key={movie} value={movie}>
                                            {movie}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <br/>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <br/>
                        <FormLabel component="legend"> Native pickers</FormLabel>
                        <div className={classes.inputFieldRoot}>
                                <br/>
                                <TextField
                                    name="nativeDate"
                                    value={formik.values.nativeDate}
                                    onChange={formik.handleChange}
                                    label="Date"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    name="nativeTime"
                                    value={formik.values.nativeTime}
                                    onChange={formik.handleChange}
                                    label="Time"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                        </div>
                        <br/>
                        <FormLabel component="legend"> Material pickers</FormLabel>
                        <br/>
                        <div className={classes.inputFieldRoot}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    name="materialDate"
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Date picker inline"
                                    value={formik.values.materialDate}
                                    onChange={value => {formik.setFieldValue('materialDate', value)}}
                                />
                                <KeyboardDatePicker
                                    name="materialDialogDate"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Date picker dialog"
                                    value={formik.values.materialDialogDate}
                                    onChange={value => {formik.setFieldValue('materialDialogDate', value)}}
                                />
                                <KeyboardTimePicker
                                    name="materialTime"
                                    margin="normal"
                                    label="Time picker dialog"
                                    value={formik.values.materialTime}
                                    onChange={value => {formik.setFieldValue('materialTime', value)}}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
